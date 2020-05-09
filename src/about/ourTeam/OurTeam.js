import React, { useEffect, useState } from 'react';
import './OurTeam.scss';
import TeamPhoto from './teamPhoto/TeamPhoto';
import TeamInfo from './teamInfo/TeamInfo.json';

function OurTeam() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const members = [];
        for (const member of TeamInfo.teamInfo) {
            members.push(<TeamPhoto member={member}/>);
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