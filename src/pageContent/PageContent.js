import React from 'react';
import './PageContent.css';
import AppleBadge from '../App_Store_Badge.svg';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';

function PageContent() {
  return (
    <div className="pageContent container">
        <div className="row">
            <div className="col-4 text">
                <h1>
                    Meg: The Next Generation Weight Loss App Is Here
                </h1>
                <a className= "col-2" id="apple" href="apple.com">
                    <img src={AppleBadge}/>
                </a>
            </div>
            <div className="col-8">
                <img id="ask" src="https://crowdlly.com/video.gif"/>
            </div>
        </div>
        <hr></hr>
        <div className="gif row">
            <div className="col-8">
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420562/emokuhietha0cpmkpsb2.jpg"></img>
            </div>
            <div className="col-4 text">
                <p>
                    <strong>Meg Is A Next Generation Of Dietitian In Your Pocket.</strong><br/>
                    A first-of-its-kind solution, Meg combines the latest proven science, 
                    expert coaching and artificial intelligence to your make weight loss success achievable. 
                    Meg is a next generation of dietitian. An expert in your pocket and fully voice-enabled. 
                    Just talk to Meg, 24/7.
                </p>
            </div>
        </div>
        <hr></hr>
        <div className="buttons">
            <div id="learn-more" className="col-5">
                <Link to='/how-it-works'>
                    <button className="btn back" onClick={scrollTop}>Learn More</button>
                </Link>
            </div>
            <div id="get-the-app" className="col-5">
                <button className="btn submit">Get The App</button>
            </div>
        </div>
    </div>
  );
}

export default PageContent;