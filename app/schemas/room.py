from pydantic import BaseModel


class RoomCreate(BaseModel):
    room_number: str
    capacity: int | None = None
    floor: str | None = None
    is_reservable: bool = True
    building_id: int