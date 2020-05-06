import React from 'react';
import './howItWorks.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';
import { Carousel } from 'react-bootstrap';

function HowItWorks() {
    return (
        <div className="how-it-works container">
            <div className="row section">
                <h1 className ="how-it-works-header col-md-5">
                    Get Meg. Eat Delicious Food. Lose Weight. Every Week.
                </h1>
                <iframe className="col-md-7" src="https://player.vimeo.com/video/357418464?transparent=0&amp;app_id=122963" width="695" height="460" id="meg-campaign-video" data-ready="true" tabIndex="-1"></iframe>
            </div>
            <hr/>
            <div className="carousel-header">
                <h3>Based on proven science</h3>
            </div>
            <Carousel interval={5000}>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420562/emokuhietha0cpmkpsb2.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420581/w5caqdwhkpwes67cropr.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420600/kboij9aomukb7n1hnddw.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420618/kq9y3mpvykgrr8qlt4sb.jpg"
                    alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420636/apasok2m8cfktabtssuj.jpg"
                    alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420651/gzrzupnilm4sskrczjv0.jpg"
                    alt="Sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
            <hr/>
            <h2 className='user-feedback-header'>
                What do our users say?
            </h2>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751667/hu5qy2jdfz5ssxfio5uk.png"/>
                <p className="col-md-5">
                    <span className='quote'>"Keeps Me Motivated"</span><br/>
                    <span className='person'>-Alex K.</span>
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568750847/okwx41mw4cxswgya9qy3.png"/>
                <div className="col-md-5">
                    <span className='quote'>"The Perfect Friend"</span><br/>
                    <span className='person'>-Roberta P.</span>
                </div>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751231/my3agepuhv8xgksuje18.png"/>
                <p className="col-md-5">
                    <span className='quote'>"All the Benefits of Dietitian Input"</span><br/>
                    <span className='person'>-Pat B.</span>
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751418/lpqdqxovwg7awscq2h6g.png"/>
                <p className="col-md-5">
                    <span className='quote'>"So Nice"</span><br/>
                    <span className='person'>-Maggie A.</span>
                </p>
            </div>
            <hr/>
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

export default HowItWorks;