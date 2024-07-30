import React, { useState, useRef } from 'react';

const StopWatch = ({ toggleStopWatch }) => {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    const handleStartPause = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 100);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className='container main-stopwatch'>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-danger mx-2 mt-2 close' onClick={toggleStopWatch}>
                    &times;
                </button>
            </div>
            <div className='mt-2'>
                <h3 className='mx-3'>
                    <i className="fa-solid fa-stopwatch mx-2"></i> StopWatch
                </h3>
                <hr />
                <div id='stopwatch-digits'>
                    <span className={!isRunning ? 'flicker-class' : ''}>{formatTime(time)}</span>
                </div>
                <div className='buttons'>
                    <button onClick={handleStartPause} className='btn mx-3 mt-2'>
                        {isRunning ? <i className='fa-solid fa-pause'></i> : <i className='fa-solid fa-play'></i>}
                    </button>
                    <button className='btn mx-3 mt-2' onClick={handleReset}>
                        <i className="fa-solid fa-repeat"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
