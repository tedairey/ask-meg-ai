import React, { useEffect, useRef } from 'react';
import './HomePage.scss';
import AppleBadge from '../App_Store_Badge.svg';
import HowItWorks from '../howItWorks/HowItWorks';
import Testimonials from './testimonials/Testimonials';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';
import { useMediaQuery } from 'react-responsive';
import MilkGif from '../homePageImages/milk.gif';

function HomePage(props) {

    const requestedPage = props.match.params.handle,
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        howItWorksRef = useRef(),
        tryItForFreeRef = useRef(),
        testimonialsRef = useRef();

    useEffect(() => {
        if (requestedPage) {
            let headerOffset = isSmall ? 80 : 138;
            switch (requestedPage) {
                case 'how-it-works' :
                    window.scrollTo(0, howItWorksRef.current.offsetTop - headerOffset);
                    break;
                case 'testimonials' :
                    window.scrollTo(0, testimonialsRef.current.offsetTop - headerOffset);
                    break;
                case 'try-it-for-free' :
                    window.scrollTo(0, tryItForFreeRef.current.offsetTop - headerOffset);
                    break;
                default :
                    scrollTop();
            }
        }
    }, [requestedPage]);

  return (
    <div className="home-page container">
        <div className="row">
            <div className="col-lg-4 text">
                <h1 className='title-text'>
                    Meg: The Next Generation Weight Loss App Is Here
                </h1>
                <a className= "col-2" id="apple" href="https://www.apple.com/ios/app-store/">
                    <img src={AppleBadge}/>
                </a>
            </div>
            <div className="col-lg-8 home-image">
                <img src="https://crowdlly.com/video.gif"/>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-lg-4 order-lg-5 text">
                <h1 className='title-text'>Lose Weight With Meg</h1>
                Meg is a first-of-its-kind solution combining proven food science and 
                expert advice with a friendly and engaging human-like ‘AI’ to make your 
                weight loss goals achievable.
            </div>
            <div className="col-lg-8 order-lg-1 home-image">
                <img src={MilkGif}/>
            </div>
        </div>
        <hr ref={howItWorksRef}/>
        <HowItWorks/>
        <hr ref={tryItForFreeRef}/>
        <div className='section'>
            <h1 className='how-it-works-header title-text'>
                Try Meg For Free
            </h1>
            <div className='text'>
                Use Meg for 14-days free. Like Meg, subscribe and please tell your friends. Don’t like Meg, just cancel your 
                subscription within 14 days. No hassle. And please tell us why so we can improve. 
            </div>
            <a href="https://www.apple.com/ios/app-store/">
                <img className='apple-badge' src={AppleBadge}/>
            </a>
        </div>
        <hr ref={testimonialsRef}/>
        <Testimonials/>
        <hr/>
        <br/>
        <div className="buttons">
            <div id="learn-more">
                <Link to='/FAQ/tips-and-hints'>
                    <button className="btn back" onClick={scrollTop}>FAQs</button>
                </Link>
            </div>
            <div id="get-the-app">
                <button className="btn submit">Get The App</button>
            </div>
        </div>
    </div>
  );
}

export default HomePage;