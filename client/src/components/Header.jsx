import React from 'react';
import MyPageModal from '../modals/MyPageModal';
import SignInModal from '../modals/SignInModal';
import SignUpModal from '../modals/SignUpModal';
 

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