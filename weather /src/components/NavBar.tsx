import { Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
     <Link to={"/"} />
     <Link to={"/Favorites"} />
    </nav>
  )
}

export default NavBar