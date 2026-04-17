# Roomly

Roomly is a campus room reservation system.

## Setup
1. Clone the repo
2. Create virtual environment
3. Install requirements
4. Seed database
5. Run server

## Commands 

### Running the Backend
Create a powershell terminal that faces the `root` folder. (In this instance, it should be `Roomly`, or something similar.)
Open `powershell` in one terminal
run:

`python -m venv venv`

`.\venv\Scripts\Activate.ps1`

`pip install -r requirements.txt`

`python -m app.seed.seed_data`

`uvicorn app.main:app --reload --port 8001`


### Running the Frontend
Open the `bash` terminal in the `rsgf-frontend` folder.
run:

`python -m http.server 3000`

## Current Endpoints
- GET /
- GET /buildings/
- GET /buildings/{building_id}
- POST /buildings/
- GET /rooms/
- GET /rooms/{room_id}
- POST /rooms/
- GET /users/
- GET /users/{user_id}
- POST /users/
- GET /reservations/
- GET /reservations/{reservation_id}
- POST /reservations/
- PUT /reservations/{reservation_id}
- DELETE /reservations/{reservation_id}
