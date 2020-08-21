import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import './SuccessModal.scss' 
import { useMediaQuery } from 'react-responsive';

function SuccessModal(props) {
  const [showSuccessModal, setShowSuccessModal] = useState(true),
        isSmall = useMediaQuery({ query: '(max-width: 768px)'});

  //load timeout
//   useEffect(() => {
//     const modalTimer = setTimeout(() => {
//         setShowSuccessModal(false);
//     }, 1500);
    
//     return () => {clearTimeout(modalTimer)}
//   }, []);

  return (
    <div className='success-modal'>
        <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
            <Modal.Body>
                <div className='modal-message'>
                    <span className='success-icon' style={{color: 'green'}}>    
                        <IoMdCheckmarkCircle size='lg'/>
                    </span>
                    <span className='success-message'>
                        {isSmall ? 
                            'Success' :
                            props.message
                        }
                    </span>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default SuccessModal;