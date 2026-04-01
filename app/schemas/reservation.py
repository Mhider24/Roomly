from datetime import date, time
from pydantic import BaseModel


class ReservationCreate(BaseModel):
    umid: str
    room_id: int
    date: date
    start_time: time
    end_time: time
    is_open: bool = False