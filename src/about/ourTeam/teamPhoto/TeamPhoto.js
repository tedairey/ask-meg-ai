import React, { useEffect, useRef, useState } from 'react';
import './TeamPhoto.scss';

function TeamPhoto(props) {

    const [isLoaded, setIsLoaded] = useState(true),
    memberPhoto = useRef();

    useEffect(() => {
        if (memberPhoto.current && memberPhoto.current.complete) {
            handleImageLoad();
        }
    });

    const handleImageLoad = () => {
        if (!isLoaded) {
            console.log('image loaded');
            setIsLoaded(true);
        }
    }

    return (
        <div className='team-photo'>
            {!isLoaded ? 
                <div className='text-center'>
                    <div className='spinner-grow' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div> : <>
                <img ref={memberPhoto} className='member-photo' onLoad={handleImageLoad} src={props.member.photo}/>
                <div className='overlay'>
                    <div className='member-name'>
                        {props.member.name}
                    </div>
                    <div className='member-info'>
                        {props.member.info}
                    </div>
                </div>
            </>}
        </div>
    );
}

export default TeamPhoto;