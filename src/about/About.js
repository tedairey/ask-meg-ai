import React, { useEffect, useState } from 'react';
import './About.scss';
import OurTeam from './ourTeam/OurTeam';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';
import BetaTestingModal from '../alertModals/BetaTestingModal';

function About() {

    const [betaTestingModal, setBetaTestingModal] = useState(false);

    useEffect(() => {
        let urlEnd = window.location.href;
        if (urlEnd.substring(urlEnd.length-10, urlEnd.length) === 'contact-us') {
            window.scrollTo(0, document.body.scrollHeight);
        }
    })

    return (
        <div className="about">
            <div className='team-meg-header'>
                <h1>Team Meg</h1>
            </div>
            <OurTeam/>
            <hr/>
            <h3 className='about-us-header'>About Us</h3>
            <div className='text'>
                <p>
                    Want to learn about us and Meg? You’ve come to the right place. 
                </p>
                <p>
                    We, and many of those close to us, have
                    struggled to lose weight. For some of us it’s
                    been a constant effort since high school. Being
                    a mix of researchers, analysts, doctors,
                    nutritionists and entrepreneurs, we wanted to
                    find weight loss programs that were proven
                    and effective, not just the latest ‘fad’ or ‘flavor
                    of the month’.
                </p>
                <p>
                    We wanted something better and set out to
                    create it.
                </p>
                <p>
                    Meg’s artificial intelligence starts with the
                    latest proven science and decades of real-world
                    weight loss experience from experts from
                    Northwestern University’s Feinberg School of
                    Medicine and Chicago’s Rush University
                    Medical Center. We have trained Meg’s
                    nutrition algorithms alongside hundreds of
                    independent nutrition assessments by our team
                    of dietitians and weight loss experts, Meg is like
                    a dietitian in your pocket!
                </p>
                <p>
                    We are curious and love to learn. We sought to
                    develop a solution that would learn with us. A
                    solution that could learn not only what works
                    for each of us individually, but that could
                    connect the dots across many people in order
                    to boost the chances of success for all of us.
                    Our artificial intelligence engine powering
                    Meg’s analysis and recommendations makes
                    this possible.
                </p>
                <p>
                    We believe programs should be affordable and
                    not break the bank. That’s why we are offering
                    Meg for the price of a cup of coffee each week.
                </p>
            </div>
            <div className="buttons">
                <div id="learn-more">
                    <Link to='/FAQ/tips-and-hints'>
                        <button className="btn back" onClick={scrollTop}>FAQs</button>
                    </Link>
                </div>
                <div className='get-the-app'>
                    <button className='btn get-started' onClick={()=>setBetaTestingModal(true)}>
                        Get Started With Meg
                    </button>
                </div>
            </div>
            <BetaTestingModal showModal={betaTestingModal} setShowModal={setBetaTestingModal}/>
            <hr/>
            <div className='contact-us'>
                <h2 className = 'contact-us-header'>
                    Contact Us
                </h2>
                <div className='text'>
                    Have a question or some feedback on an
                    item not covered on our website? Please use
                    the contact form below or email us 
                    at <a href="mailto:support@askmeg.ai" className="email">support@askmeg.ai</a>.
                </div>
            </div>
        </div>
    );
}

export default About;