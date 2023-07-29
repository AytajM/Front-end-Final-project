import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [nav, setNav] = useState(false)
  return (
    <header>
      <div className="headeR">
        <div className="navbar container">
          <div className="logo">
          <NavLink to="/" className={"logo_active"}> <img src="/images/Logo.svg" alt="" /></NavLink>
           
          </div>
          <div>
            <div className="menu">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/company">Company</NavLink>
              <NavLink to="/career">Career</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact us</NavLink>
              {/* <NavLink to="/clone" className={"clone_button"}>Clone project <i className="fa-solid fa-arrow-right-long "></i></NavLink> */}
            </div>
          </div>
        </div>
        <div onClick={() => setNav(!nav)}  className="toggle_btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {nav &&  <div className="dropdown_menu">
        <NavLink  onClick={() => setNav(!nav)}  to="/">Home</NavLink>
        <NavLink  onClick={() => setNav(!nav)}  to="/service">Service</NavLink>
        <NavLink  onClick={() => setNav(!nav)}  to="/company">Company</NavLink>
        <NavLink  onClick={() => setNav(!nav)}  to="/career">Career</NavLink>
        <NavLink  onClick={() => setNav(!nav)}  to="/blog">Blog</NavLink>
        <NavLink  onClick={() => setNav(!nav)}  to="/contact">Contact us</NavLink>
        {/* <NavLink to="/clone">
          Clone project <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink> */}
      </div>}
    </header>
   
  );
}

export default Header;
