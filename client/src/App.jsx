<<<<<<< HEAD
import './App.css';
import Header from './components/Header';
import Footer from "./Footer"
=======
import React from 'react';
import LocalPage from './Views/Pages/Local/LocalPage';
import DummyData from './Dummy/DummyData'

>>>>>>> 88bc559e5dced56f75b3afc54f71ff1c79972f8e

function App() {
  const [image, setImage] = useState(initialState)

  return (
<<<<<<< HEAD
  <>
    <Header></Header>
    <Footer></Footer>
  </>
     );
=======
    <React.Fragment>
      <LocalPage></LocalPage>
    </React.Fragment>
  );
>>>>>>> 88bc559e5dced56f75b3afc54f71ff1c79972f8e
}

export default App;
