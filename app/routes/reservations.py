from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Reservation, Room, User
from app.schemas.reservation import ReservationCreate

router = APIRouter(prefix="/reservations", tags=["reservations"])


@router.get("/")
def get_reservations(db: Session = Depends(get_db)):
    reservations = db.query(Reservation).all()

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


@router.post("/")
def create_reservation(data: ReservationCreate, db: Session = Depends(get_db)):
    if data.start_time >= data.end_time:
        raise HTTPException(status_code=400, detail="End time must be after start time.")

    room = db.query(Room).filter(Room.id == data.room_id).first()
    if not room:
        raise HTTPException(status_code=404, detail="Room not found.")

    user = db.query(User).filter(User.umid == data.umid).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    overlapping = (
        db.query(Reservation)
        .filter(
            Reservation.room_id == data.room_id,
            Reservation.date == data.date,
            Reservation.start_time < data.end_time,
            Reservation.end_time > data.start_time,
        )
        .first()
    )

    if overlapping:
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

    return {
        "message": "Reservation created successfully.",
        "reservation_id": reservation.id,
    }