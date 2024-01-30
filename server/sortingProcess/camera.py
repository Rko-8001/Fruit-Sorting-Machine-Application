import cv2
import numpy as np
from threading import Event
import base64
from fastapi import WebSocket, WebSocketDisconnect
from .predictors import predictor
from .shared import getSortCategory,setSortCategory, cameraEvent
from .detection import objectDetection

# send frame and prediction to client
async def send_frame(websocket: WebSocket, frame):
    # Encode frame as JPEG
    prediction = "None"
    _, encoded_frame = cv2.imencode('.jpg', frame)
    frame_bytes = encoded_frame.tobytes()
    frame_base64 = base64.b64encode(frame_bytes).decode('utf-8')
    # Convert to bytes
    # Prepare data to send
    data = {
        'frame': frame_base64,
        'prediction': prediction
    }

    try:
        # Send data over WebSocket
        await websocket.send_json(data)
    except WebSocketDisconnect:
        print("Client disconnected")


async def display_camera(websocket: WebSocket):
    await websocket.accept() 
    sortCategory=getSortCategory() #calling getter function
        
    camera = cv2.VideoCapture(2)  
    while True:
        success, frame = camera.read()
        if not success:
            break

        # object detection
        newFrame = objectDetection(frame)
    
        # get the rediction
        # prediction = predictor(frame, sortCategory)

        # Send frame and prediction to client 
        await send_frame(websocket, newFrame)
        # await send_frame(websocket, detected_frame)

    camera.release()
    cv2.destroyAllWindows()



def start_camera():
    global cameraEvent
    cameraEvent.set()

def stop_camera():
    global cameraEvent
    cameraEvent.clear()
    cv2.destroyAllWindows()


