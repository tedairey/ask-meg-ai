import React from 'react';
import './HowItWorks.scss';
import AppleBadge from '../App_Store_Badge.svg';

function HowItWorks() {
    return (
        <div className="how-it-works container">
            <div className="row section">
                <div className='col-lg-7'>
                    <h1 className ="how-it-works-header title-text">
                        Leverage Proven Food Science
                    </h1>
                    <div className='section-text'>
                        In May 2019, the National Institutes of Health proved that people gain weight when 
                        they eat highly processed foods and lose weight when they reduce or avoid them. The 
                        researchers demonstrated their outcomes in randomized control trials, the “gold standard” 
                        of scientific proof. Today highly processed foods are pervasive and not easy to recognize. 
                        Perhaps it’s no wonder 70 percent of us are overweight. 
                    </div>
                </div>
                <div className='col-lg-5'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7 order-lg-5'>
                    <div className='section-text'>
                        Meg applies the food classification system used by the NIH researchers to over 300,000 foods 
                        and provides simple thumbs up and thumbs down feedback, so you know what you’re eating.  
                    </div>
                </div>
                <div className='col-lg-5 order-lg-1'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7'>
                    <div className='section-text'>
                        In the grocery store. Scan a food. Thumbs down? Meg recommends a close alternative that’s heathier. Instantly.
                        <br/>
                        On-the-go. Ask Meg about a food. Thumbs up? Enjoy! Thumbs down? She’ll recommend a heathier alternative from 
                        among your preferred brands. Immediately.
                        <br/>
                        A night out. More convenient than a dietitian on speed dial, just ask Meg 24/7 and get the advice you need. 
                        Right there. Right then.
                    </div>
                </div>
                <div className='col-lg-5'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7 order-lg-5'>
                    <h1 className='how-it-works-header title-text'>
                        Get Personalized Recommendations Every Day
                    </h1>
                    <div className='section-text'>
                        Developed with experts trained at the University of Chicago and Northwestern’s Feinberg School of Medicine, 
                        Meg will compare your progress with your weight-losing peers and suggest one area for the greatest improvement. 
                        For example, changing your lunch choice to raise your nutrition score.
                        <br/>
                        She’ll also suggest healthy food choices each day. Have a vegan, vegetarian or gluten-free preference? 
                        Meg has you covered.
                    </div>
                </div>
                <div className='col-lg-5 order-lg-1'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-lg-7'>
                    <h1 className = 'how-it-works-header title-text'>
                        Speaking With Meg Is Easy. Engaging. Enjoyable.
                    </h1>
                    <div className='section-text'>
                        Unlike ‘traditional apps’ requiring screen-by-screen scrolling and lots of text thumbing, Meg provides 
                        the convenience of voice logging. As quickly as you can say “log my breakfast of turkey sausage, 
                        scrambled egg and toast” Meg logs it. It’s that simple.
                        <br/>
                        Speaking in complete sentences and using human-like facial expressions, interacting with Meg is like 
                        talking to an informed friend. One where you enjoy your interactions.
                    </div>
                </div>
                <div className='col-lg-5'>
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542175/qqksxyq3kg14a45bvjfg.png"/>
                </div>
            </div>
            <hr/>
            <div className='section'>
                <h1 className='how-it-works-header title-text'>
                    Meg Is Affordable
                </h1>
                <div className='section-text'>
                    Meg costs about the same as a cup of coffee each week. Well, less than that if it’s from you know where!  
                    <br/>
                    Joking aside, we believe world class weight loss support should be affordable. 
                </div>
            </div>
        </div>

    );
}

export default HowItWorks;