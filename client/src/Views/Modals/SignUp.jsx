import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.75);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
  `;

export const ModalBtn = styled.button`
  background-color: #eee5ec;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: #0a0a0a;
  cursor: pointer;
  `;

export const ModalView = styled.div`
position: relative;
text-align: center;

> div.close_btn {
  margin-top: 5px;
  cursor: pointer;
}

> div.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

> div.box span {
      position: absolute;
      top: 3px;
      right: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    
    > div.box h1 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
      font-size: 30px;
    }
    
    > div.box .inputBox {
      position: relative;
    }

    > div.box .inputBox input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }

    > div.box .inputBox input[type="checkbox"] {
      width: 15px; 
      height: 15px;
      margin-left: -90px;
    }

    > div.box .inputBox label {
      position: absolute;
      top: 0;
      left: 0;
      letter-spacing: 1px;
      padding: 10px 0;
      font-size: 18px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }

    > div.box .inputBox input:valid ~ label {
        top: -18px;
        left: 0;
        color: #03a9f4;
        font-size: 12px;
      }
    > div.box .register {
      color: #03a9f4;
    }
    
    > div.box input {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      background: #03a9f4;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 15px;
      margin-bottom: 20px;
    }

    > div.box input:last-child{
      margin-right: 0;
    }

    > div.box a {   
      color: #fff;
      margin-left: 2%;
    }

`;

const SignUpModal = () => {
  
  
  const [userinfo, setuserinfo] = useState({
    email: '',
    name: '',
    password: '',    
    mobile: '',
    gender:''
  });
  const [errorMessage, setErrorMessage] = useState('');
  

  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  



  const handleSignup = () => {   
    
    const {email, name, password, mobile, gender} = userinfo

    if(email === '' || name === '' || password === '' || mobile === '' || gender === '') {
      setErrorMessage('모든 항목은 필수입니다')
    }
    else {
    axios.post('https://localhost:4000/signup', 
    { email, name, password, mobile, gender }, 
    { withCredentials: true }
    )
    .then((res) => {
      history.push("/");
    })
    .catch((err) => console.log(err))  
  }
};
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'sign up' : 'sign up'}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop>
          <ModalView>
          <div className='box'>
          <span onClick={openModalHandler} className='close-btn'>&times;</span>
          <h1 align="center">Sign Up</h1>
          <form role="form" method="post">
      
          <div class="inputBox">
            <input type="email" name="email" autocomplete="off" required 
            onChange={handleInputValue('email')}
            />
            <label>email</label>
          </div>
            <div class="inputBox">
              <input type="text" name="text" autocomplete="off" required 
              onChange={handleInputValue('name')}
              />
              <label>Name</label>
            </div>

            <div class="inputBox">
              <input type="password" name="password" autocomplete="off" required 
              onChange={handleInputValue('password')}              
              />
              <label>Password</label>              
            </div>   

            <div class="inputBox">
              <input type="tel" name="tel" autocomplete="off" required 
              onChange={handleInputValue('mobile')}
              />
              <label>Phone Number</label>
            </div>  
            
            <div class="inputBox">
              <input type="checkbox" id='scales' name="scales" autocomplete="off" required 
              onChange={handleInputValue('gender')}
              />
              <label for="scales">male</label>
            </div> 
            
            <div class="inputBox">
              <input type="checkbox" id='scales' name="scales" autocomplete="off" required 
              onChange={handleInputValue('gender')}
              />
              <label for="scales">female</label>
            </div>
            <input type="submit" name="회원가입" value="OK"  onClick={handleSignup}/>       
          </form>
          </div>
          </ModalView>
        </ModalBackdrop> : null}
    </>
  );
  };
 
 export default SignUpModal;