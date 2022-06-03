import React,  {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import SchLogo from '../assets/MaryLandlogo@2x.png'
import fIcon from '../assets/Icon feather-user.svg';
import {navMenus} from './MenuItems';
import Dropdown from './Dropdown';

import classes from './NavBar.module.css';
import './NavBar.css'
// import classes from './AdmissionForm.module.css';


function NavBar() {
  const [click , setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const [activeMenu, setActiveMenu] = useState({
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
  })

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || 'about';

    if (window.innerWidth < 960){
      setDropdown(false);
    }else{
      setActiveMenu({
        menu1: menuText === 'about',
        menu2: menuText === 'admission',
        menu3: menuText === 'learning',
        menu4: menuText === 'school life',
        menu5: menuText === 'news',
      })
    }

  }

  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
      setDropdown(false);
    }else{
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
      })
    }
  };

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const openPortalLink = () => {
    const portal =
      "https://marylandcomprehensive.educare.school/default.html#/admin/dashboard";
    window.open(portal)
  };

  return (
    <nav className="navContainer">
      <div className={classes.navCont}>
        <div className={classes.imgCont}>
          <Link to={"/"}>
            <img src={SchLogo} alt=" logo" className={classes.imgContent} />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-list active" : "nav-list"}>
          <li
            className="nav-item "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={"/about"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
            {activeMenu.menu1 && <Dropdown menuArray={navMenus.about} />}
          </li>

          <li
            className="nav-item "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={"/academics"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ADMISSION
            </NavLink>
            {activeMenu.menu2 && <Dropdown menuArray={navMenus.admission} />}
          </li>

          <li
            className="nav-item "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={"/learn"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              LEARNING
            </NavLink>
            {activeMenu.menu3 && <Dropdown menuArray={navMenus.learn} />}
          </li>

          <li
            className="nav-item "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={"/school"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              STUDENT LIFE
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={"/gallery"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              GALLERY
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              to={"/News"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              NEWS AND EVENTS
            </NavLink>
          </li>

          <li className="ph">
            {" "}
            <button className={classes.btnPortal} onClick={openPortalLink}>
              <img
                src={fIcon}
                alt="person"
                className={classes.fIcon}
               
              />
              Portal
            </button>
          </li>

          <div className="wrapper">
            <ui className="mainMenu">
              <li className="item" id="account">
                <a href="#account" className="btn">
                  About
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/principal"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Administrator's Message
                  </NavLink>{" "}
                  <NavLink
                    to={"/message"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Proprietor's Message
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    History
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </NavLink>
                </div>
              </li>

              <li className="item" id="academics">
                <a href="#academics" class="btn">
                  Admission
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/apply"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    How to Apply
                  </NavLink>{" "}
                  <NavLink
                    to={"/fees"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    School Fees
                  </NavLink>{" "}
                  <NavLink
                    to={"/transfer"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Transfer
                  </NavLink>{" "}
                </div>
              </li>

              <li className="item" id="admission">
                <a href="#admission" class="btn">
                  Learning
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/senior"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Senior School
                  </NavLink>{" "}
                  <NavLink
                    to={"/junior"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Junior school
                  </NavLink>{" "}
                </div>
              </li>

              <li className="item" id="support">
                <a href={"/school"} class="btn">
                  School Life
                </a>
              </li>

              <li className="item" id="support">
                <a href="/Gallery" class="btn">
                  Gallery
                </a>
              </li>

              <li className="item" id="support">
                <a href="/News" class="btn">
                  News & Events
                </a>
              </li>
              <li class="item">
                <a
                  className="portal btn btn-sm"
                  href="https://marylandcomprehensive.educare.school/default.html#/admin/dashboard"
                  target="_blank"
                >
                  PORTAL
                </a>
              </li>
            </ui>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar