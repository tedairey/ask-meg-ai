import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';
import HowItWorks from '../howItWorks/HowItWorks';
import Testimonials from './testimonials/Testimonials';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';
import { useMediaQuery } from 'react-responsive';
import intro from '../homePageImages/intro.gif';
import BetaTestingModal from '../alertModals/BetaTestingModal';
import learn from '../homePageImages/learn-share.jpeg';

function HomePage(props) {

    const requestedPage = props.match.params.handle,
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        isMedium = useMediaQuery({query: '(max-width: 991px)'}),
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
                <h2 className='title-text'>
                    Meg: Your Next Gen Weight Loss Assistant
                </h2>
            </div>
            <div className='col-lg-6 home-image'>
                <img src={intro}/>
            </div>
        </div>
        <hr/>
        <div className='section'>
            <div className='text'>
                <h2 className='title-text text-center'>Make Your Weight Loss Achievable With Meg</h2>
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
            <h2 className='title-text text-center'>
                Try Meg For Free
            </h2>
            <div className='text'>
                Use Meg for 14-days free. Like Meg? Subscribe and please tell your friends. Don’t Like Meg? 
                Just cancel your subscription within 14 days. No hassle. And please tell us why so we can improve. 
            </div>
            <div className='get-the-app'>
                <button className='btn get-started' onClick={()=>setBetaTestingModal(true)}>
                    Get Started With Meg
                </button>
            </div>
        </div>
        <hr/>
        {isMedium && <h2 className='title-text'>
            Learn. Share.
        </h2>}
        <div className='row section'>
            <div className='home-image col-lg-5'>
                <img src={learn}/>
            </div>
            <div className='col-lg-7 m-auto'>
                {!isMedium && 
                <h2 className='title-text'>
                    Learn. Share.
                </h2>
                }
                <div className='text'>  
                    Join our community. Get advice on emotional eating, motivation, diet choices and daily 
                    exercise ideas directly from our experts. Read about the experiences of other users.  
                    Share a story of your own.
                </div>
            </div>
        </div>
        <hr ref={testimonialsRef}/>
        <Testimonials/>
        <br/>
        <div className='buttons'>
            <div id='learn-more'>
                <Link to='/FAQ/tips-and-hints'>
                    <button className='btn back' onClick={scrollTop}>FAQs</button>
                </Link>
            </div>
            <div className='get-the-app'>
                <button className='btn get-started' onClick={()=>setBetaTestingModal(true)}>
                    Get Started With Meg
                </button>
            </div>
        </div>
    </div>
  );
}

export default HomePage;