import React from 'react';
import './FAQ.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TipsAndHints from './tipsAndHints/TipsAndHints.js';
import HowDoI from './howDoI/HowDoI.js';
import DoYouOffer from './doYouOffer/DoYouOffer.js';
import HowDoWe from './howDoWe/HowDoWe.js';
import SafetyAndSecurity from './safetyAndSecurity/SafetyAndSecurity.js';
import Glossary from './glossary/Glossary.js';

function FAQ() {
    return (
        <div className="FAQs container">
            <Router>
                <div className='FAQs-header'>
                    <h2>Welcome</h2>
                    <p>
                        Want to see how to get the most out of Meg? You’ve come to the right place. 
                        Just click on the tab most relevant to your question or interest.
                    </p>
                </div>
                <ul className="tabset">
                    <li className="FAQ-nav">
                        <Link to='/FAQ/tips-and-hints'>
                            <a className="tab" href="#" aria-controls="tips-and-hints">
                                Tips and Hints
                            </a>
                        </Link>
                    </li>
                    <li className="FAQ-nav">
                        <Link to='/FAQ/how-do-i'>
                            <a className="tab" href="#" aria-controls="how-do-i">
                                How Do I?
                            </a>
                        </Link>
                    </li>
                    <li className="FAQ-nav">
                        <Link to='/FAQ/do-you-offer'>
                            <a className="tab" href="#" aria-controls="do-you-offer">
                                Do You Offer?
                            </a>
                        </Link>
                    </li>
                    <li className="FAQ-nav">
                        <Link to='/FAQ/how-do-we'>
                            <a className="tab" href="#" aria-controls="how-do-we">
                                How Do We?
                            </a>
                        </Link>
                    </li>
                    <li className="FAQ-nav">
                        <Link to='/FAQ/safety-and-security'>
                            <a className="tab" href="#" aria-controls="safety-and-security">
                                Safety and Security
                            </a>
                        </Link>
                    </li>
                    <li className="FAQ-nav">
                        <Link to='/FAQ/glossary'>
                            <a className="tab" href="#" aria-controls="glossary">
                                Glossary
                            </a>
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/FAQ/tips-and-hints" component={TipsAndHints}/>
                    <Route path="/FAQ/how-do-i" component={HowDoI}/>
                    <Route path="/FAQ/do-you-offer" component={DoYouOffer}/>
                    <Route path="/FAQ/how-do-we" component={HowDoWe}/>
                    <Route path="/FAQ/safety-and-security" component={SafetyAndSecurity}/>
                    <Route path="/FAQ/glossary" component={Glossary}/>
                </Switch>
            </Router>    
        </div>
    );
}

export default FAQ;