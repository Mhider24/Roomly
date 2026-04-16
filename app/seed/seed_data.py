from datetime import date, time

from app.database import Base, SessionLocal, engine
from app.models import Building, Reservation, Room, User


BUILDINGS = [
    {"code": "casl", "name": "College of Arts, Sciences, and Letters"},
    {"code": "ssb", "name": "Social Sciences Building"},
    {"code": "cis", "name": "Computer & Information Science"},
    {"code": "elb", "name": "England Engineering Lab Building"},
    {"code": "nsb", "name": "Natural Science Building"},
    {"code": "ml", "name": "Mardigian Library"},
]

ROOMS_BY_BUILDING = {
    "casl": [
        {"room_number": "1000", "capacity": 40, "floor": "1"},
        {"room_number": "1001", "capacity": 35, "floor": "1"},
        {"room_number": "1013", "capacity": 30, "floor": "1"},
        {"room_number": "2000", "capacity": 40, "floor": "2"},
        {"room_number": "2004", "capacity": 30, "floor": "2"},
        {"room_number": "3000", "capacity": 35, "floor": "3"},
        {"room_number": "3006", "capacity": 25, "floor": "3"},
    ],
    "ssb": [
        {"room_number": "1000", "capacity": 100, "floor": "1"},
        {"room_number": "1001", "capacity": 50, "floor": "1"},
        {"room_number": "1002", "capacity": 50, "floor": "1"},
        {"room_number": "2103", "capacity": 35, "floor": "2"},
        {"room_number": "2105", "capacity": 35, "floor": "2"},
        {"room_number": "2195", "capacity": 40, "floor": "2"},
        {"room_number": "2206", "capacity": 30, "floor": "2"},
    ],
    "cis": [
        {"room_number": "101", "capacity": 25, "floor": "1"},
        {"room_number": "103", "capacity": 25, "floor": "1"},
        {"room_number": "105", "capacity": 20, "floor": "1"},
        {"room_number": "201", "capacity": 25, "floor": "2"},
        {"room_number": "203", "capacity": 20, "floor": "2"},
        {"room_number": "205", "capacity": 20, "floor": "2"},
    ],
    "elb": [
        {"room_number": "1000", "capacity": 40, "floor": "1"},
        {"room_number": "1001", "capacity": 35, "floor": "1"},
        {"room_number": "1003", "capacity": 30, "floor": "1"},
        {"room_number": "1010", "capacity": 25, "floor": "1"},
        {"room_number": "1021", "capacity": 25, "floor": "1"},
        {"room_number": "2003", "capacity": 35, "floor": "2"},
        {"room_number": "2008", "capacity": 35, "floor": "2"},
        {"room_number": "2010", "capacity": 25, "floor": "2"},
        {"room_number": "2034", "capacity": 25, "floor": "2"},
        {"room_number": "3010", "capacity": 25, "floor": "3"},
        {"room_number": "3026", "capacity": 25, "floor": "3"},
        {"room_number": "3042", "capacity": 30, "floor": "3"},
    ],
    "nsb": [
        {"room_number": "1000", "capacity": 30, "floor": "1"},
        {"room_number": "1002", "capacity": 25, "floor": "1"},
        {"room_number": "1004", "capacity": 25, "floor": "1"},
        {"room_number": "1006", "capacity": 25, "floor": "1"},
    ],
    "ml": [
        {"room_number": "2101", "capacity": 6, "floor": "2"},
        {"room_number": "2102", "capacity": 6, "floor": "2"},
        {"room_number": "2190", "capacity": 8, "floor": "2"},
        {"room_number": "3101", "capacity": 6, "floor": "3"},
    ],
}

USERS = [
    {"umid": "10000001", "name": "John Doe"},
    {"umid": "10000002", "name": "Jane Smith"},
    {"umid": "10000003", "name": "Alex Johnson"},
]


def seed_database():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        if db.query(Building).first():
            print("Database already seeded.")
            return

        building_objects = {}
        for b in BUILDINGS:
            building = Building(code=b["code"], name=b["name"])
            db.add(building)
            db.flush()
            building_objects[b["code"]] = building

        for code, rooms in ROOMS_BY_BUILDING.items():
            building = building_objects[code]
            for r in rooms:
                room = Room(
                    room_number=r["room_number"],
                    capacity=r["capacity"],
                    floor=r["floor"],
                    is_reservable=True,
                    building_id=building.id,
                )
                db.add(room)

        user_objects = []
        for u in USERS:
            user = User(umid=u["umid"], name=u["name"])
            db.add(user)
            user_objects.append(user)

        db.commit()

        first_room = db.query(Room).first()
        first_user = db.query(User).first()

        if first_room and first_user:
            sample_reservation = Reservation(
                date=date(2026, 4, 15),
                start_time=time(10, 0),
                end_time=time(11, 0),
                is_open=True,
                status="booked",
                user_id=first_user.id,
                room_id=first_room.id,
            )
            db.add(sample_reservation)
            db.commit()

        print("Database seeded successfully.")

    finally:
        db.close()


if __name__ == "__main__":
    seed_database()