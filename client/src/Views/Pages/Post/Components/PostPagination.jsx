import { useState, useEffect } from 'react';
import styled from 'styled-components';

const BORDER_DEV = ``;

const PaginationWrapper = styled.ul`
  /* grid 설정 */
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  align-items: center;
  justify-content: center;

  /* 박스 설정 */
  border: ${BORDER_DEV};
  width: 1240px;

  > li {
    border: ${BORDER_DEV};
    > a {
      /* 폰트 설정 */
      font-size: 16px;
      
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Pagination = ({totalComments, maxCommentsInPage, handleCurrentPage}) => {
    const totalPages = [];
    for (let i = 1; i <= Math.ceil(totalComments / maxCommentsInPage); i++) {
        totalPages.push(i);
    }

    // console.log('totalPages', totalPages);
    return (
        <PaginationWrapper>
            {totalPages.map(num => <li><a onClick={() => handleCurrentPage(num)}>{num}</a></li>)}
        </PaginationWrapper>
    );
};

export default Pagination