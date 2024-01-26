from fastapi import APIRouter, WebSocket
from .camera import display_camera

router = APIRouter()


# web socket for camera 
@router.websocket("/camera")
async def camera_feed(websocket: WebSocket):
    await display_camera(websocket)