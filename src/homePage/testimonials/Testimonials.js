import React from 'react';
import './Testimonials.scss';

function Testimonials(props) {
    return (
        <div className='testimonials'>
            <h2 className='testimonials-header title-text'>
                What Our Users Say
            </h2>
            <div className='row section'>
                <div className='col-md-7'>
                    <img className='testimonials-image' alt='Alex K. testimonial' src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751667/hu5qy2jdfz5ssxfio5uk.png"/>
                </div>
                <div className="col-md-5 my-auto">
                    <span className='quote'>"Keeps Me Motivated"</span><br/>
                    <span className='person'>-Alex K.</span>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-md-7'>
                    <img className='testimonials-image' alt='Roberta P. testimonial' src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568750847/okwx41mw4cxswgya9qy3.png"/>
                </div>
                <div className="col-md-5 my-auto">
                    <span className='quote'>"The Perfect Friend"</span><br/>
                    <span className='person'>-Roberta P.</span>
                </div>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-md-7'>
                    <img className='testimonials-image' alt='Pat B. testimonial' src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751231/my3agepuhv8xgksuje18.png"/>
                </div>
                <p className="col-md-5 my-auto">
                    <span className='quote'>"All the Benefits of Dietitian Input"</span><br/>
                    <span className='person'>-Pat B.</span>
                </p>
            </div>
            <hr/>
            <div className='row section'>
                <div className='col-md-7'>
                    <img className='testimonials-image' alt='Maggie A. testimonial' src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1568751418/lpqdqxovwg7awscq2h6g.png"/>
                </div>
                <p className="col-md-5 my-auto">
                    <span className='quote'>"So Nice"</span><br/>
                    <span className='person'>-Maggie A.</span>
                </p>
            </div>
        </div>
    );
}

export default Testimonials;