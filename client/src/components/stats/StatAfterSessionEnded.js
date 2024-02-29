import React, { useEffect, useRef, useState } from 'react';
import { giveNumberIcon } from "./FetchNumberIcon";
import { useNavigate } from 'react-router-dom';
import { getSessionStatistics, setSessionStatistics } from '../tokens/Token';

export default function StatAfterSessionEnded() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
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
    const otherStats = [
        {
            id: "timer",
            name: "Timer Duration"
        },
        {
            id: "sortingCategory",
            name: "Sorting Category",

        },
        {
            id: "startTime",
            name: "Start Time",
        },
        {
            id: "endTime",
            name: "End Time",
        },
        {
            id: "pauseOrUnPause",
            name: "Number of times Paused: ",
        },
    ]
    const fetchStats = (id) => {
        return sessionStat.current[id];
    }
    useEffect(() => {
        setSessionStat(getSessionStatistics());
        setTimeout(() => {
            setIsLoading(true);
        }, 1000); 
    }, []);

    return (
        <>
           {isLoading && <div className="bg-white w-full dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Sorting Session [Session ID: 1234]</h1>

                    <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
                        <div className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                            <div className="flex flex-col items-center space-y-1">
                                <h2 className="text-3xl font-medium text-gray-700 sm:text-xl ">Total Apple Sorted: </h2>
                            </div>

                            <h2 className="text-1xl font-normal text-gray-500 sm:text-3xl dark:text-gray-300">{sessionStat.total}</h2>
                        </div>
                        <div className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                            <div className="flex flex-col items-center space-y-1">
                                <h2 className="text-3xl font-medium text-gray-700 sm:text-xl ">Fresh Apple: </h2>
                            </div>

                            <h2 className="text-1xl font-normal text-gray-500 sm:text-3xl dark:text-gray-300">{sessionStat.fresh}</h2>
                        </div>
                        <div className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                            <div className="flex flex-col items-center space-y-1">
                                <h2 className="text-3xl font-medium text-gray-700 sm:text-xl ">Rotten Apple: </h2>
                            </div>

                            <h2 className="text-1xl font-normal text-gray-500 sm:text-3xl dark:text-gray-300">{sessionStat.rotten}</h2>
                        </div>
                    </div>
                </div>

                <div className="p-8 mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">

                    {otherStats && otherStats.map((stat, index) => (
                        <div key={stat.id} className="flex items-center justify-between px-3 mr-10 text-gray-800 ">
                            <p className="text-2xl flex flex-row">
                                {giveNumberIcon(index)}
                                <p className='mx-2'>{stat.name}</p>
                            </p>
                            <p className="text-3xl ">{stat.id && sessionStat[stat.id]}</p>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center mt-8">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            sessionStorage.removeItem('sessionStat');
                            navigate('/home');
                        }}
                        className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                        Go to Home Page
                    </button>
                </div>
            </div>}
        </>

    )
}
