from fastapi import APIRouter, WebSocket, WebSocketDisconnect, BackgroundTasks
from .camera import display_camera
import cv2

router = APIRouter()

# web socket for camera 
@router.websocket("/camera")
async def camera_feed(websocket: WebSocket):
    await websocket.accept()
    camera = cv2.VideoCapture(2)  
    background_tasks = BackgroundTasks()
    try:
        await display_camera(camera, websocket, background_tasks)
    except WebSocketDisconnect:
        cv2.destroyAllWindows()
        camera.release()
        print("Client disconnected")
