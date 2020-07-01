import React from 'react';
import './TipsAndHints.scss';

function TipsAndHints() {
    return (
        <div id="tips-and-hints">
            <div id="successful-logging">
                <h4>Successful logging</h4>
                <p className='FAQ-prompt'>
                    Meg responds to the use of a verb. You’ll recall verbs are “action words”. 
                    So, when you say “I ate”, “I drank”, “I had” or “I ran”, “I swam” or “I weighed” 
                    she is designed to go efficiently into a logging mode to record your data. If you 
                    only use a noun, as in “I cup of cereal” you are asking Meg to guess if you want 
                    her to log that you ate a cup of cereal or that you want its nutrition content or 
                    score or something else.
                </p>
            </div>
            <div id="word-strings-or-logging-multiple-items">
                <h4>Word strings or logging multiple items</h4>
                <p className='FAQ-prompt'>
                    You can log multiple items in a sentence with Meg. So, for example, you can say 
                    “for breakfast today I ate steel cut oats with ½ cup of milk, a chopped apple, a 
                    few raisins and a dash of cinnamon”. Meg will process the foods and ask you to confirm it.
                </p>
            </div>
            <div id="additional-items-to-log-i-also-had-fries">
                <h4>Additional items to log “I also had fries”</h4>
                <p className='FAQ-prompt'>
                    Sometimes it can be hard to log everything at once. That’s why when Meg says 
                    “shall I log that for you” you can add an item (even if it is fries!) by saying 
                    “I also had fries” or “I had fries as well”.
                </p>
            </div>
            <div id="voice-interaction-protocol-aka-how-the-microphone-works">
                <h4>Voice interaction protocol (aka, how the microphone works)</h4>
                <p className='FAQ-prompt'>
                    When Meg is talking, the microphone icon is set to an outline form. When she 
                    finishes talking, the microphone icon will turn solid green. At this point, 
                    she is listening to you. To turn the microphone off, tap the icon and it will 
                    revert to outline form. For Meg to hear you, the microphone has to be set to green fill. 
                    When you are talking the microphone icon turns red.
                </p>
            </div>
            <div id="can-i-interrupt-when-meg-is-speaking">
                <h4>Can I interrupt when Meg is speaking?</h4>
                <p className='FAQ-prompt'>
                    Currently no. Well, more accurately you can but the results will be unsatisfactory. 
                    Now you know this from real-life right? Need we say more?
                </p>
            </div>
            <div id="why-does-meg-spell-words-incorrectly">
                <h4>Why does Meg spell words incorrectly?</h4>
                <p className='FAQ-prompt'>
                    We use the voice to text functionality built into an iPhone (think “Siri”). Apple 
                    constructs Siri’s voice translation for most common usage. As a result, when you say 
                    a food like “cereal”, or describe your gender as “male”, Siri can translate this as 
                    “serial” and “mail”. Most of these are corrected when we process your inputs (we change 
                    “serial” back to “cereal” and “mail” back to “male”) but if you see something that’s 
                    not right, just say “Feedback” and tell Meg and we’ll get on it.
                </p>
            </div>
        </div>
    );
}

export default TipsAndHints;