from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.models import Building, Room, User, Reservation
from app.routes.building import router as buildings_router
from app.routes.rooms import router as rooms_router
from app.routes.reservations import router as reservations_router
from app.routes.users import router as users_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rooms_router)
app.include_router(reservations_router)
app.include_router(buildings_router)
app.include_router(users_router)

@app.get("/")
def home():
    return {"message": "Roomly API is running"}