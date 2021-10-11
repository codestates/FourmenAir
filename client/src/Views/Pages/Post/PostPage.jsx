import React, { useState, useEffect } from 'react';
import PostTop from './Components/PostTop';
import PostBottom from './Components/PostBottom';
import Footer from './Components/Footer';

const Post = ({isLoggedIn, postData, accessToken, dummy}) => {
  return (
  <React.Fragment>
    <PostTop className="post__container__top" postData={postData} dummy={dummy}>
    </PostTop>
    <PostBottom className="post__container__bottom" isLoggedIn={isLoggedIn} accessToken={accessToken}>
    </PostBottom>
    <Footer />
  </React.Fragment>
  )
};

export  default Post