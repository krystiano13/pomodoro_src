import React from 'react';
import './Timer.css';

interface TimerInterface {
    minutes : string,
    seconds : string
}

const Timer:React.FC<TimerInterface> = ({ minutes , seconds }) => {
    return (
        <h2 className='Timer'>{minutes} : {seconds}</h2>
    )
}

export { Timer };