from fastapi import APIRouter, BackgroundTasks, Request
from .camera import start_camera, stop_camera
from .shared import getSortCategory,setSortCategory, cameraEvent

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
    # start the camera
    start_camera()
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

    # stop the camera
    stop_camera()
    # stop the conveyor belt

    return {"message": "Sorting Process Stopped"}, 200


