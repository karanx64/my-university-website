import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

//react scroll import
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  /*dark bg start*/
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  /*dark bg end*/

  // toggle menu

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" duration={500} offset={0} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" duration={500} offset={-260} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" duration={500} offset={-150} smooth={true}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" duration={500} offset={-260} smooth={true}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" duration={500} offset={-260} smooth={true}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            duration={500}
            offset={-260}
            smooth={true}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
