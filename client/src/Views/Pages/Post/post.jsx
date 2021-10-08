import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PostTop } from './components/posttop';
import { PostBottom } from './components/postbottom';

const BORDER_DEV = ``;

const PostContainer = styled.div`
  width: 1240px;
  height: auto;
  padding: 4px;
  border: ${BORDER_DEV};
`;

export const Post = () => {
    return (
    <PostContainer className="post__container">
      <PostTop className="post__container__top">
      </PostTop>
      <PostBottom className="post__container__bottom">
      </PostBottom>
    </PostContainer>
    )
};