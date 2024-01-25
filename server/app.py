import cv2
import asyncio
from quart import Quart, websocket, request, jsonify
from quart_cors import cors

app = Quart(__name__)
app = cors(app)

# Global variables to control camera
camera_running = False
camera = None

# Function to display camera feed and emit frames over WebSocket
async def display_camera():
    global camera_running, camera
    camera = cv2.VideoCapture(0)  # 0 for the default camera
    while camera_running:
        success, frame = camera.read()
        if not success:
            break
        _, encoded_image = cv2.imencode('.jpg', frame)
        await websocket.send(encoded_image.tobytes())
        await asyncio.sleep(0)  # Allow other tasks to run

# Route to start camera feed display
@app.route('/process/begin')
async def start_camera():
    global camera_running
    if not camera_running:
        camera_running = True
        asyncio.create_task(display_camera())
    return jsonify({'message': "Camera feed process started"}), 200

# Route to stop camera feed display
@app.route('/process/stop')
async def stop_camera():
    global camera_running, camera
    if camera_running:
        camera_running = False
        if camera is not None:
            camera.release()
        cv2.destroyAllWindows()
    return jsonify({'message': "Camera feed process stopped"}), 200

# Route to return "camera on" acknowledgment
@app.route('/start_camera')
async def camera_acknowledgment():
    return 'Camera on', 200

# WebSocket route to handle video streaming
@app.websocket('/video_stream')
async def video_stream():
    await display_camera(), 200

if __name__ == "__main__":
    app.run(debug=True)
