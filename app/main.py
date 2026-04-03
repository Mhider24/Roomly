from fastapi import FastAPI
from app.database import Base, engine
from app.models import Building, Room, User, Reservation
from app.routes.building import router as buildings_router
from app.routes.rooms import router as rooms_router
from app.routes.reservations import router as reservations_router
from app.routes.users import router as users_router

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(rooms_router)
app.include_router(reservations_router)
app.include_router(buildings_router)
app.include_router(users_router)


@app.get("/")
def home():
    return {"message": "Roomly API is running"}