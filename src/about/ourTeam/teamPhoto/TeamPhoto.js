import React, { useEffect } from 'react';
import './TeamPhoto.scss';

function TeamPhoto(props) {

    return (
        <div className='team-photo'>
            <img className='member-photo' src={props.member.photo}/>
            <div className='overlay'>
                <div className='member-name'>
                    {props.member.name}
                </div>
                <div className='member-info'>
                    {props.member.info}
                </div>
            </div>
        </div>
    );
}

export default TeamPhoto;