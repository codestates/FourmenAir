import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PostComments } from './postcomments';

const BORDER_DEV = ``;

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
    width: 1200px;
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
      /* 폰트 설정 */
      font-size: 20px;
      font-weight: 800;
      line-height: 50px;
    }
  }

  > .post__container__bottom__inputbox {
    border: ${BORDER_DEV};
    position: relative;
    width: 1200px;
    height: 100px;
    /* 배경 설정 */
    background-color: #e5e5e5;
    > input {
      display: inline-block;
      position: absolute;
      top: 30px;
      left: 30px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 1020px;
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
      background-color: #525252;
      font-size: 16px;
      font-weight: 700;
      color: white;
      width: 100px;
      height: 49px;
    }
  }
`;

export const PostBottom = () => {
  /* state 선언부 */
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* data fetch */
  const COMMENT_DATA_URL = `https://jsonplaceholder.typicode.com/comments`;
  useEffect(() => {
      setIsLoading(true);
      axios.get(COMMENT_DATA_URL)
      .then(res => {
          setCommentData(res.data.slice(0, 30));
          setIsLoading(false);
      })
      .catch(err => {
          console.log(`코멘트 데이터를 받아 오는데 실패했습니다.`);
      });
  }, []);

  return (
    <PostBottomWrapper>
      <div className="post__container__bottom__title">
        <h2>현재 댓글</h2>
        <span>{!isLoading ? `${commentData.length}개` : `0개`}</span>
      </div>
      <div className="post__container__bottom__inputbox">
        <input type="text" placeholder="댓글을 달려면 로그인하세요."></input>
        <button>등록하기</button>
      </div>
      <PostComments isLoading={isLoading} commentData={commentData}></PostComments>
    </PostBottomWrapper>
  )
};