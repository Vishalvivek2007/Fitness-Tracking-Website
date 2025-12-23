import React from 'react';
import './WorkoutsPage.css';
import warmup from './assets/video/warmup.mp4';
import pushup from './assets/video/pushup.mp4';
import chest from './assets/video/chest.mp4';
import wloss from './assets/video/wightloss.mp4';
const WorkoutsPage = () => {
  return (
    <div className="workouts-page">
      <div className="topheading"> 
      <p className="main-heading"><span className="f">G</span>etting <span className="f">T</span>he <span className="f">B</span>asics <span className="f">R</span>ight</p>  

      </div>
      
      <div className="Box">
        <video controls src={warmup} className='video1' muted></video>
        <div className="Content">
          <p className='videoinfo'><span className="f">W</span>arm Up Tutorial</p>
        </div>
        </div> 

        <div className="Box2">
        <div className="Content">
          <p className='videoinfo'><span className="f">C</span>ore Exercises </p>
        </div>
        <video controls src={pushup} className='video1' muted></video>
        </div> 

        <div className="Box">
        <video controls src={chest} className='video1' muted></video>
        <div className="Content">
          <p className='videoinfo'><span className="f">C</span>hest and Tricep</p>
        </div>
        </div>

        <div className="Box2">
        <div className="Content">
          <p className='videoinfo'><span className="f">F</span>at Buring exercises</p>
        </div>
        <video controls src={wloss} className='video1' muted></video>
        </div> 



    </div>
    
  );
};

export default WorkoutsPage;