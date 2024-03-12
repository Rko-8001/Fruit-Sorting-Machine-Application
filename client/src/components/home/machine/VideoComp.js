import React, { useRef, useEffect } from "react";

const VideoComp = () => {
    const ws = useRef();
    if (!ws.current) {
        ws.current = new WebSocket('ws://localhost:5000/process/camera');
    }
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

    const createSocketConnection = () => {
        ws.current.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.current.onmessage = (event) => {
            handleMessage(event);
        };

        ws.current.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.current.onclose = () => {
            console.log('WebSocket closed');
        };
    }

    const closeSocketConnection = () => {
        ws.current.close();
    }

    useEffect(() => {
        createSocketConnection();

        return () => {
            closeSocketConnection();
        }
    }, []);

    return (
        <div className="h-auto gap-6">
            <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold text-3xl border-b border-gray-100">Camera</div>
                <div className="flex-grow">
                    <div className="flex items-center justify-center p-3 h-full w-auto text-gray-400 text-3xl font-semibold border-2 border-gray-200 border-dashed rounded-md">
                        <img ref={videoRef} alt="Video" autoPlay playsInline className="h-full w-auto object-cover" />
                    </div>
                </div>
            </div>

            <button onClick={closeSocketConnection}>Close</button>
        </div>
    );
}

export default VideoComp;
