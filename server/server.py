from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from threading import Event
import cv2
from sortingProcess import processApi
from sortingProcess.processSocket import router as processSocketRouter



app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(processApi.router, prefix="/process")
app.include_router(processSocketRouter, prefix="/process")

@app.get("/")
async def main():
    return {"message": "Hello Bhai. This is the Fruit Sorter Server."}


