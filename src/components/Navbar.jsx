/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/navbarTop.css";
import "../css/navbarSide.css";
import images from "../assets";

const routes = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "About Me",
  //   link: "/about",
  // },
  // {
  //   name: "Projects",
  //   link: "/projects",
  // },
  // {
  //   name: "Contact Me",
  //   link: "/contact",
  // },
];

const TopNavbar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className="topNavbar">
        <div className="leftNav">
          <div onClick={() => window.location.reload()}>
            <img src={images.mkLogo} width={30} alt="mk-logo" />
            <h1 style={{ color: "darkred" }}>Adopt-ME</h1>
          </div>
        </div>
        <div className="rightOuterDiv">
          <ul className="rightNav">
            {routes.map((route, i) => (
              <li key={i + 1}>
                <HashLink to={route.link}>{route.name}</HashLink>
              </li>
            ))}
          </ul>

          <div className="signin-btns">
            <Link to="/signup">
              {!isOpen && <div className="loginBtn">SignUp</div>}
            </Link>
            <Link to="/login">
              {!isOpen && <div className="loginBtn">Login</div>}
            </Link>
            <Link to="https://manthan-mk-portfolio.vercel.app" target="_blank">
              {!isOpen && (
                <div className="loginBtn">
                  My Website
                  {/* <img src={images.mkLogo} width={50} alt="mk-logo" /> */}
                </div>
              )}
            </Link>
          </div>

          <button className="hamburger-btn" onClick={toggleSidebar}>
            {!isOpen && <FaBars />}
          </button>
        </div>
      </div>
    </>
  );
};

const SideNavbar = ({ isOpen, toggleSidebar, routes }) => {
  return (
    <>
      {isOpen && <div className="sidebar-bg" onClick={toggleSidebar} />}
      <div className={`side-nav-container ${isOpen ? "open" : ""}`}>
        <div className="side-nav-content">
          <h2 className="side-nav-logo">
            <img
              onClick={() => window.location.reload()}
              src={images.mkLogo}
              className="nav-logoImg"
              alt="mk-logo"
            />
          </h2>
          <div className="side-nav-routes">
            {routes.map((route, i) => (
              <div className="side-nav-route" key={i + 1}>
                <HashLink onClick={toggleSidebar} to={route.link}>
                  {route.name}
                </HashLink>
              </div>
            ))}
          </div>
          <div className="login-btns">
            <Link onClick={toggleSidebar} to="/signup">
              <button className="signin-btn-side">SignUp</button>
            </Link>
            <Link onClick={toggleSidebar} to="/login">
              <button className="signin-btn-side">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navbar">
      <TopNavbar
        routes={routes}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <SideNavbar
        routes={routes}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Navbar;
