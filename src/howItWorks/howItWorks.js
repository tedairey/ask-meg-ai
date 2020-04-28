import React from 'react';
import './howItWorks.css';
import { Link } from 'react-router-dom';
import { scrollTop } from '../Helpers';

function HowItWorks() {
    return (
        <div className="how-it-works container">
            <div className="row section">
                <h1 className ="how-it-works-header col-md-5">
                    Get Meg. Eat Delicious Food. Lose Weight. Every Week.
                </h1>
                <iframe className="col-md-7" src="https://player.vimeo.com/video/357418464?transparent=0&amp;app_id=122963" width="695" height="460" id="meg-campaign-video" data-ready="true" tabindex="-1"></iframe>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420562/emokuhietha0cpmkpsb2.jpg"/>
                <p className="col-md-5">
                    Section 1
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420581/w5caqdwhkpwes67cropr.jpg"/>
                <p className="col-md-5">
                    Section 2
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420600/kboij9aomukb7n1hnddw.jpg"/>
                <p className="col-md-5">
                    Section 3
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420618/kq9y3mpvykgrr8qlt4sb.jpg"/>
                <p className="col-md-5">
                    Section 4
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420636/apasok2m8cfktabtssuj.jpg"/>
                <p className="col-md-5">
                    Section 5
                </p>
            </div>
            <hr/>
            <div className="row section">
                <img className="col-md-7" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568420651/gzrzupnilm4sskrczjv0.jpg"/>
                <p className="col-md-5">
                    Section 6
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