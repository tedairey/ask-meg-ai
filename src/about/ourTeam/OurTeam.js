import React, { useEffect, useState } from 'react';
import './OurTeam.scss';
import TeamPhoto from './teamPhoto/TeamPhoto';
import TeamInfo from './teamInfo/TeamInfo.json';
import { useMediaQuery } from 'react-responsive';

function OurTeam() {

    const [members, setMembers] = useState([]),
        isSmall = useMediaQuery({ query: '(max-width: 768px)'});

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
            {isSmall && <>
                <div className='mobile-info'>
                    Tap on a picture for more info!
                </div>
            </>}
        </div>
    );
}

export default OurTeam;