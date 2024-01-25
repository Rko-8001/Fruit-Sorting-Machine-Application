import cv2
from threading import Event

cameraEvent = Event()

def display_camera():
    global cameraEvent
    cameraEvent.set()
    camera = cv2.VideoCapture(0)  # 0 for the default camera
    while cameraEvent.is_set():
        success, frame = camera.read()
        if not success:
            break
        
        cv2.imshow('Camera', frame)
        while cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    camera.release()
    cv2.destroyAllWindows()


def stop_camera():
    global cameraEvent
    cameraEvent.clear()
    cv2.destroyAllWindows()


