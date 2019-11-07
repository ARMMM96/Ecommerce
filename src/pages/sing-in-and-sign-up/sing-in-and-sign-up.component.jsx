import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sing-up/sing-up.component';

import './sing-in-and-sign-up.styles.scss';

const SingInandSingUpPage = () => (
    <div className='sing-in-and-sing-up'>
            Sing In
        <SignIn/>
        <SingUp />

    </div>
)

export default SingInandSingUpPage;


