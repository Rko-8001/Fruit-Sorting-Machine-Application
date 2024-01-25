# server.py

from flask import Flask, jsonify
from flask_cors import CORS
import threading
import signal
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


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

def startObjectDetection():
    global stop_object_detection
    global object_detection_thread

    stop_object_detection = False
    object_detection_thread = threading.Thread(target=objectDetectionProcess)
    object_detection_thread.start()

def stopObjectDetection():
    global stop_object_detection
    global object_detection_thread

    # Set the flag to stop the object detection thread
    stop_object_detection = True

    # Optionally, wait for the thread to finish
    if object_detection_thread is not None:
        object_detection_thread.join()
        object_detection_thread = None


@app.route('/')
def home():
    print('home')
    return 'aur bhai'

@app.route('/process/begin', methods=['GET'])
def processBegin():
    # object detection process [ camera on ]
    startObjectDetection()

    # start conveyor belt
    response = { 'message': "Process Started"}
    #return ack
    return jsonify(response), 200

@app.route('/process/pause')
def processPause():
    # pause camera 
    stopObjectDetection()

    # start or stop the conveyor belt

    response = { 'message': "Process Paused"}
    #return ack
    return jsonify(response), 200

@app.route('/process/unpause')
def processUnpause():
    # unpause camera
    startObjectDetection()
    # start conveyor belt

    response = { 'message': "Process UnPaused"}
    #return ack
    return jsonify(response), 200 

@app.route('/process/stop')
def processStop():
    # stop camera
    stopObjectDetection()
    # stop the conveyor belt

    # Return a response indicating that the process has been stopped
    response =  {'message': "Process Stopped"}
    #return ack
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(port=5000)