import React from 'react';
import './DoYouOffer.scss';

function DoYouOffer() {
    return (
        <div id="do-you-offer">
            <div className="question">
                <h4>Different subscription levels</h4>
                <p>
                    Yes. We aim to provide a lot of functionality in the base Meg subscription. 
                    To cater for those of you wanting a personalized review from a qualified 
                    professional, we offer a premium subscription via an in-App purchase. The 
                    premium subscription provides a personalized weekly report giving you succinct 
                    recommendations for improvement based on peer metrics. Please check it out as 
                    there is a free-period to evaluate if it is right for you.
                </p>
            </div>
            <div className="question">
                <h4>The ability to choose another agent</h4>
                <p>
                    We do not currently offer other agents. Meg is it! If this is something you’d 
                    like to see, please use feedback.
                </p>
            </div>
            <div className="question">
                <h4>A trial period</h4>
                <p>
                    Yes, the current trial period is 14-days. You may cancel your subscription at 
                    any time during the trial period without incurring any fees or charges.
                </p>
            </div>
        </div>
    );
}

export default DoYouOffer;