from pydantic import BaseModel


class BuildingCreate(BaseModel):
    code: str
    name: str