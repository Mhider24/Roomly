from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from app.database import Base


class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_number = Column(String, nullable=False, index=True)
    capacity = Column(Integer, nullable=True)
    floor = Column(String, nullable=True)
    is_reservable = Column(Boolean, default=True, nullable=False)
    building_id = Column(Integer, ForeignKey("buildings.id"), nullable=False)

    building = relationship("Building", back_populates="rooms")
    reservations = relationship("Reservation", back_populates="room")