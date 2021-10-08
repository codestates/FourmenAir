import React from 'react';
import MyPageModal from '../Views/Modals/Mypage/MyPageModal';
import SignInModal from '../../Modals/Signin/SignIn';
import SignUpModal from '../../Modals/Signup/SignUp';
 //test

const Header = (props) => {
    
    return (
        <>
            <SignUpModal />
            <SignInModal />
            <MyPageModal />
        </>
    )

}

export default Header;