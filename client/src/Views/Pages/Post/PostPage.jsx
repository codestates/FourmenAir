import React, {useState, useEffect} from 'react'
import DummyData from '../../../Dummy/DummyData'
import Header from './Components/Header';
import PostTop from './Components/PostTop';
import PostBottom from './Components/PostBottom';
import Footer from './Components/Footer';
import axios from "axios"

axios.defaults.baseURL = `http://ec2-13-124-229-42.ap-northeast-2.compute.amazonaws.com`;
axios.defaults.withCredentials = true;

const Post = ({match}) => {
  const postId = match.params.id;
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* 더미 데이터 코드 */
  const [mainDummy, setMainDummy] = useState([])
  const handleDummy = () => {
    const filtered = DummyData.filter((el) => el.mainurl)
    setMainDummy(filtered)
  }
  useEffect(() => {
    handleDummy()
  }, [])

  /* data fetch */
  useEffect(async () => {
    await fetchPostData();
    await fetchCommentData();
    await confirmUserLogin();
  }, []);

  const fetchPostData = async () => {
    const URL = `/post:${postId}`;
    const OPTION = {};

    setIsLoading(true);
    let response = null;
    try {
      response = await axios.get(URL, OPTION);
      setPostData(response.data.data.post);
      setIsLoading(false);
      console.log(`GET ${URL} 요청에 성공했습니다.`);
    } catch(error) {
      response = error.response;
      console.log(`GET ${URL} 요청에 실패했습니다.`);
    } finally {
      console.log(response);
    }
  }

  const fetchCommentData = async () => {
    const POST_ID = postId;
    const URL = `/comment?postid=${POST_ID}`;
    const OPTION = {};
    
    let response = null;
    try {
      response = await axios.get(URL, OPTION);
      const parsed = await parseCommentData(response.data.data.comment);
      setCommentData(parsed);
      console.log(`GET ${URL} 요청에 성공했습니다.`);
    } catch(error) {
      response = error.response;
      console.log(`GET ${URL} 요청에 실패했습니다.`);
    }
  };

  const parseCommentData = async (data) => {
    let result = [];
    data.map(el => {
      let template = {
        content: el.content,
        createdAt: el.createdAt,
        writer: el.user.name,
        writerImage: el.user.image,
      };
      result.push(template);
    });
    return result;
  };

  const confirmUserLogin = async () => {
    const URL = `/user/info`;
    const TOKEN = localStorage.getItem('accessToken');
  
    let response = null;
    try {
      response = await axios(URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      localStorage.setItem('accessToken', response.data.data.accessToken);
      setIsLoggedIn(true);
      console.log('GET /user/info 요청에 성공했습니다.');
    } catch(error) {
      response = error.response;
      setIsLoggedIn(false);
      console.log('GET /user/info 요청에 실패했습니다.');
    } finally {
      console.log(response);
    }
  };

  useEffect(()=>{
    console.log('postData', postData);
    console.log('commentData', commentData);
    console.log('isLoggedIn', isLoggedIn);
  }, [postData, commentData])

  return (
  <React.Fragment>
    <Header mainDummy={mainDummy} />
    {!isLoading ?
      <PostTop className="post__container__top" postData={postData}>
      </PostTop>
    : null}
    {!isLoading ?
      <PostBottom className="post__container__bottom" commentData={commentData}>
      </PostBottom>
    : null}
    <Footer />
  </React.Fragment>
  )
};

export  default Post