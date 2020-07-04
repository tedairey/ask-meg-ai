import React from 'react';
import './Conduct.scss';

function Conduct(props) {

    return (
        <div className='conduct'>
            <h1 className='conduct-header'>Community Code of Conduct</h1>
            <p className='conduct-header'>Come on in and welcome to Team Meg!</p>
            <p>
                We are glad you've decided to become a member of our Community. We have
                built Meg to provide healthy advice and we’d like to reflect that same spirit here.
                Members come to Community for some judgement-free support and we’d like
                this to be a resource that helps reinforce healthy habits.
            </p>
            <p>
                By participating, you're agreeing to be bound by this Community Code of
                Conduct. This means, you will comply with the following codes:
            </p>
            <li className='conduct-list'>
                <strong>1. Be positive in your support.</strong> Please look to encourage members on making
                progress. We’re all in this journey together and it’s tough enough as it is
                without any negative comments.
            </li>
            <li className='conduct-list'>
                <strong>2. Avoid personal attacks.</strong> Please don't use language or visuals that other
                members may consider threatening, abusive, harassing, hateful, racially or
                ethnically objectionable. Threats of violence and the use of foul language
                will not be tolerated. If you disagree with another member’s opinions just
                skip over it. Being attacked? Please, let us know. We’ll investigate and aim
                to stop it promptly.
            </li>
            <li className='conduct-list'>
                <strong>3. Tell us if have a concern about another member.</strong> Whether it is to report
                bad behavior or if you are concerned about the health or safety of another
                person. As the tsa says, “if you see something, say something”.
            </li>
            <li className='conduct-list'>
                <strong>4. Offer practical advice.</strong> For example, you might say "add fruit, rather than
                sugar to your oatmeal to improve your nutrition score!" learned how to
                deal with a particular challenge? Please tell our community. We’d all love to
                learn your mojo!
            </li>
            <li className='conduct-list'>
                <strong>5. Avoid promoting products, medications and supplements.</strong> Please help
                keep our community commercial free. Don’t post links to commercial sites,
                fundraising efforts, charity drives and similar activities. We aim to keep our
                community ad free.
            </li>
            <li className='conduct-list'>
                <strong>6. Don't share personal medical information.</strong> Please do not post personal
                medical information.
            </li>
            <li className='conduct-list'>
                <strong>7. Don’t violate the privacy of others.</strong> Please be mindful of the privacy of
                others and don’t post anything that reveals someone’s personal
                information such as their full name, phone number, email or residential
                address, social security or credit card number, other member’s photos or
                any other information without their consent.
            </li>
            <li className='conduct-list'>
            <strong>8. Don’t shame others.</strong> This can take many forms, but we tend to recognize it
            when we see it. For example, please don’t refer to someone else as “fat”.
            There’s no place for the f-word around here except when describing foods,
            when it tends to be saturated or unsaturated!
            </li>
            <li className='conduct-list'>
                <strong>9. Don’t try to “fix” someone else’s issue.</strong> Community members are here to
                listen, help, support and provide advice to a requesting member when
                asked.  Not to fix -- that’s the requesting member’s domain. Passionate
                about a belief? Make your point, then let the requestor run with it if they
                choose. If they don’t respond to your recommendation or commentary,
                that’s okay. Be respectful.
            </li>
        </div>
    )
}

export default Conduct;