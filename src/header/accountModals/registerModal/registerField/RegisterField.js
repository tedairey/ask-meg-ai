import React, { useRef, useState } from 'react';
import './RegisterField.scss';

function RegisterField(props) {
    
    const err = useRef(),
        [field, setField] = useState(''),
        fieldbox = useRef();

    const onFieldChange = (event) => {
        setField(event.target.value);
    }

    const clearFieldErr = () => {
        err.current.style.display = 'none';
        fieldbox.current.style.borderColor = 'grey';
    }

    const validateField = () => {
        props.validateField(field, err.current, fieldbox.current);
    }

    const showFieldErr = () => {
        if (!field) {
            err.current.style.display = 'block';
            fieldbox.current.style.borderColor = 'red';
        }
    }

    return (
        <span className='register-field'>
            <span className='error-msg' ref={err}>
                {props.errormsg}
            </span>
            <span ref={fieldbox} className='account-input'>
                <input value={field} placeholder={props.placeholder} 
                    onBlur={validateField} onChange={onFieldChange} 
                    onFocus={clearFieldErr} type={props.isPassword}/>
            </span>
        </span>
    );
}
  
export default RegisterField;