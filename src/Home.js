import React from 'react';
import './menu.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import workoutImage from './assets/pics/pexels-panther-1547248.jpg'; 
import weightLossImage from './assets/pics/pexels-olly-3757376.jpg'; 
import harshadImage from './assets/pics/download.jpeg';
import elonImage from './assets/pics/elonmusk.jpeg'; 
import billImage from './assets/pics/bill gates.jpeg'; 
import dwayneImage from './assets/pics/Dwaynejohnson.jpeg';
import fitnessTrackingImage from './assets/pics/Fitness Tracking.jpg'; 
import dietPlanningImage from './assets/pics/diet-planning.jpeg';

const Body = () => {
  return (
    <div>
      <div className="background-video">
        <video
          className="video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/diwz3ebe3/video/upload/v1766513554/bg_dyhz21.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="tile main-tile">
        <div className="main-tile-pic" style={{ backgroundImage: `url(${workoutImage})` }}></div>
        <div className="main-tile-info">
          <p className="title">Start Your Transformation</p>
          <p className="description">
            Achieving your fitness goals has never been easier! Whether you want to build muscle, lose weight, or lead a healthier lifestyle, our personalized training programs are designed to meet your needs. Start your journey today and become the best version of yourself!
          </p>
          <div className="buttons">
            <Link to="/workouts"><button className="start-workout">Start Workout</button></Link>
          </div>
        </div>
      </div>

 
      <div className="tile main-tile-2">
        <div className="main-tile-pic-2" style={{ backgroundImage: `url(${weightLossImage})` }}></div>
        <div className="main-tile-info">
          <p className="title">30-Day Weight Loss Plan</p>
          <p className="description">
            Join our 30-day weight loss program with customized fat-burning exercises, a calorie-deficit meal plan, and real-time progress tracking. Achieve visible results with sustainable methods and expert guidance.
          </p>
          <div className="buttons">
            <Link to="/planing"><button className="start-workout-2">Start Your Transformation</button></Link>
          </div>
        </div>
      </div>

      <div className="infinite-Sale-block">
        <ul className="Sale-list">
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
        </ul>
        <ul aria-hidden="true">
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
        </ul>
      </div>


      <div className="offerbackground">
        <div className="offer-grid">
          <div className="offercontainer">
            <div className="offerheading">UPTO 40% OFF ON</div>
            <div>
              <div className="offerdescription">
                Subscribe now to get upto 40% off on our yearly plans.
              </div>
              <button className="Annualplan-button">Annual Plans</button>
            </div>
          </div>

          <div className="offercontainer">
            <div className="offerheading">UPTO 30% OFF ON</div>
            <div>
              <div className="offerdescription">
                Subscribe now to get upto 30% off on our monthly plans.
              </div>
              <button className="Monthlyplans-button">Monthly Plans</button>
            </div>
          </div>
        </div>
      </div>

      <div className="infinite-Sale-block">
        <ul className="Sale-list">
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
        </ul>
        <ul aria-hidden="true">
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
          <li>SALE !!!</li>
        </ul>
      </div>
     
      <div className="comments-title">
        <p className="statement">
          Your <span className="orange">Fitness</span>, Their <span className="orange">Words</span>
        </p>
      </div>

      <div className="wrapper">
        <div className="comments box1">
          <div className="top">
            <div className="pfp">
              <img src={harshadImage} className="picture-comment" alt="Harshad Mehta" />
            </div>
            <div className="usernamediv">
              <p className="name">Harshad Mehta &nbsp;&nbsp; ⭐️⭐️⭐️⭐️⭐️</p>
              <p className="email-coustomer">@Harshad</p>
            </div>
          </div>
          <div className="comment-matter-box">
            <p className="matter">
              "This website has completely transformed my fitness journey! The tracking features are super detailed, and I love how easy it is to monitor my progress. The UI is clean, and the workout recommendations are spot on!"
            </p>
          </div>
        </div>

        <div className="comments box2">
          <div className="top">
            <div className="pfp">
              <img src={elonImage} className="picture-comment" alt="Elon Musk" />
            </div>
            <div className="usernamediv">
              <p className="name">Elon Musk &nbsp;&nbsp; ⭐️⭐️⭐️⭐️</p>
              <p className="email-coustomer">@Elon</p>
            </div>
          </div>
          <div className="comment-matter-box">
            <p className="matter">
              "I really enjoy using this fitness tracker. It's easy to use and keeps me motivated. Would love to see more customization options for workout plans!"
            </p>
          </div>
        </div>

        <div className="comments box3">
          <div className="top">
            <div className="pfp">
              <img src={billImage} className="picture-comment" alt="Bill Gates" />
            </div>
            <div className="usernamediv">
              <p className="name">Bill Gates &nbsp;&nbsp; ⭐️⭐️⭐️⭐️⭐️</p>
              <p className="email-coustomer">@Bill</p>
            </div>
          </div>
          <div className="comment-matter-box">
            <p className="matter">
              "The best part about this website is the personalized progress tracking. It keeps me accountable and motivated to hit my fitness goals. Highly recommend it!"
            </p>
          </div>
        </div>

        <div className="comments box4">
          <div className="top">
            <div className="pfp">
              <img src={dwayneImage} className="picture-comment" alt="Dwayne Johnson" />
            </div>
            <div className="usernamediv">
              <p className="name">Dwayne Johnson &nbsp;&nbsp; ⭐️⭐️⭐️⭐️⭐️</p>
              <p className="email-coustomer">@Dwayne</p>
            </div>
          </div>
          <div className="comment-matter-box">
            <p className="matter">
              "Really love the seamless experience and workout tracking options. A background video would make it even more immersive, but overall, a great tool for fitness enthusiasts!"
            </p>
          </div>
        </div>
      </div>

     
      <div className="bottom-grid">
        <div className="tile bottom-tile">
          <div className="bottom-image-box">
            <img className="bottom-tile-img-1" src={workoutImage} alt="Workout Recommendations" />
          </div>
          <div>
            <p className="bottom-tile-heading">Get Workout Recommendations</p>
            <p className="bottom-tile-description">
              Our website offers a diverse range of expertly curated exercises designed to help you achieve your fitness goals efficiently and effectively.
            </p>
            <Link to="/planing"><button className="bottom-tile-button">Start</button></Link>
          </div>
        </div>

        <div className="tile bottom-tile">
          <div className="bottom-image-box">
            <img className="bottom-tile-img-1" src={fitnessTrackingImage} alt="Fitness Tracking" />
          </div>
          <div>
            <p className="bottom-tile-heading">Start Tracking Your Workout</p>
            <p className="bottom-tile-description-3">
              Your workout statistics and progress summaries are always at your fingertips, empowering you to stay informed and on track with your fitness goals.
            </p>
            <Link to="/tracking"><button className="bottom-tile-button">Track Now</button></Link>
          </div>
        </div>

        <div className="tile bottom-tile">
          <div className="bottom-image-box">
            <img className="bottom-tile-img-1" src={dietPlanningImage} alt="Diet Planning" />
          </div>
          <div>
            <p className="bottom-tile-heading">Plan Your Diet</p>
            <p className="bottom-tile-description-2">
              We suggest tailored diet plans for all, ensuring adequate protein and vitamin intake to help you achieve your dream body.
            </p>
            <Link to="/planing"><button className="bottom-tile-button">Get Started</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Body;