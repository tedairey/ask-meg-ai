import React, { Component } from 'react';
import './FAQ.scss';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import TipsAndHints from './tipsAndHints/TipsAndHints.js';
import HowDoI from './howDoI/HowDoI.js';
import DoYouOffer from './doYouOffer/DoYouOffer.js';
import HowDoWe from './howDoWe/HowDoWe.js';
import SafetyAndSecurity from './safetyAndSecurity/SafetyAndSecurity.js';
import Glossary from './glossary/Glossary.js';

class FAQ extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
        this.tipsTab = React.createRef();
    }

    componentDidMount() {
        this.setState({active: this.tipsTab.current});
        this.activate(this.tipsTab.current);
    }

    activateTab = (event) => {
        let active = this.state.active,
            style = active.parentElement.style;
        
        active.style.color = 'white';
        style.backgroundColor = '#464040';
        style.borderColor = 'white';
        this.setState({active: event.target});
        this.activate(event.target);
    }

    activate = (target) => {
        const style = target.parentElement.style;
        target.style.color = 'black';
        style.backgroundColor = 'white';
        style.borderColor = 'black';
        style.textDecoration = 'none';
    } 

    render(){
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
                        <li className='FAQ-nav'>
                            <Link to='/FAQ/tips-and-hints' ref={this.tipsTab} className='tab' 
                                    aria-controls="tips-and-hints" onClick={this.activateTab}>
                                Tips and Hints
                            </Link>
                        </li>
                        <li className="FAQ-nav">
                            <Link to='/FAQ/how-do-i' onClick={this.activateTab} className='tab' 
                                    aria-controls="how-do-i">
                                How Do I?
                            </Link>
                        </li>
                        <li className="FAQ-nav">
                            <Link to='/FAQ/do-you-offer' className='tab' 
                                    aria-controls="do-you-offer" onClick={this.activateTab}>
                                Do You Offer?
                            </Link>
                        </li>
                        <li className="FAQ-nav">
                            <Link to='/FAQ/how-do-we' className='tab' aria-controls="how-do-we" 
                                    onClick={this.activateTab}>
                                How Do We?
                            </Link>
                        </li>
                        <li className="FAQ-nav">
                            <Link to='/FAQ/safety-and-security' className='tab' 
                                    aria-controls="safety-and-security" onClick={this.activateTab}>
                                Safety and Security
                            </Link>
                        </li>
                        <li className="FAQ-nav">
                            <Link to='/FAQ/glossary' className='tab' aria-controls="glossary" 
                                    onClick={this.activateTab}>
                                Glossary
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
}

export default FAQ;