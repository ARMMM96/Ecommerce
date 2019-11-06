import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefult();

        this.setState({ email: '', password: '' })
    };
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    };
    render() {
        return (
            <div className='sign-in'>
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit" > Sigin in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sigin in With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;
