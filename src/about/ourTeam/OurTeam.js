import React, { useEffect, useState } from 'react';
import './OurTeam.scss';
import TeamPhoto from './teamPhoto/TeamPhoto';
import TeamInfo from './TeamInfo.json';
import TeamInfoJS from './TeamInfo.js';

function OurTeam() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const members = [];
        console.log(TeamInfoJS);
        for (const [index, member] of TeamInfoJS.teamInfo.entries()) {
            members.push(<TeamPhoto key={index} member={member}/>);
        }
        setMembers(members);
    },[]);

    return (
        <div className='our-team'>
            <div className='photo-collection'>
                {members}
            </div>
        </div>
    );
}

export default OurTeam;