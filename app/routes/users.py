from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import User
from app.schemas.user import UserCreate

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/")
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return [
        {
            "id": u.id,
            "umid": u.umid,
            "name": u.name,
        }
        for u in users
    ]


@router.get("/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    return {"id": user.id, "umid": user.umid, "name": user.name}


@router.post("/")
def create_user(data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.umid == data.umid).first()
    if existing:
        raise HTTPException(status_code=400, detail="User with this UMID already exists.")

    user = User(umid=data.umid, name=data.name)
    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "User created successfully.", "user_id": user.id}
