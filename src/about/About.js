import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about container">
            <div className='about-header'>
                <h1>Team Meg</h1>
            </div>
            <h3>About Us</h3>
            <br/>
            <p>
                Want to learn about us and Meg? You’ve come to the right place. 
                <br/>
                We, and many of those close to us, have struggled to lose weight. 
                For some of us it’s been a constant effort since high school. 
                Being a mix of researchers, analysts, doctors, nutritionists and entrepreneurs, 
                we wanted to find weight loss programs that were proven and effective, not just the 
                latest fad or flavor of the month. 
                <br/>
                We tested competitive programs with the goal of losing weight, being healthier 
                and feeling better about ourselves. The plans we tried seemed “cookie cutter.” 
                Coaching was expensive and consisted of an occasional check-in message or “you can do it” 
                blog post instead of real solutions to complex challenges.
                <br/>
                We talked to hundreds of you. You shared your weight loss stories and frustrations. Thank you. 
                We will never tell you it’s about willpower. We will never judge you. 
                <br/>
                We dug into the science with three goals. First, to understand what weight loss approaches have 
                been proven to be effective in randomized clinical trials and validated in leading, peer-reviewed, 
                accredited medical journals. Second, to go beyond just calorie counting, we dug further into the 
                latest nutritional and medical science to understand the types of foods proven to cause weight 
                gain. Our third goal was to understand the most effective coaching techniques and methods to 
                change ingrained habits, one step at a time, be it breaking through a stubborn weight loss 
                plateau or re-gaining the motivation to establish healthier life choices.
                <br/>
                We wanted something better and set out to create it. Meg’s artificial intelligence starts 
                with the latest proven science and decades of real-world weight loss experience from experts 
                from Northwestern University’s Feinberg School of Medicine and Chicago’s Rush University Medical 
                Center and serving leading professional sports teams. We have trained Meg’s nutrition algorithms 
                alongside hundreds of independent nutrition assessments by our team of dietitians and weight loss 
                experts, Meg is like a dietitian in your pocket!
                <br/>
                We created a simple nutrition score that’s personalized to you and what you’ve been eating. 
                Weighing dinner choices and want to know if you should have the fish or the bean burger? 
                Ask Meg and get a personalized recommendation. Raise your score, lose the weight Meg’s AI 
                will help you lose weight and keep it off!
                <br/>
                We are curious and love to learn. We sought to develop a solution that would learn with us. 
                A solution that could learn not only what works for each of us individually, but that could 
                connect the dots across many people in order to boost the chances of success for all of us. Our 
                artificial intelligence engine powering Meg’s analysis and recommendations makes this possible.
                <br/>
                We believe programs should be affordable and not break the bank. That’s why we are offering 
                Meg for the price of a cup of coffee each week.
            </p>
            <div className="our-team">
                <h1>
                    Our Team
                </h1>
                <img id="our-team-photo" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1567542503/dfvab3s9ujgwuknmarzv.png"/>
            </div>
        </div>
    );
}

export default About;