from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    umid = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)

    reservations = relationship("Reservation", back_populates="user")