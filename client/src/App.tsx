import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"




function App() {
  

  return (
    <>
      <div className="flex justify-center">
      <NavBar />
      </div>
     <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="Favorites" element={<Favorite />}/> 
     </Routes>
    </>
  )
}

export default App
