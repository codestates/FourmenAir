import React from 'react';
import styled from 'styled-components'; 
import MyPage from '../../../Modals/MyPage';
import SignIn from '../../../Modals/SignIn';
import SignUp from '../../../Modals/SignUp';

// header 공통
const HeaderContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

const Navbar = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 8px 12px;
`;

const NavbarLogo = styled.div`
display: flex;
font-size: 24px;
    > img {
    display: inline-block;
    width: 25px;
    height: 25px;
    }
    > a {
    display: inline-block;
    color: black;
    font-weight: bold;
    margin-left: -200px;
    margin-bottom: 7px;
    cursor: pointer;
    }
`;

const NavbarMenu = styled.div`
    display: flex;
    list-style: none;
    padding-left: 0;
    color: black;
    font-size: 24px;
    font-weight: bold;
   
  > li {
    padding: 8px 12px;
    color: black;
    cursor: pointer;
    margin-right: 100px;
    }
  > li:last-child{
      margin-right: 150px;
  }
`;

const NavbarIcons = styled.div`
  display: flex;
  list-style: none;
  padding-left: 0;
  > button {
      font-size: 18px;
      background-color: #fff;
      padding: 8px 12px;
      color: #fff;
      border: 1px solid #616161;
      border-radius: 8px;
      background-color: #404f77;
      margin-right: 15px;
      cursor: pointer;
  }
  > button:last-child{
      margin-right: 0;
      background-color: #000023;
      color: #fff;
  }
`;

const Header = ({mainDummy, isLogin}) => {
    return (
    <HeaderContainer>
        <Navbar>
            <NavbarLogo>
                {mainDummy.map((el, i) => {
                    return <img key={i} src={el.mainurl} />
                })}
            </NavbarLogo>
            <NavbarLogo>
                <a>FourmenAir</a>
            </NavbarLogo>
            <NavbarMenu>            
                <li>Home</li>
                <li>Local</li>
            </NavbarMenu>

            <NavbarIcons>
                {isLogin === false ? (
                    <>
                    <SignIn />
                    <SignUp />
                    </>
                ) : (
                    <>
                    <MyPage />
                    <button>Log out</button>    
                    </>
                )}
                
            </NavbarIcons>
        </Navbar>
    </HeaderContainer>
    )
}




export default Header;