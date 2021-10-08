import React from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import DummyData from './Dummy/DummyData'


function App() {

  return (
    <React.Fragment>
      <LocalPage></LocalPage>
      <PostPage></PostPage>
    </React.Fragment>
  );
}

export default App;
