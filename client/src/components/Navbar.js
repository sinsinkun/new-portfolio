import { NavLink } from "react-router-dom";
import { useStoreContext } from './GlobalStore';

function Navbar() {
  
  const [store] = useStoreContext();

  return(
    <div className="navbar">
      <span>JingChang Xiao</span>
      <div className="navbar-mid"></div>
      {store.winX > 980 ? 
      <div className="navbar-nav">
        <NavLink exact to="/" activeClassName="active" className="navbar-navlinks">HOME</NavLink>
        <NavLink to="/demos" activeClassName="active" className="navbar-navlinks">DEMOS</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navbar-navlinks">PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navbar-navlinks">ABOUT ME</NavLink>
      </div> : 
      <div className="navbar-nav">
        NAVIGATION &gt;&gt;
      </div>
    }
      
    </div>
  )
}

export default Navbar;