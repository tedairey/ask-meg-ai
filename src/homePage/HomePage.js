import React, { useState, useRef, useEffect } from 'react';
import './HomePage.scss';
import AppleBadge from '../App_Store_Badge.svg';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';

function HomePage() {

  return (
    <div className="home-page container">
        <div className="row">
            <div className="col-lg-4 text">
                <h1>
                    Meg: The Next Generation Weight Loss App Is Here
                </h1>
                <a className= "col-2" id="apple" href="https://www.apple.com/ios/app-store/">
                    <img src={AppleBadge}/>
                </a>
            </div>
            <div className="col-lg-8">
                <img id="ask" src="https://crowdlly.com/video.gif"/>
            </div>
        </div>
        <hr/>
        <div className="gif row">
            <div className="col-lg-4 order-lg-5 text">
                <p>
                    <strong>Meg Is A Next Generation Of Dietitian In Your Pocket.</strong><br/>
                    A first-of-its-kind solution, Meg combines the latest proven science, 
                    expert coaching and artificial intelligence to your make weight loss success achievable. 
                    Meg is a next generation of dietitian. An expert in your pocket and fully voice-enabled. 
                    Just talk to Meg, 24/7.
                </p>
            </div>
            <div className="col-lg-8 order-lg-1">
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
            </div>
        </div>
        <hr></hr>
        <div className="buttons">
            <div id="learn-more">
                <Link to='/how-it-works'>
                    <button className="btn back" onClick={scrollTop}>Learn More</button>
                </Link>
            </div>
            <div id="get-the-app">
                <button className="btn submit" formAction="https://www.apple.com/ios/app-store/">Get The App</button>
            </div>
        </div>
    </div>
  );
}

export default HomePage;