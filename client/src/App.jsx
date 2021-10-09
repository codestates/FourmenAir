import React, {useState, useEffect} from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import DummyData from './Dummy/DummyData'


function App() {
const [dummy, setDummy] = useState([])

useEffect(() => {
  handleDummy()
}, [])

const handleDummy = () => {
  const filter = DummyData.filter((el) => el.url)
  setDummy(filter)
}

  return (
    <React.Fragment>
      <LocalPage dummy={dummy}></LocalPage>
      <PostPage></PostPage>
    </React.Fragment>
  );
}

export default App;
