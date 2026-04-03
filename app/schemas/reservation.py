from datetime import date, time
from pydantic import BaseModel
from typing import Optional


class ReservationCreate(BaseModel):
    umid: str
    room_id: int
    date: date
    start_time: time
    end_time: time
    is_open: bool = False


class ReservationUpdate(BaseModel):
    date: Optional[date] = None
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    is_open: Optional[bool] = None
    status: Optional[str] = None
