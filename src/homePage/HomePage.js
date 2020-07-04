import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';
import AppleBadge from '../App_Store_Badge.svg';
import HowItWorks from '../howItWorks/HowItWorks';
import Testimonials from './testimonials/Testimonials';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';
import { useMediaQuery } from 'react-responsive';
import intro from '../homePageImages/intro2.gif';
import BetaTestingModal from '../alertModals/BetaTestingModal';

function HomePage(props) {

    const requestedPage = props.match.params.handle,
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        [betaTestingModal, setBetaTestingModal] = useState(false),
        howItWorksRef = useRef(),
        tryItForFreeRef = useRef(),
        testimonialsRef = useRef();

    useEffect(() => {
        if (requestedPage) {
            let headerOffset = isSmall ? 60 : 138;
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
    <div className="home-page">
        <div className="row">
            <div className="col-lg-6 text">
                <h1 className='title-text'>
                    Meg: The Next Gen Weight Loss Assistant
                </h1>
            </div>
            <div className="col-lg-6 home-image">
                <img src={intro}/>
            </div>
        </div>
        <hr/>
        <div className='section'>
            <div className="text">
                <h1 className='title-text'>Weight Loss. Made Achievable.</h1>
                Using proven science, Meg scores every food
                you eat. Instantly, on your phone. Thumbs
                up, helps you lose weight. Thumbs down,
                causes weight gain.
            </div>
            <div className='get-the-app'>
                <button className='btn get-started' onClick={()=>setBetaTestingModal(true)}>
                    Get Started With Meg
                </button>
            </div>
            <BetaTestingModal showModal={betaTestingModal} setShowModal={setBetaTestingModal}/>
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
            <div className='get-the-app'>
                <button className='btn get-started' onClick={()=>setBetaTestingModal(true)}>
                    Get Started With Meg
                </button>
            </div>
        </div>
        <hr/>
        <div className='section'>
            <h1 className='how-it-works-header title-text'>
                Learn. Share.
            </h1>
            <div className='text'>
                Join our community. Get advice on emotional eating, motivation, diet choices and daily 
                exercise ideas directly from our experts. Read about the experiences of other users.  
                Share a story of your own.
            </div>
        </div>
        <hr ref={testimonialsRef}/>
        <Testimonials/>
        <br/>
        <div className="buttons">
            <div id="learn-more">
                <Link to='/FAQ/tips-and-hints'>
                    <button className="btn back" onClick={scrollTop}>FAQs</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default HomePage;