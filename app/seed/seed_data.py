from app.database import SessionLocal, Base, engine
from app.models import Building, Room, User, Reservation
from datetime import date, time
from app.database import SessionLocal
from app.models import Building, Room, User, Reservation


def seed_database():
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()

    try:
        if db.query(Building).first():
            print("Database already seeded.")
            return

        casl = Building(name="CASL")
        elb = Building(name="ELB")
        iavs = Building(name="IAVS")

        db.add_all([casl, elb, iavs])
        db.commit()

        db.refresh(casl)
        db.refresh(elb)
        db.refresh(iavs)

        rooms = [
            Room(room_number="101", capacity=6, building_id=casl.id),
            Room(room_number="202", capacity=10, building_id=casl.id),
            Room(room_number="1200", capacity=8, building_id=elb.id),
            Room(room_number="205", capacity=12, building_id=elb.id),
            Room(room_number="301", capacity=5, building_id=iavs.id),
        ]

        db.add_all(rooms)
        db.commit()

        users = [
            User(umid="10000001", name="John Doe"),
            User(umid="10000002", name="Jane Smith"),
            User(umid="10000003", name="Alex Johnson"),
        ]

        db.add_all(users)
        db.commit()

        for room in rooms:
            db.refresh(room)

        for user in users:
            db.refresh(user)

        reservations = [
            Reservation(
                date=date(2026, 4, 5),
                start_time=time(10, 0),
                end_time=time(11, 0),
                is_open=True,
                status="booked",
                user_id=users[0].id,
                room_id=rooms[0].id,
            ),
            Reservation(
                date=date(2026, 4, 5),
                start_time=time(1, 0),
                end_time=time(2, 30),
                is_open=False,
                status="booked",
                user_id=users[1].id,
                room_id=rooms[2].id,
            ),
        ]

        db.add_all(reservations)
        db.commit()

        print("Database seeded successfully.")

    finally:
        db.close()


if __name__ == "__main__":
    seed_database()