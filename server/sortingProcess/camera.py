import cv2
import numpy as np
from threading import Event
import base64
from fastapi import WebSocket, WebSocketDisconnect, BackgroundTasks
from .predictors import predictor
from .shared import getSortCategory,setSortCategory, getPausedOrNot, cameraEvent
from .detection import objectDetection
from .parameters import framesToSkip


# send frame and prediction to client
async def send_frame(websocket: WebSocket, frame, prediction , background_tasks: BackgroundTasks):
    # Encode frame as JPEG
    _, encoded_frame = cv2.imencode('.jpg', frame)
    frame_bytes = encoded_frame.tobytes()
    frame_base64 = base64.b64encode(frame_bytes).decode('utf-8')
    # Convert to bytes and Prepare data to send
    data = {
        'frame': frame_base64,
        'prediction': prediction
    }

    try:
        # Send data over WebSocket
        await websocket.send_json(data)
    except WebSocketDisconnect:
        print("Client disconnected")


async def display_camera(camera, websocket: WebSocket, background_tasks: BackgroundTasks):
    global framesToSkip
    sortCategory, prediction, previousFrame, skipFrame = getSortCategory(), None, False, 0
    sortCategory = "freshness"
    
    while True:
        success, frame = camera.read()
        previousFrame = frame
        if not success:
            break

        newFrame, objectDetected = objectDetection(frame)
        if skipFrame == 0:
            if objectDetected == True:
                # do the prediction
                predictionMessage = "Apple gone for prediction"
                print(predictionMessage)
                prediction = predictor(frame, sortCategory)
                print("Prediction:", prediction)
                skipFrame += 1
        else: 
            if(objectDetected == True):
                print("objectDetected but not predicted")
            skipFrame = (skipFrame + 1) % (framesToSkip + 1 )

        
        # Send frame and prediction to client 
        await send_frame(websocket, newFrame, prediction , background_tasks)
    camera.release()
    cv2.destroyAllWindows()


def start_camera():
    global cameraEvent
    cameraEvent.set()

def stop_camera():
    global cameraEvent
    cameraEvent.clear()
    cv2.destroyAllWindows()


