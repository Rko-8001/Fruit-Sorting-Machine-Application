
'''
    Due to relative path not working in the server, we have to provide the absolute path of the files
'''
yoloCfg = "/home/rko8001/Downloads/BTP/fruit-sorter/server/sortingProcess/models/yolov3-tiny.cfg"
yoloWeights = "/home/rko8001/Downloads/BTP/fruit-sorter/server/sortingProcess/models/yolov3-tiny.weights"
coco_names = "/home/rko8001/Downloads/BTP/fruit-sorter/server/sortingProcess/models/coco.names"


'''
    For Object detection, we have taken a threshold of 5 frames. 
    If the object is detected once, then next 'x' consecutive frames will not be predicted
    due to multiple predictions on same apple.
'''
framesToSkip = 5

''' 
    Width Threshold, if apple is present in between this threshold
    then it will be marked as detected
'''
widthBegin, widthEnd = 300, 320


'''
    While object detection, we have taken a confidence threshold of 0.4
    with this confidence, we are able to detect the object with good accuracy and speed
'''
confidenceInterval = 0.4


