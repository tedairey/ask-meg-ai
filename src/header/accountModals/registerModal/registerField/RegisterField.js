import React, { Component } from 'react';
import './RegisterField.css';

class RegisterField extends Component {
    constructor(props){
        super(props) 
        this.state = {
            
        }
    }

    onFieldChange = (event) => {
        this.setState({field: event.target.value})
    }

    clearFieldErr = () => {
        this.refs.err.style.display = 'none';
        this.refs.fieldbox.style.borderColor = 'grey';
    }

    validateField = () => {
        this.props.validateField(this.state.field, this.refs.err, this.refs.fieldbox);
    }

    showFieldErr = () => {
        if (!this.state.field) {
            this.refs.err.style.display = 'block';
            this.refs.fieldbox.style.borderColor = 'red';
        }
    }

    render(){
        return (
            <span className='register-field'>
                <span className='error-msg' ref='err'>
                    {this.props.errormsg}
                </span>
                <span ref='fieldbox' className='account-input'>
                    <input value={this.state.field} placeholder={this.props.placeholder} 
                        onBlur={this.validateField} onChange={this.onFieldChange} 
                        onFocus={this.clearFieldErr} type={this.props.isPassword}/>
                </span>
            </span>
        );
      }
  }
  
export default RegisterField;