import { NavLink } from "react-router-dom";
import { useStoreContext } from './GlobalStore';

function Navbar() {
  
  const [store] = useStoreContext();

  if (store.winX > 980) return(
    <div className="navbar">
      <span>JingChang Xiao</span>
      <div className="navbar-mid"></div>
      <div className="navbar-nav">
        <NavLink exact to="/" activeClassName="active" className="navlinks">HOME</NavLink>
        <NavLink to="/demos" activeClassName="active" className="navlinks">DEMOS</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navlinks">PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navlinks">ABOUT ME</NavLink>
      </div>
    </div>
  )
  else return(
    <>
      <div className="navbar">
        <span>JingChang Xiao</span>
        <div className="navbar-mid"></div>
        <div className="navbar-nav">
          NAVIGATION &gt;&gt;
        </div>
      </div>
      <div className="nav-side hidden">
        <NavLink exact to="/" activeClassName="active" className="navlinks">HOME</NavLink>
        <NavLink to="/demos" activeClassName="active" className="navlinks">DEMOS</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navlinks">PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navlinks">ABOUT ME</NavLink>
      </div>
    </>
  )
}

export default Navbar;