from fastapi import APIRouter, BackgroundTasks
from .camera import display_camera, stop_camera


router = APIRouter()
# process APIs for the sorting process

# Route to start sorting process
@router.get('/start')
async def processStart(background_tasks: BackgroundTasks):
    # start the camera
    # background_tasks.add_task(display_camera)
    print("Camera Started")
    # start the conveyor belt

    return {"message": "Sorting Process Started"}, 200


# Route to stop sorting process
@router.get('/stop')
async def processStop():
    # stop the camera
    stop_camera()
    # stop the conveyor belt

    return {"message": "Sorting Process Stopped"}, 200


