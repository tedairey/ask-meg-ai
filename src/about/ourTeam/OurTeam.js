import React from 'react';
import './OurTeam.scss';
import TeamPhoto from './teamPhoto/TeamPhoto';
import TeamInfoJS from './TeamInfo.js';

function OurTeam() {

    const members = TeamInfoJS.teamInfo;

    return (
        <div className='our-team'>
            <div className='photo-collection'>
                {members.map((person, index) => 
                    <TeamPhoto key={index} member={person}/>
                )}
            </div>
        </div>
    );
}

export default OurTeam;