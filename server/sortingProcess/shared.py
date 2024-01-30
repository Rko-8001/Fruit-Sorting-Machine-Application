from threading import Event

sortCategory = "None"

def getSortCategory():
    global sortCategory
    return sortCategory

def setSortCategory(var):
    global sortCategory
    sortCategory=var
    return



cameraEvent = Event()