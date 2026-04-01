from sqlalchemy import Boolean, Column, Date, ForeignKey, Integer, String, Time
from sqlalchemy.orm import relationship
from app.database import Base


class Reservation(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    is_open = Column(Boolean, default=False)
    status = Column(String, default="booked")

    user_id = Column(Integer, ForeignKey("users.id"))
    room_id = Column(Integer, ForeignKey("rooms.id"))

    user = relationship("User", back_populates="reservations")
    room = relationship("Room", back_populates="reservations")