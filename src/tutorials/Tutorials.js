import React, { useEffect, useRef, useContext } from 'react';
import { AppUserContext } from '../context/UserContext';
import './Tutorials.scss';

function Tutorials (props){ 

    const TutorialsRef = useRef(),
        {setIsAppUser} = useContext(AppUserContext);

    useEffect(() => {
		const urlEnd = window.location.pathname;
		if (urlEnd.substring(urlEnd.length-8, urlEnd.length) === 'app-user') {
			setIsAppUser(true);
			TutorialsRef.current.style.marginTop = '-50px';

			return () => {
				setIsAppUser(false);
			}
		}
	}, [])

    return (
        <div className='tutorials' ref={TutorialsRef}>
            <div className='home-image'>
                <iframe src="https://player.vimeo.com/video/456242340" title='tutorial-1' frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
            <div className='home-image'>
                <iframe src="https://player.vimeo.com/video/456242396" title='tutorial-2' frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
            <div className='home-image'>
                <iframe src="https://player.vimeo.com/video/456242710" title='tutorial-3' frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
            <div className='home-image'>
                <iframe src="https://player.vimeo.com/video/456242807" title='tutorial-4' frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
        </div>
    );
}
  
export default Tutorials;