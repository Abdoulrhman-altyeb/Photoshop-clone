import React from 'react';


const Slider = ({min, max, value , handelValue}) => {
    return (
        <div className='slider-continaer'>
            <input type='range' className='slider' min={min} max={max} value={value} onChange={handelValue}/>
        </div>
    )
}

export default Slider;