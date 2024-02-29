from threading import Event

sortCategory = "None"
def getSortCategory():
    global sortCategory
    return sortCategory

def setSortCategory(var):
    global sortCategory
    sortCategory=var
    return

pausedOrNot = False

def pauseCamera():
    global pausedOrNot 
    pausedOrNot = True
    return

def resumeCamera():
    global pausedOrNot 
    pausedOrNot = False
    return

def getPausedOrNot():
    global pausedOrNot
    return pausedOrNot


cameraEvent = Event()