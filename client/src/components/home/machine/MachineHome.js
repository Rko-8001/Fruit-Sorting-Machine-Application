import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaPlay, FaPause, FaHourglassStart, FaStop } from "react-icons/fa";
import { BackendUrl } from "../../../Url";
import { fruitStats } from "./MachineData";
import { getSortCategory, setOptionPhase, setSessionStatistics } from '../../tokens/Token';
import VideoComp from './VideoComp';
import Stopwatch from './StopWatch';

export default function MachineHome() {
  const navigate = useNavigate();

  const [sessionStat, setSessionStat] = useState({
    total: 0,
    fresh: 0,
    rotten: 0,
    timer: 0,
    startTime: null,
    endTime: null,
    pauseOrUnPause: 0,
    sortingCategory: "color",
  });
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(true);


  const handlePrediction = (prediction) => {
      if (prediction == "Non-Defective")
        incrementValues("fresh")
      else if (prediction == "Defective") 
        incrementValues("rotten")
  }


  const stopProcess = async () => {
    try {
      const response = await fetch(`${BackendUrl}process/stop`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setOptionPhase("sortPage")
        navigate("/home");
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
  const pauseProcess = async () => {
    try {
      const response = await fetch(`${BackendUrl}process/pause`, {
        method: "GET",
      })
      if (response.status === 200) {
        console.log(response.status);
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
      const response = await fetch(`${BackendUrl}process/resume`, {
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

  const getSessionStat = (name, value) => {
    setSessionStat((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

    setSessionStat((prev) => {
      return {
        ...prev,
        "timer": timer,
      }
    })
    setSessionStat((prev) => {
      return {
        ...prev,
        "endTime": formatDateTime(Date.now()),
      }
    })


  }
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };

    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDateTime;
  }
  const handlePauseUnPause = async (e) => {
    e.preventDefault();
    getSessionStat("pauseOrUnPause", sessionStat.pauseOrUnPause + 1);
    if (isRunning) {
      setIsRunning(false)
      setIsTimerRunning(false)
      await pauseProcess()
    }
    else {
      setIsRunning(true)
      setIsTimerRunning(true)
      // await resumeProcess()
    }

  }
  const fetchNumber = (id) => {
    if (id === "total") {
      return sessionStat.total
    }
    else if (id === "fresh") {
      return sessionStat.fresh
    }
    else if (id === "rotten") {
      return sessionStat.rotten
    }
  }
  const stopMachine = (e) => {
    e.preventDefault()
    setIsRunning(false);
    setIsTimerRunning(false);
    setTimeout(() => {
      setSessionStatistics(sessionStat);
      setOptionPhase("sortPage");
      navigate("/home/stats");
    }, 1000);
  }

  const incrementValues = (type) => {
    setSessionStat(prevState => {
      const newState = { ...prevState };      
      newState.total++;
      if (type === 'fresh') {
        newState.fresh++;
      } else if (type === 'rotten') {
        newState.rotten++;
      }  
      return newState; 
    });
  };
  useEffect(() => {
    getSessionStat('startTime', formatDateTime(Date.now()));
    getSessionStat('sortingCategory', getSortCategory());
  }, [])

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
                <Stopwatch time={timer} changeTime={setTimer} isRunning={isTimerRunning} />
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
                      <FaPlay className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2" />
                      UnPause Machine
                    </>
                  )
                }
              </button>

              <button
                onClick={stopMachine}
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
                  <span className="block text-3xl font-bold">{fetchNumber(fruitStat.id)}</span>
                  <span className="block text-xl text-gray-500">{fruitStat.name}</span>
                </div>
              </div>
            ))}
          </div>
          <VideoComp handlePrediction={handlePrediction} />

        </div>
        
        {/* <div className='flex flex-row gap-4'>
          <button onClick={(e) => { e.preventDefault(); incrementValues("fresh"); }} className='bg-yellow-300 w-20 h-5'>fresh</button>
          <button onClick={(e) => { e.preventDefault(); incrementValues("rotten");}} className='bg-yellow-300 w-20 h-5 '>rotten</button>
        </div> */}
      </div>
    </div>
  )
}
