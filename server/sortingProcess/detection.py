import cv2
import numpy as np

# global variables
yoloCfg = "/media/rko8001/Volume/Devs/BTP/fruit-sorter/server/sortingProcess/models/yolov3-tiny.cfg"
yoloWeights = "/media/rko8001/Volume/Devs/BTP/fruit-sorter/server/sortingProcess/models/yolov3-tiny.weights"
coco_names = "/media/rko8001/Volume/Devs/BTP/fruit-sorter/server/sortingProcess/models/coco.names"

net = cv2.dnn.readNet(yoloWeights, yoloCfg)

classes = []
with open(coco_names, "r") as f:
    classes = [line.strip() for line in f.readlines()]

layer_names = net.getUnconnectedOutLayersNames()


def objectDetection(frame): 
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

            if confidence > 0.7:  # Adjust the confidence threshold as needed
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                break

    return frame     

