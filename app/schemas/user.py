from pydantic import BaseModel


class UserCreate(BaseModel):
    umid: str
    name: str
