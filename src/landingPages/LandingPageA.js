import React, {useContext, useEffect} from 'react';
import { AppUserContext } from '../context/UserContext';
import iphoneImage from '../homePageImages/iphone-image.png';
import './LandingPage.scss';

function LandingPageA() {

    const { setIsAppUser } = useContext(AppUserContext);

    useEffect(() => {
        setIsAppUser(true);
        document.body.style.backgroundColor='#fff'

        return () => {
            setIsAppUser(false);
            document.body.style.backgroundColor='initial'
        }
    }, []);

    return (
        <div className='landing-page'>
            <div className='title row'>
                <div className='col-xs-12 col-md-6 left-column'>
                    <h2>Beta Test Meg.AI and Discover a Revolutionary New Weight Loss Science</h2>
                    <h5 className='subheader'>Track what you eat effortlessly and watch your excess weight melt away with an expert dietitian in the palm of your hand.</h5>
                    <div className='get-the-app'>
                        <a className='btn get-started' href='https://testflight.apple.com/join/bYiSDeWg'>
                            Become a Beta Tester
                        </a>
                    </div>
                </div>
                <div className='col-xs-12 col-md-6 right-column'>
                    <div className='iphone-container'>
                        {/* <img src="//d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/megai/10t54uc-premia-iphone-front_10az0k60a50ds00f000028.png"/> */}
                        <img className='iphone-image' src="//d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/megai/2b46a715-img-4130_108b0hz08b0bo000035028.PNG"/>
                    </div>
                </div>
            </div>
            <div className='landing-page-text'>
                <h3 className='landing-page-header'>What is Meg AI?</h3>
                <p>
                    Meg.AI is an animated, human-like artificial intelligence agent, that works as your personal dietitian. Using weight-loss science developed by the National Institutes of Health and leading experts, Meg.AI is your friend and guide on your weight loss journey.
                </p>
                <p>
                    As your guide, Meg.AI uses revolutionary voice interaction to make recording what you eat and finding healthier alternatives easier.
                </p>
                <hr/>
                <h3 className='landing-page-header'>How Meg.AI Works</h3>
                <p>
                    Using artificial intelligence, Meg.AI evaluates what you eat and offers healthier alternatives to foods known to cause weight gain.
                </p>
                <p>
                    And don’t worry. With over 100,000 food alternatives, Meg.AI won’t suggest a kale salad every time.
                </p>
                <p>
                    Struggling with motivation? We use the same technology as self-driving cars to keep your weight loss on-track!
                </p>
                <p>
                    Ready to try Meg.AI?
                </p>
                <div className='get-the-app'>
                    <a className='btn get-started' href='https://testflight.apple.com/join/bYiSDeWg'>
                        Become a Beta Tester
                    </a>
                </div>
                <hr/>
                <h3 className='landing-page-header'>Beta Test Meg.AI For FREE</h3>
                <div className='iphone-message'>
                    <h3 className='iphone-header'>
                        If you have an iPhone and you’re ready to lose weight, this is your perfect opportunity to experience a much better alternative to traditional weight loss programs.
                    </h3>
                    <div className='steps'>
                        <div className='step'>
                            Step 1: Click On the "Become a Beta Tester" button
                        </div>
                        <hr/>
                        <div className='step'>
                            Step 2: Download Testflight on your smartphone
                        </div>
                        <hr/>
                        <div className='step'>
                            Step 3: Download the beta version of the app.
                        </div>
                        <hr/>
                        <div className='step'>
                            Step 4: Create an Account on Meg AI
                        </div>
                        <hr/>
                        <div className='step'>
                            Step 5: Try the App
                        </div>
                    </div>
                    <div className='get-the-app'>
                        <a className='btn get-started' href='https://testflight.apple.com/join/bYiSDeWg'>
                            Become a Beta Tester
                        </a>
                    </div>
                </div>
                <div className='grid'>
                    <h3 className='landing-page-header'>A Snapshot</h3>
                    <h5 className='landing-page-header'>Download and Install Meg.AI</h5>
                    <h5 className='landing-page-header'>Create an Account with Meg.AI</h5>
                    <h5 className='landing-page-header'>Meet Meg</h5>
                    <h5 className='landing-page-header'>Get Started</h5>
                    <h5 className='landing-page-header'>Learn</h5>
                </div>
            </div>
        </div>
    );
}

export default LandingPageA;