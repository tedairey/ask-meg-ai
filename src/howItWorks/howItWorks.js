import React from 'react';
import './HowItWorks.scss';
import feedback from '../homePageImages/feedback.jpeg';
import yogurtGif from '../homePageImages/comparisonAlt.gif';
import anywhere from '../homePageImages/anywhere.png';
import comparison from '../homePageImages/comparison.gif';

function HowItWorks() {

    const yogurtTitle = 'Meg Helps You Make Better Food Choices. Instantly.',
        anywhereTitle = 'Meg Gives You Nutrition Guidance, Anywhere, Anytime',
        feedbackTitle = 'Meg Gives You Personalized Recommendations Every Day',
        comparisonTitle = 'Get Meg. Get Next Generation Weight Loss. Today.';

    return (
        <div className="how-it-works">
            <div className="row section">
                <h2 className='title-text d-lg-none'>
                    {yogurtTitle}
                </h2>
                <div className='col-lg-6 home-image'>
                    <img src={yogurtGif} alt='yogurt comparison gif'/>
                </div>
                <div className='col-lg-6 m-auto'>
                    <h2 className = 'title-text d-none d-lg-block'>
                        {yogurtTitle}
                    </h2>
                    <div className='text'>
                        <p>
                            In 2019 the National Institutes of Health proved that when people eat highly 
                            processed foods they gain weight and when they avoid them, they lose weight. 
                            But, recognizing highly processed foods is not easy. <strong>Until now.</strong>
                        </p>
                        <p>
                            Developed with experts trained at the University of Chicago and Northwestern’s 
                            Feinberg School of Medicine, Meg scores every food you eat and gives you simple 
                            thumbs up, thumbs down guidance. Instantly.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <h2 className='title-text d-lg-none'>
                    {anywhereTitle}
                </h2>
                <div className='col-lg-5 home-image order-lg-5 home-image'>
                    <img src={anywhere} alt='anywhere gif'/>
                </div>
                <div className='col-lg-7 order-lg-1 m-auto'>
                    <h2 className='title-text d-none d-lg-block'>
                        {anywhereTitle}
                    </h2>
                    <div className='text'>
                        <p>
                            <strong>In The Grocery Store.</strong> Scan a food. Thumbs down? Meg recommends a close 
                            alternative that’s healthier. Instantly. 
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
            </div>
            <hr/>
            <div className='row section'>
                <h2 className='title-text d-lg-none'>
                    {feedbackTitle}
                </h2>
                <div className='col-lg-5 home-image m-auto'>
                    <img src={feedback} alt='feedback gif'/>
                </div>
                <div className='col-lg-7 m-auto'>
                    <h2 className='title-text d-none d-lg-block'>
                        {feedbackTitle}
                    </h2>
                    <div className='text'>
                        Using the power of AI, each day Meg will suggest an area for improvement. 
                        For example, changing your lunch choice to raise your nutrition score. Meg 
                        will also provide some healthy meal choices for weight loss success.
                    </div>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <h2 className='title-text d-lg-none'>
                    {comparisonTitle}
                </h2>
                <div className='col-lg-5 order-lg-5 home-image m-auto'>
                    <img src={comparison} alt='comparison gif'/>
                </div>
                <div className='col-lg-7 m-auto'>
                    <h2 className='title-text d-none d-lg-block order-lg-1'>
                        {comparisonTitle}
                    </h2>
                    <div className='text'>
                        Meg is <u>the</u> next generation of weight loss. Meg uses AI to 
                        provide <strong>unparalleled insight.</strong> With the <strong>convenience
                        </strong> of voice logging, as quickly as you can say “log my breakfast of 
                        turkey sausage, scrambled egg and toast” its done. More than just a recorder, 
                        Meg offers <strong>proactive guidance</strong> every step of the way to help 
                        you <strong>make healthier choices, every time.</strong>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='section'>
                <h2 className='title-text text-center'>
                    Meg Is Affordable
                </h2>
                <div className='text'>
                    <p>
                        Meg costs about the same as a cup of coffee each week. We believe world class 
                        weight loss support should be affordable.
                    </p> 
                </div>
            </div>
        </div>

    );
}

export default HowItWorks;