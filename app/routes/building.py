from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Building
from app.schemas.building import BuildingCreate

router = APIRouter(prefix="/buildings", tags=["buildings"])


@router.get("/")
def get_buildings(db: Session = Depends(get_db)):
    buildings = db.query(Building).all()

    return [
        {
            "id": b.id,
            "code": b.code,
            "name": b.name,
        }
        for b in buildings
    ]


@router.get("/{building_id}")
def get_building(building_id: int, db: Session = Depends(get_db)):
    building = db.query(Building).filter(Building.id == building_id).first()
    if not building:
        raise HTTPException(status_code=404, detail="Building not found.")
    return {
        "id": building.id,
        "code": building.code,
        "name": building.name
    }


@router.post("/")
def create_building(data: BuildingCreate, db: Session = Depends(get_db)):
    existing_name = db.query(Building).filter(Building.name == data.name).first()
    if existing_name:
        raise HTTPException(status_code=400, detail="Building with this name already exists.")

    existing_code = db.query(Building).filter(Building.code == data.code).first()
    if existing_code:
        raise HTTPException(status_code=400, detail="Building with this code already exists.")

    building = Building(code=data.code, name=data.name)
    db.add(building)
    db.commit()
    db.refresh(building)

    return {"message": "Building created successfully.", "building_id": building.id}
