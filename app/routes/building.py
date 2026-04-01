from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Building

router = APIRouter(prefix="/buildings", tags=["buildings"])


@router.get("/")
def get_buildings(db: Session = Depends(get_db)):
    buildings = db.query(Building).all()

    return [
        {
            "id": b.id,
            "name": b.name
        }
        for b in buildings
    ]