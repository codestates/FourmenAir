import React, {useState, useEffect} from 'react';
import Landing from './Views/Pages/Landing/Landing';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import DummyData from './Dummy/DummyData'
import { Switch, Route } from 'react-router-dom';


function App() {
const [dummy, setDummy] = useState([])
const [mainDummy, setMainDummy] = useState([])
const [isLogin, setIsLogin] = useState(false);

useEffect(() => {
  handleDummy()
  // setIsLogin(true) 마이페이지 보고싶을 때!
}, [])

const handleDummy = () => {
  const filter = DummyData.filter((el) => el.url)
  setDummy(filter)

  const filtered = DummyData.filter((el) => el.mainurl)
  setMainDummy(filtered)
}

  return (
    <React.Fragment>
      <Landing mainDummy={mainDummy} isLogin={isLogin} ></Landing>
      <LocalPage dummy={dummy} mainDummy={mainDummy} isLogin={isLogin} ></LocalPage>
      <PostPage dummy={dummy} mainDummy={mainDummy} isLogin={isLogin} ></PostPage>
    </React.Fragment>
  );
}

export default App;
