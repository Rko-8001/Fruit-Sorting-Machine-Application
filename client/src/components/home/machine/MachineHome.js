import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

import { FaPlay, FaPause, FaHourglassStart, FaStop } from "react-icons/fa";
import { BackendUrl } from "../../../Url";
import { fruitStats } from "./MachineData";
import { setOptionPhase } from '../../tokens/Token';

export default function MachineHome() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(true);
  const [videoSrc, setVideoSrc] = useState('');


  const pauseProcess = async () => {
    try {
      const response = await fetch(`${BackendUrl}process/stop`, {
        method: "GET",
      })
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      }
      else {
        window.alert("Internal Error Occurred try Again!!")
      }
    }
    catch (error) {
      window.alert("Internal Error Occurred try Again!!")
      console.log(error);
    }
    setIsRunning(false)
  }

  const resumeProcess = async () => {
    try {
      const response = await fetch(`${BackendUrl}process/start`, {
        method: "GET",
      })
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      }
      else {
        window.alert("Internal Error Occurred try Again!!")
      }
    }
    catch (error) {
      window.alert("Internal Error Occurred try Again!!")
      console.log(error);
    }
    setIsRunning(true)
  }

  const handlePauseUnPause = (e) => {
    e.preventDefault();
    if (isRunning) {
      pauseProcess()
    }
    else {
      resumeProcess()
    }
  }

  const handleStop = (e) => {
    e.preventDefault();
    pauseProcess()
    setOptionPhase("sortPage")
    navigate("/home");
  }



  const videoRef = useRef(null);
  useEffect(() => {
      const websocket = new WebSocket(`ws:localhost:5000/process/camera`);

      websocket.onopen = () => {
        console.log('WebSocket connected');
      };

      websocket.onmessage = (event) => {
        const blob = new Blob([event.data], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        videoRef.current.src = url;
      };

      return () => {
        websocket.close();
      };
  }, []);



  return (
    <div className="px-20 w-full md:px-10 sm:px-5 justify-center flex ">
      <div className="flex-grow text-gray-800">

        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex  space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Control Panel</h1>
            </div>

            <div className="flex flex-wrap items-start justify-end -mb-3">

              <button className="inline-flex w-auto h-15 items-center justify-center px-5 py-3 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 ">
                <FaHourglassStart className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2" />
                <p className="text-2xl">00:11</p>
              </button>

              <button
                onClick={handlePauseUnPause}
                className="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-purple-blue rounded-md ml-6 mb-3"
              >
                {isRunning
                  ?
                  (
                    <>
                      <FaPause className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2" />
                      Pause Machine
                    </>

                  )
                  :
                  (
                    <>
                      <FaPause className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2" />
                      UnPause Machine
                    </>
                  )
                }
              </button>

              <button
                onClick={handleStop}
                className="inline-flex px-5 py-3 text-white bg-red-600 hover:bg-red-700 focus:bg-red-700 rounded-md ml-6 mb-3"
              >
                <FaStop className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2" />
                Stop Machine
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {fruitStats && fruitStats.map((fruitStat, index) => (
              <div key={index} className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <fruitStat.button className='w-10 h-auto' />
                </div>
                <div>
                  <span className="block text-3xl font-bold">62</span>
                  <span className="block text-xl text-gray-500">{fruitStat.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-auto gap-6 ">
            <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
              <div class="px-6 py-5 font-semibold border-b border-gray-100">Camera</div>
              <div class="p-4 flex-grow">
                <div class="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  <img ref={videoRef} alt="Video" autoPlay playsInline className="h-96 w-auto" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
