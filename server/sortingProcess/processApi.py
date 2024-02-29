from fastapi import APIRouter, BackgroundTasks, Request
from .shared import getSortCategory,setSortCategory, pauseCamera, resumeCamera, cameraEvent

router = APIRouter()
# process APIs for the sorting process

# Route to start sorting process
@router.post('/start')
async def processStart(background_tasks: BackgroundTasks, request: Request):
    # global sortCategory
    data = await request.json()
    sortCategory = data['sortCategory']
    setSortCategory(sortCategory) # calling setter function
    print(sortCategory)

    # background_tasks.add_task(display_camera)
    print("Camera Started")

    # start the conveyor belt

    return {"message": "Sorting Process Started"}, 200


# Route to stop sorting process
@router.get('/stop')
async def processStop():

    # global sortCategory
    sortCategory = "None"
    setSortCategory(sortCategory) #calling setter function

    # stop the conveyor belt

    return {"message": "Sorting Process Stopped"}, 200


@router.get('/pause')
async def processPause():
    print("paused")
    pausedOrNot = True
    pauseCamera(pausedOrNot) #calling setter function

    return {"message": "Sorting Process Paused"}, 200


@router.get('/resume')
async def processResume():
    print("resumed")
    pausedOrNot = False
    resumeCamera(pausedOrNot) #calling setter function

    return {"message": "Sorting Process Resumed"}, 200
