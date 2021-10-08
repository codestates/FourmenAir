import { useState, useEffect } from 'react';
import styled from 'styled-components';

const MAIN_IMAGE_URL = `https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/182987501_5999510240062998_2076716690229217986_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=UufOJKTeE_UAX9guidr&_nc_ht=scontent-ssn1-1.xx&oh=c68c1961374c243637aba7ed6ea6511f&oe=6185B8A8`;
const MAIN_CONTENT_TEXT = `한국의 지베르니라고 불리는 낙강물길공원은 안동 비밀의 숲이라고도 불린다. 호수를 바라보며 즐기는 혼크닉은 어느 카페 부럽지 않다. 곳곳에 숨어있는 포토존에서 사진을 찍으면 마치 모네가 된 듯한 환상을 가져다준다. 숲속 쉼터를 지나 조금만 더 오르면 안동루로 오르는 계단을 만날 수 있고, 그곳에서는 안동댐을 한눈에 내려다볼 수 있다.`;
const BORDER_DEV = ``;

const PostTopWrapper = styled.div`
  /* 박스 설정 */
  border: ${BORDER_DEV};
  padding: 16px;
  min-height: 500px;
  height: auto;
  
  > .post__container__top__profile {
    /* 박스 설정 */
    border: ${BORDER_DEV};
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    width: 1200px;
    height: 100px;
    /* 배경 설정 */
    background-color: #f0f1fa;

    > .post__container__top__profile__image {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 30px;
      width: 80px;
      height: 80px;
    }
    > .post__container__top__profile__id {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 120px;
      width: 120px;
      height: 20px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 800;
      line-height: 20px;
    }
    > .post__container__top__profile__time {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 40px;
      left: 120px;
      width: 120px;
      height: 20px;
    }
    > .post__container__top__profile__local {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 70px;
      left: 120px;
      width: 120px;
      height: 20px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    > .post__container__top__profile__title {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 30px;
      width: 910px;
      height: 80px;
      /* 폰트 설정 */
      font-weight: 800;
      color: #333;
      font-size: 36px;
      line-height: 80px;
    }
  }

  > .post__container__top__main {
    /* Grid 설정 */
    display: grid;
    justify-items: center;
    /* 박스 설정 */
    border: ${BORDER_DEV};
    padding: 25px 0px 25px 0px;
    width: 1200px;
    min-height: 800px;
    height: auto;

    > .post__container__top__main__image {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      border-radius: 10px;
      margin-bottom: 25px;
      max-width: 95%;
      min-height: 400px;
    }
    > .post__container__top__main__content {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      width: 1140px;
      min-height: 500px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }
  }
`;

 const PostTop = () => {
  return (
      <PostTopWrapper>
        <div className="post__container__top__profile">
          <img className="post__container__top__profile__image" src="test" alt="프로필 사진 100px * 100px"></img>
          <span className="post__container__top__profile__id">관리자</span>
          <span className="post__container__top__profile__time">2021-10-07 16:53</span>
          <span className="post__container__top__profile__local">서울</span>
          <span className="post__container__top__profile__title">동대문디자인플라자(DDP)</span>
        </div>
        <div className="post__container__top__main">
          <img className="post__container__top__main__image" src={MAIN_IMAGE_URL} alt="메인 이미지" ></img>
          <div className="post__container__top__main__content">{MAIN_CONTENT_TEXT}</div>
        </div>
      </PostTopWrapper>
  );
}


export default PostTop