from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Room, Building
from app.schemas.room import RoomCreate

router = APIRouter(prefix="/rooms", tags=["rooms"])


@router.get("/")
def get_rooms(
    building_id: int | None = Query(default=None),
    floor: str | None = Query(default=None),
    db: Session = Depends(get_db)
):
    query = db.query(Room)

    if building_id is not None:
        query = query.filter(Room.building_id == building_id)

    if floor is not None:
        query = query.filter(Room.floor == floor)

    rooms = query.all()

    return [
        {
            "id": r.id,
            "room_number": r.room_number,
            "capacity": r.capacity,
            "floor": r.floor,
            "is_reservable": r.is_reservable,
            "building_id": r.building_id,
        }
        for r in rooms
    ]


@router.get("/{room_id}")
def get_room(room_id: int, db: Session = Depends(get_db)):
    room = db.query(Room).filter(Room.id == room_id).first()
    if not room:
        raise HTTPException(status_code=404, detail="Room not found.")

    return {
        "id": room.id,
        "room_number": room.room_number,
        "capacity": room.capacity,
        "floor": room.floor,
        "is_reservable": room.is_reservable,
        "building_id": room.building_id,
    }


@router.post("/")
def create_room(data: RoomCreate, db: Session = Depends(get_db)):
    existing_room = db.query(Room).filter(
        Room.building_id == data.building_id,
        Room.room_number == data.room_number
    ).first()

    if existing_room:
        raise HTTPException(status_code=400, detail="Room already exists in this building.")
    
    building = db.query(Building).filter(Building.id == data.building_id).first()
    if not building:
        raise HTTPException(status_code=404, detail="Building not found.")

    room = Room(
        room_number=data.room_number,
        capacity=data.capacity,
        floor=data.floor,
        is_reservable=data.is_reservable,
        building_id=data.building_id,
    )
    db.add(room)
    db.commit()
    db.refresh(room)

    return {"message": "Room created successfully.", "room_id": room.id}