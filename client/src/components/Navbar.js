import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <span>Navbar</span>
      <div className="navbar-mid"></div>
      <div className="navbar-nav">
        <NavLink exact to="/" activeClassName="active" className="navbar-navlinks">HOME</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navbar-navlinks">OLD PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navbar-navlinks">ABOUT ME</NavLink>
      </div>
    </div>
  )
}

export default Navbar;