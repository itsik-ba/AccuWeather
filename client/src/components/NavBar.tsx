import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="flex w-full justify-center py-2 bg-fuchsia-400 text-rose-50 font-serif space-x-12 sm:space-x-56 md:space-x-64 md:py-2 lg:space-x-80 lg:text-lg xl:justify-around">
      <div>ICON</div>
      <div>@</div>
      <div className="space-x-10">
      <Link to="home">Home</Link>
      <Link to="Favorites">Favorites</Link>
      </div>
     
    </div>
    // #a0d2eb
  )
}

export default NavBar