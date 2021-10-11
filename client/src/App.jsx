import React, {useState, useEffect} from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import DummyData from './Dummy/DummyData'
import Signin from "./Views/Modals/Signin/SignIn"
import Signup from "./Views/Modals/Signup/SignUp"
import MyPage from './Views/Modals/Mypage/MyPage'
import { Switch, Route } from 'react-router-dom';


function App() {
const [dummy, setDummy] = useState([])
const [isLogin, setIsLogin] = useState(false);

useEffect(() => {
  handleDummy()
  setIsLogin(true)
}, [])

const handleDummy = () => {
  const filter = DummyData.filter((el) => el.url)
  setDummy(filter)
}

  return (
    <React.Fragment>
      <Switch>
          <MyPage></MyPage>
          <Signup></Signup>
          <Signin></Signin>
      </Switch>
      <LocalPage dummy={dummy}></LocalPage>
      <PostPage dummy={dummy}></PostPage>
    </React.Fragment>
  );
}

export default App;
