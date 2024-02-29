import React, { useRef, useEffect } from "react";

const VideoComp = () => {
    const videoRef = useRef(null);

    function base64ToBlob(base64) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: 'image/jpeg' });
    }

    function handleMessage(event) {
        const data = JSON.parse(event.data);
        const frameBase64 = data.frame;
        const frameBlob = base64ToBlob(frameBase64);
        const frameUrl = URL.createObjectURL(frameBlob);

        if (videoRef.current) {
            videoRef.current.src = frameUrl;
        }
    }
    useEffect(() => {

        const websocket = new WebSocket('ws://localhost:5000/process/camera');
        websocket.addEventListener('message', handleMessage);
        return () => {
            websocket.removeEventListener('message', handleMessage);
            websocket.close();
        };
    }, []);

    return (
        <div className="h-auto gap-6">
            <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div class="px-6 py-5 font-semibold text-3xl border-b border-gray-100">Camera</div>
                <div class="flex-grow">
                    <div class="flex items-center justify-center p-3 h-full w-auto text-gray-400 text-3xl font-semibold  border-2 border-gray-200 border-dashed rounded-md">
                        <img ref={videoRef} alt="Video" autoPlay playsInline className="h-full w-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default VideoComp;