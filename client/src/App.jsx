import React from 'react';
import LandingPage from './Views/Pages/Landing/LandingPage';
import LocalPage from './Views/Pages/Local/LocalPage';
import PostPage from "./Views/Pages/Post/PostPage"
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/local" component={LocalPage}></Route>
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
