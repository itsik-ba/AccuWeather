import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="lg:w-full flex space-x-72 py-4 px-8 ">
      <div>ICON</div>
      <div>@light/dark</div>
      <div>
      <Link to="home">Home</Link>
      <Link to="Favorites">Favorites</Link>
      </div>
     
    </div>
    // #a0d2eb
  )
}

export default NavBar