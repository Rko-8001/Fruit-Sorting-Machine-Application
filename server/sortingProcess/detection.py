import cv2
import numpy as np
from .parameters import yoloCfg, yoloWeights, coco_names, confidenceInterval, widthBegin, widthEnd

net = cv2.dnn.readNet(yoloWeights, yoloCfg)

classes = []
with open(coco_names, "r") as f:
    classes = [line.strip() for line in f.readlines()]

layer_names = net.getUnconnectedOutLayersNames()

def extractDimensions(detection, frame):
    height, width, _ = frame.shape
    center_x = int(detection[0] * width)
    center_y = int(detection[1] * height)
    w = int(detection[2] * width)
    h = int(detection[3] * height)
    x = int(center_x - w / 2)
    y = int(center_y - h / 2)
    return x, y, w, h, center_x, center_y


def objectDetection(frame): 
    global confidenceInterval, widthBegin, widthEnd

    inMiddle = False
    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(layer_names)

    # Process the outputs and draw bounding boxes
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence >= confidenceInterval:  # Adjust the confidence threshold as needed
                x, y, w, h, center_x, center_y = extractDimensions(detection, frame)
                cv2.rectangle(frame, (x, y), (x + w, y+h), (0, 255, 0), 2)

                if (center_x >= widthBegin and center_x <= widthEnd): 
                    inMiddle = True
                break

    return frame, inMiddle
    

