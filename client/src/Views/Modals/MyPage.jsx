import { useState, useEffect } from 'react';
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
  cursor: grab;
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

    > div.box > span {
      position: absolute;
      top: 3px;
      right: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    > div.box h1 {
      margin: 0 auto;
      padding-bottom: 15px;
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
      margin-left: -40px;
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

    > div.box .imageBox {
      border: 0;
      top: 0;
      padding: 10px 0 50px 0;
      margin: 0 auto;
      width: 100px;
      height: 100px;

    > label {
        display: block;
        color: #03a9f4;
        pointer-events: none;
        margin-left: -20px;
      }
    > img {
        display: block;
        border: 1px solid black;
        background-color: white;
        margin-top: 5px;
      }
    > input {
        width: 100px;
        height: 100px;
        cursor: pointer;
        position: absolute;
        left: 50px;
        top: 110px;
        opacity: 0;
      }
    }

    > div.box .vaildCheck {
      top: 0;
      > span {
        display: inline-block;
        left: 0;
        color: #fff;
        font-size: 16px;
        transition: all 0.5s ease-out;
      }
      .span1 {
        margin-top: -20px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span2 {
        padding-top: -50px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span3 {
        margin-top: -20px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span4 {
        margin-top: -50px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
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
      margin-right: 20%;
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

 const MyPageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const initialValue = {
    email: "",
    name: "",
    mobile: "",
    image: "",
    password: "",
    passwordCheck: "",
  };
  const [modifiedUserInfo, setModifiedUserInfo] = useState(initialValue);
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isVaildPassword, setIsVaildPassword] = useState(true);
  const [isVaildMobile, setIsVaildMobile] = useState(true);
  const [isVaildName, setIsVaildName] = useState(true);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
       console.log('Error: ', error);
    };
  }

  const inputUserInfoHandler = (e, tag) => {
    const inputValue = e.target.value;
    if (tag === 'name') {
      const newValue = {...modifiedUserInfo, name: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'mobile') {
      const newValue = {...modifiedUserInfo, mobile: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'password') {
      const newValue = {...modifiedUserInfo, password: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'passwordCheck') {
      const newValue = {...modifiedUserInfo, passwordCheck: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'image') {
      let img = e.target.files[0];
      let base64Encoded = '';
      getBase64(img, (result) => {
        base64Encoded = result;
        const newValue = {...modifiedUserInfo, image: base64Encoded};
        setModifiedUserInfo(newValue);
      });
    }
  };

  const imageUploadHandler = (e) => {
    console.log(e.target.value);
  }

  const vaildMobileCheck = (input) => {
    const pattern = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return pattern.test(input);
  };

  const vaildNameCheck = (input) => {
    const pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\s]{2,10}$/;
    return pattern.test(input);
  };

  const vaildPasswordCheck = (input) => {
    const pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{4,15}$/;
    return pattern.test(input);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log('제출 버튼을 누르셨습니다.');
    console.log('다음의 정보가 전달됩니다.', modifiedUserInfo);

    console.log('유저 데이터 전송을 시작합니다.');
    setSubmitEnabled(false);
    setIsLoading(true);

    const USER_INFO_SEND_URL = ``;
    const DATA = {
      email: modifiedUserInfo.email,
      name: modifiedUserInfo.name,
      image: modifiedUserInfo.image,
      mobile: modifiedUserInfo.mobile,
      password: modifiedUserInfo.password,
    };
    const OPTION = {};
    axios.post(USER_INFO_SEND_URL, DATA, OPTION)
    .then(res => {
        console.log(`유저 데이터를 성공적으로 전송했습니다.`);
        setSubmitEnabled(true);
        setIsLoading(false);
    })
    .catch(err => {
        console.log(`유저 데이터를 전송하는데 실패했습니다.`);
    });
  }

  useEffect(() => {
    let delay;
    if (delay) clearTimeout(delay);
    delay = setTimeout(() => {
      if (modifiedUserInfo.password === '' && modifiedUserInfo.passwordCheck === '') {
        console.log('비밀번호 칸이 비어있습니다.');
        setIsPasswordEmpty(true);
      } else {
        console.log('비밀번호 칸이 비어있지 않습니다.');
        setIsPasswordEmpty(false);
      }

      if (modifiedUserInfo.password === modifiedUserInfo.passwordCheck) {
        console.log('비밀번호가 일치합니다.');
        setIsPasswordMatched(true);
      } else {
        console.log('비밀번호가 일치하지 않습니다.');
        setIsPasswordMatched(false);
      }

      if (vaildPasswordCheck(modifiedUserInfo.password)) {
        console.log('형식에 맞는 비밀번호입니다.')
        setIsVaildPassword(true);
      } else {
        setIsVaildPassword(false);
      }

      if (vaildNameCheck(modifiedUserInfo.name)) {
        console.log('형식에 맞는 이름입니다.')
        setIsVaildName(true);
      } else {
        setIsVaildName(false);
      }

      if (vaildMobileCheck(modifiedUserInfo.mobile)) {
        console.log('형식에 맞는 전화번호입니다.')
        setIsVaildMobile(true);
      } else {
        setIsVaildMobile(false);
      }
    }, 1000);
  }, [modifiedUserInfo]);

  useEffect(() => {
    if (isPasswordMatched && isVaildPassword && isVaildName && isVaildMobile) {
      console.log('!! 제출 버튼 활성화됨 !!');
      setSubmitEnabled(true);
    } else {
      console.log('!! 제출 버튼 비활성화됨 !!');
      setSubmitEnabled(false);
    }
  });

  const DUMMY_DATA = {
    id: "1",
    name: "Tim Cook",
    email: "apple@apple.com",
    mobile: "010-1234-1234",
    gender: "male",
    image: "data:image/png;base64,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",
    updatedAt: "2021-10-09 15:13:01",
    createdAt: "2021-10-09 15:13:01"
  };

  const USER_INFO_URL = `https://jsonplaceholder.typicode.com/user/info`;
  useEffect(() => {
      setIsLoading(true);
      axios.get(USER_INFO_URL)
      .then(res => {
          console.log(`유저 데이터를 받아 오는데 성공했습니다.`);
          // setUserInfo(res.data);
          setUserInfo(DUMMY_DATA);
          setIsLoading(false);
      })
      .catch(err => {
          console.log(`유저 데이터를 받아 오는데 실패했습니다.`);
          /* 테스트용 코드 나중에 제거 */
          const initialValue = {
            email: DUMMY_DATA.email,
            name: DUMMY_DATA.name,
            mobile: DUMMY_DATA.mobile,
            image: DUMMY_DATA.image,
            password: "",
            passwordCheck: "",
          };
          setModifiedUserInfo(initialValue);
          setUserInfo(DUMMY_DATA);
          /* ----------------------- */
      });
  }, [isOpen]);

  return (
    <>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'My Page' : 'My Page'}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop>
          <ModalView>
          <div className='box'>
          <span onClick={openModalHandler} className='close-btn'>&times;</span>
          <h1 align="center">My Page</h1>
          <form role="form" onSubmit={submitButtonHandler}>
      
          <div class="imageBox">
              <label>profile image</label>
              <img src={modifiedUserInfo.image} alt="이미지 100px*100px"></img>
              <input type="file" onChange={(e) => inputUserInfoHandler(e, 'image')} accept="image/*"></input>
            </div>

            <div class="inputBox">
              <input type="text" name="email" autocomplete="off" value={modifiedUserInfo.email} readonly required />
              <label>email</label>
            </div>
            <div class="inputBox">
              <input type="text" name="text" autocomplete="off"  defaultValue={userInfo.name} onChange={(e) => inputUserInfoHandler(e, 'name')} required />
              <label>Name</label>
            </div>

            <div class="vaildCheck">
            {!isVaildName ? <span className="span1">닉네임은 2자 ~ 10자, 영문, 한글, 숫자, 띄어쓰기만 가능합니다.</span> : null}
            </div>

            <div class="inputBox">
              <input type="password" name="password" onChange={(e) => inputUserInfoHandler(e, 'password')} autocomplete="off" required />
              <label>Password</label>
            </div> 
            
            <div class="inputBox">
              <input type="password" name="passwordCheck" onChange={(e) => inputUserInfoHandler(e, 'passwordCheck')} autocomplete="off" required />
              <label>Password Confirm</label>
            </div> 

            <div class="vaildCheck">
              {!isPasswordEmpty && !isPasswordMatched ? <span className="span2">비밀번호가 일치하지 않습니다.</span> : null}
              {!isVaildPassword && isPasswordMatched ? <span className="span3">비밀번호는 4자 이상 15자 이하로 영문, 한글, 숫자만 가능합니다.</span> : null}
            </div>

            <div class="inputBox">
              <input type="tel" name="tel" autocomplete="off" defaultValue={userInfo.mobile} onChange={(e) => inputUserInfoHandler(e, 'mobile')} required />
              <label>Phone Number</label>
            </div>  
            
            <div class="vaildCheck">
              {!isVaildMobile ? <span className="span4">휴대폰 번호가 형식에 맞지 않습니다.</span> : null}
            </div>

            <div class="inputBox" style={{margin: "10px 0"}}>
              <input type="checkbox" id='scales' style={{marginLeft: "-100px", marginBottom: "50px"}} name="scales" autocomplete="off" checked readonly required />
              <label>{userInfo.gender}</label>
            </div> 
            
            <input type="submit" name="login" value="OK" disabled={!submitEnabled} />
            <input type="button" id="btn" value="cancel" onClick={openModalHandler} />
          </form>      
          </div>
          </ModalView>
        </ModalBackdrop> : null}
    </>
  );
  };
 
 export default MyPageModal;