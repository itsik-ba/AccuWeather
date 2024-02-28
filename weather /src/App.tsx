

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <>
     <NavBar />
   
   
     
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Favorites" element={<Favorites/>} />
        </Routes>
     
      </>
  );
};

export default App;
