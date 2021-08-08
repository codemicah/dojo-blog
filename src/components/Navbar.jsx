import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    color: "#f1356d",
  };

  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <NavLink to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/blogs/create" activeStyle={activeStyle}>
          New Post
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
