import cv2
import numpy as np
from threading import Event
import base64
from fastapi import WebSocket, WebSocketDisconnect
from .predictors import predictor
from .shared import getSortCategory,setSortCategory, cameraEvent


# send frame and prediction to client
async def send_frame(websocket: WebSocket, frame):
    # Encode frame as JPEG
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


net = cv2.dnn.readNet('yolov3-tiny.weights', 'yolov3-tiny.cfg')
async def display_camera(websocket: WebSocket):
    await websocket.accept() 
    sortCategory=getSortCategory() #calling getter function
    
    

    layer_names = net.getLayerNames()
    output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
    classes = []

    with open("coco.names", "r") as f:
        classes = [line.strip() for line in f.readlines()]
    
    camera = cv2.VideoCapture(2)  
    while True:
        success, frame = camera.read()
        if not success:
            break

        # object detection
        height, width, _ = frame.shape
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        net.setInput(blob)
        outs = net.forward(layer_names)

        # Process the outputs and draw bounding boxes
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]

                if confidence > 0.4:  # Adjust the confidence threshold as needed
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)
                    print(w, h)
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                    
                    break
    
        # get the rediction
        # prediction = predictor(frame, sortCategory)

        # Send frame and prediction to client 
        await send_frame(websocket, frame)
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


