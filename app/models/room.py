from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_number = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)
    building_id = Column(Integer, ForeignKey("buildings.id"))

    building = relationship("Building", back_populates="rooms")
    reservations = relationship("Reservation", back_populates="room")