from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Roomly API is running"}