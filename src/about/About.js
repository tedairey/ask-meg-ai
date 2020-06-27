import React, { useEffect } from 'react';
import './About.scss';
import OurTeam from './ourTeam/OurTeam';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';

function About() {

    useEffect(() => {
        let urlEnd = window.location.href;
        if (urlEnd.substring(urlEnd.length-10, urlEnd.length) === 'contact-us') {
            window.scrollTo(0, document.body.scrollHeight);
        }
    })

    return (
        <div className="about">
            <div className='about-header'>
                <h1>Team Meg</h1>
            </div>
            <OurTeam/>
            <hr/>
            <h3 className='about-us'>About Us</h3>
            <br/>
            <p>
                Want to learn about us and Meg? You’ve come to the right place. 
                <br/>
                We, and many of those close to us, have
                struggled to lose weight. For some of us it’s
                been a constant effort since high school. Being
                a mix of researchers, analysts, doctors,
                nutritionists and entrepreneurs, we wanted to
                find weight loss programs that were proven
                and effective, not just the latest ‘fad’ or ‘flavor
                of the month’.
                <br/>
                We wanted something better and set out to
                create it.
                <br/>
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
            <hr/>
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
            <hr/>
            <p>
                We believe programs should be affordable and
                not break the bank. That’s why we are offering
                Meg for the price of a cup of coffee each week.
            </p>
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
            <div className='contact-us'>
                <h1 className = 'contact-us-header'>
                    Contact Us
                </h1>
                <div className='text'>
                    If you have a question or some feedback on an
                    item not covered on our website? Please use
                    the contact form below or email us at
                    support@askmeg.ai
                </div>
            </div>
        </div>
    );
}

export default About;