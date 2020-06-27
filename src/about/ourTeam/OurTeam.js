import React, { useEffect, useState } from 'react';
import './OurTeam.scss';
import TeamPhoto from './teamPhoto/TeamPhoto';
import TeamInfo from './TeamInfo.json';
import { useMediaQuery } from 'react-responsive';

function OurTeam() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const members = [];
        for (const [index, member] of TeamInfo.teamInfo.entries()) {
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