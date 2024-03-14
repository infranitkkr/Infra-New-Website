import React from 'react';
import './Loader.css'
import video from "../images/back.mp4"

const Loader = () => {
  return (

    <div className=' bg-black w-[100vw] h-[100vh] flex items-center justify-center mainDiv'>
      <video className='videoTag h-[100vh] absolute w-[100vw] object-fill' autoPlay loop muted>
      <source src={video} type='video/mp4'/>
      </video>
      <div className="loader">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
      
    </div>
  );
};

export default Loader;
