import React, { useState } from 'react';
// import {useState} from "react";
const Toggle = () => {

  const [isLight,setIsLight]=useState(false);
const handleToggleSwitch=()=>{
  setIsLight(!isLight);
  
};
  return (
  
    <div className='w-full h-screen bg-black flex justify-center items-center '>
<div className=' w-2/5  h-3/5 px-11 py-1 flex justify-center items-center' style={{backgroundColor: isLight ?'#9ACD32' :'#43BFC7'}}>
    <div className=' w-3/4 h-3/4 bg-no-repeat flex flex-col justify-end bg-cover ' style={{backgroundImage:isLight ? "url('./images/img1.png')" :"url('./images/img2.png')"}}>
        <div className='bg-gray-700 h-1/3  flex items-center flex-col justify-center'>
        <h1 className='text-white text-lg font-bold'>Day Mode</h1> 
        <h2 className='text-white '>Toggle switch to change the lighting</h2>
        <div className='toggle-switch w-2/6 h-2/5 my-1 rounded-full px-1' onClick={handleToggleSwitch} style={{backgroundImage:isLight ? "url('./images/img1.png')" :"url('./images/img2.png')"}} >
            <div className=' rounded-full w-11 h-11 bg-gray-700 ' style={{transform: isLight ? 'translatex(5rem)':'translatex(0)'}} >{isLight ?  " ": " "}</div>
        </div>
        </div>
    </div>
</div>



    </div>
  );
}

export default Toggle;
