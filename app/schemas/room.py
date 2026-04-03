from pydantic import BaseModel


class RoomCreate(BaseModel):
    room_number: str
    capacity: int
    building_id: int
