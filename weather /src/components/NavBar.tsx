import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{ display: "flex", justifyContent: "center", gap:20 }}
    >
      <Link to={"/"}  />
      Home-Page
      <Link to={"/Favorites"} />
      Favorites
    </nav>
  );
};

export default NavBar;
