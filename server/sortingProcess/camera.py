import cv2
from threading import Event
import base64
from fastapi import WebSocket, WebSocketDisconnect
from .predictors import predictor
from .shared import sortCategory, cameraEvent

async def display_camera(websocket: WebSocket):
    global sortCategory
    await websocket.accept() 
    
    camera = cv2.VideoCapture(0)  
    while True:
        success, frame = camera.read()
        if not success:
            break
        
        # get the prediction
        prediction = predictor(frame, sortCategory)
        print(sortCategory)
        # Encode frame as JPEG
        _, encoded_frame = cv2.imencode('.jpg', frame)
        # Convert to bytes
        frame_bytes = encoded_frame.tobytes()
        frame_base64 = base64.b64encode(frame_bytes).decode('utf-8')

        # Prepare data to send
        data = {
            'frame': frame_base64,
            'prediction': prediction
        }

        try:
            # Send data over WebSocket
            await websocket.send_json(data)
        except WebSocketDisconnect:
            break

    camera.release()
    cv2.destroyAllWindows()


def start_camera():
    global cameraEvent
    cameraEvent.set()

def stop_camera():
    global cameraEvent
    cameraEvent.clear()
    cv2.destroyAllWindows()


