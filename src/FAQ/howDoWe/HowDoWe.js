import React from 'react';
import './HowDoWe.css';

function HowDoWe() {
    return (
        <div id="how-do-we">
            <div className="question">
                <h4>Calculate a nutrition score</h4>
                <p>
                    You can ask Meg to explain this too. Here’s a quick summary. Our nutrition 
                    science has been developed from research published in May 2019 by the National 
                    Institutes of Health (NIH). The NIH proved for the first time that it is the 
                    amount of processing of a food that determines if you’ll gain or lose weight, 
                    rather than its nutrient profile. Our team of weight loss doctors, dietitians 
                    and data scientists has developed algorithms to classify any food. Foods consistent 
                    with weight loss score a “10” and foods that will cause you to gain weight a “0”. 
                    A meal comprising a combination of both types of food earns an average score. 
                    Maintaining a high score will help you lose weight.
                </p>
            </div>
            <div className="question">
                <h4>Evaluate a food</h4>
                <p>
                    You can ask Meg for the nutrition score for any food by saying “Nutrition score…” 
                    followed by the food name, so you might say “nutrition score bacon”.
                </p>
            </div>
            <div className="question">
                <h4>Measure activity</h4>
                <p>
                    To measure your activity, we start with what you tell us in your activity log. 
                    We estimate the calorie burn of your activity using a common clinical reference 
                    originally developed by Dr.&nbsp;Bill Haskell at Stanford. Dr.&nbsp;Haskell’s work 
                    defined the intensity of an activity in relation to a person’s resting metabolic rate 
                    using the comparative rate of oxygen intake to a person sitting quietly, known as METs.
                </p>
            </div>
            <div className="question">
                <h4>Measure body mass index (BMI)</h4>
                <p>
                    The National Institutes of Health defines your body mass index, known as your BMI, 
                    as a measure of body fat. It is calculated as your weight divided by the square of 
                    your height. The statistic measured in metric units as kilograms per meter squared. 
                    To calculate your BMI, ask Meg “What’s my BMI”. The research tells us that losing as 
                    little as 3% of your body weight can lead to improvement in your health.
                </p>
            </div>
            <div className="question">
                <h4>Measure resting metabolic rate (RMR)</h4>
                <p>
                    We estimate your resting metabolic rate (RMR) using a standard medical calculator 
                    that reflects your age, gender and weight. To calculate your RMR, ask Meg “What’s my RMR?”
                </p>
            </div>
            <div className="question">
                <h4>Set a safe rate of weight loss</h4>
                <p>
                    We encourage you to maintain your weight within the healthy weight guidelines endorsed by 
                    the World Health Organization, equivalent to a Body Mass Index (BMI) between 18.5 and 25.0. 
                    You may opt to maintain your current weight while developing healthy habits. Users with 
                    a BMI below 18.5 are not permitted to set a weight loss goal, as weight loss is not 
                    advised for people with BMI below the healthy range.
                </p>
                <p>
                    If you are being treated for a medical condition, taking prescription medication, or 
                    following a therapeutic diet to treat a disease, it’s especially important to show the 
                    plan you develop with Meg to your health care provider. Any modifications made to the 
                    plan by your health care provider should be followed.
                </p>
            </div>
            <div className="question">
                <h4>Set activity targets</h4>
                <p>
                    The Office of Disease Prevention and Health Promotion publishes The Guidelines for 
                    Physical Activity. We base our recommendations on their targets. The Guidelines are 
                    accessible through health.gov.
                </p>
                <p>
                    If you are being treated for a medical condition, taking prescription medication, 
                    or following a therapeutic diet to treat a disease, it’s especially important to 
                    show the plan you develop with Meg to your health care provider. Any modifications 
                    made to the plan by your health care provider should be followed.
                </p>
            </div>
            <div className="question">
                <h4>Use artificial intelligence (AI)</h4>
                <p>
                    We use artificial intelligence (“AI”) in several ways. To touch on three. We use 
                    natural language processing (“NLP”) for Meg to interpret what you say. This means 
                    you can ask her questions and talk to her in complete sentences. Second, we have 
                    developed algorithms to score every food. Meg uses these algorithms to calculate 
                    your nutrition score based on the food and drinks you consume. Third, Meg uses her 
                    artificial intelligence (AI) to analyze the behaviors of you and your peers and 
                    looks for common patterns to suggest improvement.
                </p>
            </div>
            <div className="question">
                <h4>Use natural language processing (NLP)</h4>
                <p>
                    Meg uses natural language processing (NLP) so you can talk to her in complete 
                    sentences, just like you would a friend or coach. To help your weight loss success, 
                    she has been programmed with thousands of questions and answers developed by leading 
                    weight loss experts. This way you can ask her, for example, “what’s a healthy pizza” 
                    and she’ll tell you.
                </p>
            </div>
            <div className="question">
                <h4>Score alcohol</h4>
                <p>
                    Meg does not score alcohol. If you ask her about alcohol she will provide guidance 
                    to support your weight loss. If you have questions about dependency or medical 
                    conditions, please consult with a health professional. Meg does not provide 
                    medical advice.
                </p>
            </div>
            <div className="question">
                <h4>Provide medical advice</h4>
                <p>
                    In short, we do not provide medical advice. If you need medical advice, we 
                    encourage you to consult your doctor.
                </p>
            </div>
        </div>
    );
}

export default HowDoWe;