import React, { useState, useEffect, useRef } from 'react';
import './FAQ.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TipsAndHints from './tipsAndHints/TipsAndHints.js';
import HowDoI from './howDoI/HowDoI.js';
import DoYouOffer from './doYouOffer/DoYouOffer.js';
import HowDoWe from './howDoWe/HowDoWe.js';
import SafetyAndSecurity from './safetyAndSecurity/SafetyAndSecurity.js';
import Glossary from './glossary/Glossary.js';

function FAQ (props) {
	
	const tipsTab = useRef(),
		[active, setActive] = useState(null);

	useEffect(() => {
		setActive(tipsTab.current);
		activate(tipsTab.current);
	}, []);

	const activateTab = (event) => {
		let lastActive = active,
			style = lastActive.parentElement.style;

		lastActive.style.color = 'white';
		style.backgroundColor = '#464040';
		style.borderColor = 'white';
		setActive(event.target);
		activate(event.target);
	}

	const activate = (target) => {
		const style = target.parentElement.style;
		target.style.color = 'black';
		style.backgroundColor = 'white';
		style.borderColor = 'black';
		style.textDecoration = 'none';
	}

	return (
		<div className="FAQs">
		<Router>
			<div className='FAQs-header'>
				<h2>Welcome</h2>
				<p className='FAQ-prompt'>
					Want to see how to get the most out of Meg? You’ve come to the right place.
					Just click on the tab most relevant to your question or interest.
				</p>
			</div>
			<ul className="tabset">
				<li className='FAQ-nav'>
					<Link to='/FAQ/tips-and-hints' ref={tipsTab} className='tab'
						aria-controls="tips-and-hints" onClick={activateTab}>
						Tips and Hints
					</Link>
				</li>
				<li className="FAQ-nav">
					<Link to='/FAQ/how-do-i' onClick={activateTab} className='tab'
						aria-controls="how-do-i">
						How Do I?
					</Link>
				</li>
				<li className="FAQ-nav">
					<Link to='/FAQ/do-you-offer' className='tab'
						aria-controls="do-you-offer" onClick={activateTab}>
						Do You Offer?
					</Link>
				</li>
				<li className="FAQ-nav">
					<Link to='/FAQ/how-do-we' className='tab' aria-controls="how-do-we"
						onClick={activateTab}>
						How Do We?
					</Link>
				</li>
				<li className="FAQ-nav">
					<Link to='/FAQ/safety-and-security' className='tab'
						aria-controls="safety-and-security" onClick={activateTab}>
						Safety and Security
					</Link>
				</li>
				<li className="FAQ-nav">
					<Link to='/FAQ/glossary' className='tab' aria-controls="glossary"
						onClick={activateTab}>
						Glossary
					</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/FAQ/tips-and-hints" component={TipsAndHints} />
				<Route path="/FAQ/how-do-i" component={HowDoI} />
				<Route path="/FAQ/do-you-offer" component={DoYouOffer} />
				<Route path="/FAQ/how-do-we" component={HowDoWe} />
				<Route path="/FAQ/safety-and-security" component={SafetyAndSecurity} />
				<Route path="/FAQ/glossary" component={Glossary} />
			</Switch>
		</Router>
	</div>
	);
}

export default FAQ;