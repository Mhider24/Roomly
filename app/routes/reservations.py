from datetime import date
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Reservation, Room, User
from app.schemas.reservation import ReservationCreate, ReservationUpdate

router = APIRouter(prefix="/reservations", tags=["reservations"])


@router.get("/")
def get_reservations(
    user_id: int | None = Query(default=None),
    room_id: int | None = Query(default=None),
    date: date | None = Query(default=None),
    db: Session = Depends(get_db),
):
    query = db.query(Reservation)

    if user_id is not None:
        query = query.filter(Reservation.user_id == user_id)
    if room_id is not None:
        query = query.filter(Reservation.room_id == room_id)
    if date is not None:
        query = query.filter(Reservation.date == date)

    reservations = query.all()
    return [
        {
            "id": r.id,
            "user_id": r.user_id,
            "room_id": r.room_id,
            "date": str(r.date),
            "start_time": str(r.start_time),
            "end_time": str(r.end_time),
            "is_open": r.is_open,
            "status": r.status,
        }
        for r in reservations
    ]


@router.get("/{reservation_id}")
def get_reservation(reservation_id: int, db: Session = Depends(get_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found.")

    return {
        "id": reservation.id,
        "user_id": reservation.user_id,
        "room_id": reservation.room_id,
        "date": str(reservation.date),
        "start_time": str(reservation.start_time),
        "end_time": str(reservation.end_time),
        "is_open": reservation.is_open,
        "status": reservation.status,
    }


def check_overlap(
    db: Session,
    room_id: int,
    date_value: date,
    start_time,
    end_time,
    exclude_id: int | None = None,
):
    query = db.query(Reservation).filter(
        Reservation.room_id == room_id,
        Reservation.date == date_value,
        Reservation.status == "booked",
        Reservation.start_time < end_time,
        Reservation.end_time > start_time,
    )

    if exclude_id is not None:
        query = query.filter(Reservation.id != exclude_id)

    return db.query(query.exists()).scalar()


@router.post("/")
def create_reservation(data: ReservationCreate, db: Session = Depends(get_db)):
    if data.start_time >= data.end_time:
        raise HTTPException(status_code=400, detail="End time must be after start time.")

    room = db.query(Room).filter(Room.id == data.room_id).first()
    if not room:
        raise HTTPException(status_code=404, detail="Room not found.")

    if not room.is_reservable:
        raise HTTPException(status_code=400, detail="Room is not reservable.")

    user = db.query(User).filter(User.umid == data.umid).first()
    if not user:
        user = User(umid=data.umid, name=f"User {data.umid}")
        db.add(user)
        db.commit()
        db.refresh(user)

    if check_overlap(db, data.room_id, data.date, data.start_time, data.end_time):
        raise HTTPException(status_code=400, detail="Time slot is already reserved.")

    reservation = Reservation(
        user_id=user.id,
        room_id=data.room_id,
        date=data.date,
        start_time=data.start_time,
        end_time=data.end_time,
        is_open=data.is_open,
        status="booked",
    )

    db.add(reservation)
    db.commit()
    db.refresh(reservation)

    return {"message": "Reservation created successfully.", "reservation_id": reservation.id}


@router.put("/{reservation_id}")
def update_reservation(reservation_id: int, data: ReservationUpdate, db: Session = Depends(get_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found.")

    valid_statuses = {"booked", "cancelled"}

    if data.status is not None:
        if data.status not in valid_statuses:
            raise HTTPException(status_code=400, detail="Invalid reservation status.")
        reservation.status = data.status

    if data.start_time is not None:
        reservation.start_time = data.start_time
    if data.end_time is not None:
        reservation.end_time = data.end_time
    if data.date is not None:
        reservation.date = data.date
    if data.is_open is not None:
        reservation.is_open = data.is_open

    if reservation.start_time >= reservation.end_time:
        raise HTTPException(status_code=400, detail="End time must be after start time.")

    if check_overlap(
        db,
        reservation.room_id,
        reservation.date,
        reservation.start_time,
        reservation.end_time,
        exclude_id=reservation.id,
    ):
        raise HTTPException(status_code=400, detail="Time slot is already reserved.")

    db.commit()
    db.refresh(reservation)

    return {"message": "Reservation updated successfully.", "reservation_id": reservation.id}


@router.delete("/{reservation_id}")
def delete_reservation(reservation_id: int, db: Session = Depends(get_db)):
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found.")

    reservation.status = "cancelled"
    db.commit()

    return {"message": "Reservation cancelled successfully.", "reservation_id": reservation.id}