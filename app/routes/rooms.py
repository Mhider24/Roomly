from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Room

router = APIRouter(prefix="/rooms", tags=["rooms"])


@router.get("/")
def get_rooms(building_id: int | None = Query(default=None), db: Session = Depends(get_db)):
    query = db.query(Room)

    if building_id is not None:
        query = query.filter(Room.building_id == building_id)

    rooms = query.all()

    return [
        {
            "id": r.id,
            "room_number": r.room_number,
            "capacity": r.capacity,
            "building_id": r.building_id
        }
        for r in rooms
    ]