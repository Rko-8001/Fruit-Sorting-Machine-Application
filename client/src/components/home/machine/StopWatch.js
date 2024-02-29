import React, { useState, useEffect } from 'react';

function Stopwatch({ isRunning, time, changeTime }) {


    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                changeTime( prevTime => prevTime + 1)
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <p className='text-2xl'>{formatTime(time)}</p>
    );
}

export default Stopwatch;
