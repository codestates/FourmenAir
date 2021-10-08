import React from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import DummyData from './Dummy/DummyData'


function App() {
  const [image, setImage] = useState(initialState)

  return (
    <React.Fragment>
      <LocalPage></LocalPage>
    </React.Fragment>
  );
}

export default App;
