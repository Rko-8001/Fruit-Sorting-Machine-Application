import cv2
from threading import Event
from fastapi import WebSocket, WebSocketDisconnect

cameraEvent = Event()

async def display_camera(websocket: WebSocket):
    await websocket.accept() 

    global cameraEvent
    cameraEvent.set()
    
    camera = cv2.VideoCapture(0)  # 0 for the default camera
    while cameraEvent.is_set():
        success, frame = camera.read()
        if not success:
            break
        # convert the image to JPEG format
        ret, jpeg = cv2.imencode('.jpg', frame)
        # convert the image to bytes
        frame_bytes = jpeg.tobytes()
        # Send the frame bytes
        try:
            await websocket.send_bytes(frame_bytes)
        except WebSocketDisconnect:
            break        

        while cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    camera.release()
    cv2.destroyAllWindows()


def stop_camera():
    global cameraEvent
    cameraEvent.clear()
    cv2.destroyAllWindows()


