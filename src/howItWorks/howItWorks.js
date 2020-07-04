import React from 'react';
import './HowItWorks.scss';
import feedback from '../homePageImages/feedback.jpeg';
import milkGif from '../homePageImages/milkAlt.gif';
import anywhere from '../homePageImages/anywhere.gif';

function HowItWorks() {
    return (
        <div className="how-it-works">
            <div className="row section">
                <div className='col-lg-6 m-auto'>
                    <h2 className = 'how-it-works-header title-text'>
                        Know, Right Now, Which Foods Will Cause You To Gain or Lose Weight
                    </h2>
                    <div className='section-text'>
                        <p>
                            In 2019 the National Institutes of Health proved that when people eat highly 
                            processed foods they gain weight and when they avoid them, they lose weight. 
                            But, recognizing highly processed foods is not easy. Until now.
                        </p>
                        <p>
                            Developed with experts trained at the University of Chicago and Northwestern’s 
                            Feinberg School of Medicine, Meg scores every food you eat and gives you simple 
                            thumbs up, thumbs down guidance. Instantly.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 home-image'>
                    <img src={milkGif}/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7 order-lg-5 m-auto'>
                    <h2 className='how-it-works-header title-text'>
                        Get Nutrition Guidance, Anywhere, Anytime
                    </h2>
                    <div className='section-text'>
                        <p>
                            <strong>In The Grocery Store.</strong> Scan a food. Thumbs down? Meg recommends a close 
                            alternative that’s heathier. Instantly. 
                        </p>
                        <p>
                            <strong>On-The-Go.</strong> Get healthy meal suggestion each day.  Have a vegan, vegetarian 
                            or gluten-free preference? Meg has you covered.
                        </p>
                        <p>
                            <strong>Dining Out.</strong> More convenient than a dietitian on speed dial, just text Meg and get the advice you need. Right there. Right then. 
                        </p>
                    </div>
                </div>
                <div className='col-lg-5 home-image order-lg-1 home-image'>
                    <img src={anywhere}/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7 m-auto'>
                    <h2 className='how-it-works-header title-text'>
                        Get Personalized Recommendations Every Day
                    </h2>
                    <div className='section-text'>
                        Using the power of AI, each day Meg will suggest an area for improvement. 
                        For example, changing your lunch choice to raise your nutrition score. She’ll 
                        then give you some alternative choices for weight loss success.
                    </div>
                </div>
                <div className='col-lg-5 home-image m-auto'>
                    <img src={feedback}/>
                </div>
            </div>
            <hr/>
            <div className='section'>
                <h2 className='how-it-works-header title-text'>
                    Meg Is Fully Voice-Enabled. Just Talk To Meg
                </h2>
                <div className='section-text'>
                    <p>    
                        Unlike ‘traditional apps’ requiring screen-by-screen scrolling and lots of text thumbing, 
                        Meg provides the convenience of voice logging. As quickly as you can say “log my breakfast 
                        of turkey sausage, scrambled egg and toast” Meg logs it. It’s really that simple.
                    </p>
                    <p>
                        Speaking in complete sentences and using human-like facial expressions, interacting 
                        with Meg is like talking to an informed friend. 
                    </p>
                </div>
            </div>
            <hr/>
            <div className='section'>
                <h1 className='how-it-works-header title-text'>
                    Meg Is Affordable
                </h1>
                <div className='section-text'>
                    <p>
                        Meg costs about the same as a cup of coffee each week. Well, less than that if it’s 
                        from you know where!  
                    </p>
                    <p>
                        Joking aside, we believe world class weight loss support should be affordable.
                    </p> 
                </div>
            </div>
        </div>

    );
}

export default HowItWorks;