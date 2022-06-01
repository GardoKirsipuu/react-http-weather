import React from 'react';

const Weather = (props) => {
    return (
        <div className='mb-4'>
            <h1>{props.city.name}</h1>
            <p>{props.city.desc}</p>
            <p>{props.city.temp}</p>
        </div>
    );
};

export default Weather;