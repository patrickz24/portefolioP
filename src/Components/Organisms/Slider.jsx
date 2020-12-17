import React, { useState } from 'react';
import data from '../../data/ProjectsList';

export default function Slider() {
    // let sliderArr =[1, 2, 3, 4, 5]
    const [x, setX]= useState(0);
    const goLeft=()=>{
        x===0? setX( -100*(data.length-1)):setX(x + 100);
    };
    const goRight=()=>{
        x=== -100*(data.length-1) ? setX(0):setX(x - 100);
    };
    return (
        <div className="slider">
            {
                data.map((item,index)=>{
                    return(<div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item.id}
                        {item.name}
                        {item.description}
                    </div>)
                }).slice(0, data.length)
            }
            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
                </button>
            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
                </button>
        </div>
    )
}

