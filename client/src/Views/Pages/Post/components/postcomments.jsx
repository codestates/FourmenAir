import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination } from './postpagination';

const BORDER_DEV = ``;

const PostCommentWrapper = styled.div`
    /* 박스 설정 */
    border: ${BORDER_DEV};
    width: 1200px;
    min-height: 300px;
    max-height: 710px;
    /* Grid 설정 */
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    /* 배경 설정 */
    background-color: #f0f1fa;

    > div {
      position: relative;
      width: 1200px;
      height: 100px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);

      > .post__container__bottom__comment__profileimage {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 30px;
        width: 80px;
        height: 80px;
      }

      > .post__container__bottom__comment__text {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 120px;
        width: 1050px;
        height: 40px;
        font-size: 14px;
        font-weight: 500;
      }

      > .post__container__bottom__comment__id {
        /* 박스 설정 */
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        bottom: 10px;
        left: 120px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        /* 폰트 설정 */
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      > .post__container__bottom__comment__time {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        bottom: 10px;
        left: 230px;
        width: 150px;
        height: 30px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        line-height: 30px;
      }
    }
`;

export const PostComments= ({isLoading, commentData}) => {
    const MAX_COMMENT_IN_PAGE = 5;

    /* state 선언부 */
    const [currentPage, setCurrentPage] = useState(1);

    /* index 설정 */
    const indexOfLast = currentPage * MAX_COMMENT_IN_PAGE;
    const indexOfFirst = indexOfLast - MAX_COMMENT_IN_PAGE;
    const currentComments = commentData.slice(indexOfFirst, indexOfLast);
    
    /* 페이지 클릭 이벤트 핸들러 */
    const handleCurrentPage = (num) => {
      // console.log('handleCurrentPage num', num);
      setCurrentPage(num);
    }

    return (
      <>
      <PostCommentWrapper className="post__container__bottom__comment">
        {!isLoading ? currentComments.map(el =>
          <div>
              <img className="post__container__bottom__comment__profileimage" src="test" alt="프로필 사진 80px * 80px"></img>
              <span className="post__container__bottom__comment__text">{el.body}</span>
              <span className="post__container__bottom__comment__id">{el.name}</span>
              <span className="post__container__bottom__comment__time">2021-10-07 16:32:01</span>
          </div>
        ) : null}
      </PostCommentWrapper>
      {!isLoading ? <Pagination totalComments={commentData.length} maxCommentsInPage={MAX_COMMENT_IN_PAGE} handleCurrentPage={handleCurrentPage}></Pagination> : null}
      </>
    );
};