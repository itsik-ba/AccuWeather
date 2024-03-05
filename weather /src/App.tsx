import {Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';


const App = () => {
  return (
    <>
  
    <div>
    <NavBar />
    </div>
    
    <Routes>
      <Route path={'/'} element={<Home/>}  />
      <Route path={'/Favorites'} element={<Favorites />} />
    </Routes> 
  
      </>
  );
};

export default App;
