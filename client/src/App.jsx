import React, {useState, useEffect} from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import DummyData from './Dummy/DummyData'


function App() {
const [image, setImage] = useState([])

useEffect(() => {
  handleImage()
}, [])

const handleImage = () => {
  const filter = DummyData.filter((el) => el.url)
  setImage(filter)
}

  return (
    <React.Fragment>
      <LocalPage image={image}></LocalPage>
      <PostPage></PostPage>
    </React.Fragment>
  );
}

export default App;
