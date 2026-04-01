# Roomly

Roomly is a campus room reservation system.

## Setup
1. Clone the repo
2. Create virtual environment
3. Install requirements
4. Seed database
5. Run server

## Commands
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python -m app.seed.seed_data
uvicorn app.main:app --reload --port 8001

## Current Endpoints
- GET /
- GET /buildings/
- GET /rooms/
- POST /reservations/