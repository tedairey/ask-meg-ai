import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function BetaTestingModal(props) {

    return (
        <Modal show={props.showModal} onHide={() => props.setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Get Free Use of Meg!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-message'>
                    <p>
                        Want to get free use of Meg and be recognized as a customer - developer? 
                        Meg is undergoing beta testing and we’re looking for
                        volunteers. The program is free of charge and
                        you may terminate your involvement at any time.
                    </p>
                    <strong>Here’s what you get:</strong>
                    <br/>
                    <ul className='beta-testing-list'>
                        <li>Free use of Meg for the test period of 2 months</li>
                        <li>A discount on any paid subscription after completion the test</li>
                        <li>
                            Review of your anonymized data by a world class team of dietitians, 
                            weight loss doctors and analysts
                        </li>
                        <li>Access to new features and functionality only available to early testers.</li>
                        <li>
                            Opportunity to become a customer-developer by providing input to Meg’s development team.
                        </li>
                    </ul>
                    <strong>Here’s what we’re looking for:</strong>
                    <ul className='beta-testing-list'>
                        <li>
                            You want to lose weight.
                        </li>
                        <li>
                            You’ll use Meg every day, logging your food, your exercise and your weight.
                        </li>
                        <li>
                            You’ll participate in two, 15-minute Zoom calls with our team during the 2 month 
                            testing period.
                        </li>
                        <li>
                            And, at your option, you’ll provide feedback to our developers by just saying 
                            “feedback” to Meg (she’ll guide you from there!).
                        </li>
                    </ul>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                To apply, please contact us 
                at <a href='mailto:support@askmeg.ai' className='email'>
                    support@askmeg.ai
                </a>
            </Modal.Footer>
        </Modal>
    );
}

export default BetaTestingModal;