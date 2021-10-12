import { useState } from 'react';
import styled from 'styled-components';
import PostComments from './PostComments';

const BORDER_DEV = ``;

const PostBottomContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const PostBottomWrapper = styled.div`
  border: ${BORDER_DEV};
  padding: 5px;

  justify-self: stretch;
  align-self: stretch;

  display: grid;
  justify-content: center;
  align-content: start;

  > .post__container__bottom__title {
    border: ${BORDER_DEV};
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    position: relative;
    width: 100%;
    height: 80px;
    > h2 {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 30px;
      border: ${BORDER_DEV};
      width: 100px;
      height: 50px;
      /* 폰트 설정 */
      font-size: 20px;
      font-weight: 800;
      line-height: 50px;
    }
    > span {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 140px;
      border: ${BORDER_DEV};
      width: 50px;
      height: 50px;
      color: #0a97cd;
      margin-left: -20px;
      /* 폰트 설정 */
      font-size: 20px;
      font-weight: 800;
      line-height: 50px;
    }
  }

  > .post__container__bottom__inputbox {
    border: ${BORDER_DEV};
    position: relative;
    width: 100%;
    height: 100px;
    /* 배경 설정 */
    background-color: #edeef2;
    > input {
      display: inline-block;
      position: absolute;
      top: 30px;
      left: 30px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(255, 255, 255, 0.8);
      width: 1120px;
      height: 43px;
      font-size: 16px;
      padding: 2px 5px 2px 5px;
    }
    > button {
      display: inline-block;
      position: absolute;
      top: 30px;
      right: 30px;
      border: 1px solid #454545;
      background-color: #13294b;
      font-size: 16px;
      font-weight: 700;
      color: white;
      width: 110px;
      height: 49px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const PostBottom = ({commentData, isLoggedIn = true}) => {
  /* state 선언부 */
  const [commentValue, setCommentValue] = useState('');

  /* data submit */
  const handleCommentValue = (e) => {
    console.log('댓글을 입력하셨습니다.', e.target.value);
    setCommentValue(e.target.value);
  };

  const COMMENT_SUBMIT_URL = `https://jsonplaceholder.typicode.com/comments`;
  const handleSubmitComment = () => {
    // console.log('등록하기 버튼을 누르셨습니다.');
    // axios.post(COMMENT_SUBMIT_URL, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     "Content-Type": "application/json",
    //   },
    //   withCredentials: true,
    //   body: {
    //     body: commentValue,
    //     postid: '',
    //     email: '',
    //   },
    // }).then(res => {
    //   console.log(`CODE: ${res.status} 댓글을 성공적으로 등록했습니다.`);
    // }).catch(err => {
    //   console.log('댓글을 등록하는데 실패했습니다.');
    // });
  };

  return (
    <PostBottomContainer>
    <PostBottomWrapper>
      <div className="post__container__bottom__title">
        <h2>현재 댓글</h2>
        <span>{commentData.length}</span>
      </div>
      <div className="post__container__bottom__inputbox">
        {!isLoggedIn ? <input type="text" placeholder="댓글을 달려면 로그인하세요." disabled></input> : <input type="text" onChange={handleCommentValue}></input>}
        {!isLoggedIn ? <button>로그인</button> : <button onClick={handleSubmitComment}>등록하기</button>}
      </div>
      <PostComments commentData={commentData}></PostComments>
    </PostBottomWrapper>
    </PostBottomContainer>
  )
};

export default PostBottom