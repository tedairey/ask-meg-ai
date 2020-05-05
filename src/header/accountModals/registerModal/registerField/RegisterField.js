import React, { Component } from 'react';
import './RegisterField.scss';

class RegisterField extends Component {
    constructor(props){
        super(props) 
        this.state = {
            
        }
        this.err = React.createRef();
        this.fieldbox = React.createRef();
    }

    onFieldChange = (event) => {
        this.setState({field: event.target.value})
    }

    clearFieldErr = () => {
        this.err.current.style.display = 'none';
        this.fieldbox.current.style.borderColor = 'grey';
    }

    validateField = () => {
        this.props.validateField(this.state.field, this.err.current, this.fieldbox.current);
    }

    showFieldErr = () => {
        if (!this.state.field) {
            this.err.current.style.display = 'block';
            this.fieldbox.current.style.borderColor = 'red';
        }
    }

    render(){
        return (
            <span className='register-field'>
                <span className='error-msg' ref={this.err}>
                    {this.props.errormsg}
                </span>
                <span ref={this.fieldbox} className='account-input'>
                    <input value={this.state.field} placeholder={this.props.placeholder} 
                        onBlur={this.validateField} onChange={this.onFieldChange} 
                        onFocus={this.clearFieldErr} type={this.props.isPassword}/>
                </span>
            </span>
        );
      }
  }
  
export default RegisterField;