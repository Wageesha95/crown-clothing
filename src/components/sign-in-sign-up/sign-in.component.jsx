import React from 'react';

import './sign-in.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I allready have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FromInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange} value={this.state.password}
                        label='password'
                        required
                    />
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {''}
                    Sign inwith Google {''} </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;