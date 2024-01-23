# server.py

from flask import Flask
import threading
import signal
import cv2
import numpy as np

app = Flask(__name__)
# Flag to indicate whether the object detection thread should continue running
stop_object_detection = False
object_detection_thread = None

def objectDetectionProcess():
    global stop_object_detection
    cap = cv2.VideoCapture(0)

    while True:
        # Read a frame from the video stream
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture frame. Exiting..")
        # Display the frame with bounding boxes
        cv2.imshow("Object Detection", frame)
        # Break the loop if 'q' key is pressed
        if cv2.waitKey(1) & stop_object_detection == True:
            break

    # Release the video capture object and close the OpenCV windows
    cap.release()
    cv2.destroyAllWindows()


@app.route('/')
def home():
    print('home')
    return 'aur bhai'

@app.route('/process/begin')
def begin():
    # object detection process [ camera on ]
    global stop_object_detection
    global object_detection_thread

    objection_detection_thread = threading.Thread(target=objectDetectionProcess)
    objection_detection_thread.start()
    # start conveyor belt

    #return ack
    return "Process started"

@app.route('/process/stop')
def stop():
    global stop_object_detection
    global object_detection_thread

    # Set the flag to stop the object detection thread
    stop_object_detection = True

    # Optionally, wait for the thread to finish
    if object_detection_thread is not None:
        object_detection_thread.join()
        object_detection_thread = None 

    # Return a response indicating that the process has been stopped
    return "Process stopped"

if __name__ == '__main__':
    app.run(port=5000)