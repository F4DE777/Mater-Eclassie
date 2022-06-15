import React,  {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import SchLogo from '../assets/MaterLogo@2x.png'
import fIcon from '../assets/Icon feather-user.svg';
import {navMenus} from './MenuItems';
import Dropdown from './Dropdown';

import classes from './NavBar.module.css';
import './NavBar.css'
// import classes from './AdmissionForm.module.css';


function NavBar() {
  const [click , setClick] = useState(false);
  const [ setDropdown] = useState(false);


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
          <Link to={"/"} className={classes.imgCont}>
                <img src={SchLogo} alt=" logo" className={classes.imgContent} />
          </Link>
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
                <Link href="#account" className="btn">
                  About
                </Link>
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
                <Link href="#academics" class="btn">
                  Admission
                </Link>
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
                <Link href="#admission" class="btn">
                  Learning
                </Link>
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
                <Link href={"/school"} class="btn">
                  School Life
                </Link>
              </li>

              <li className="item" id="support">
                <Link href="/Gallery" class="btn">
                  Gallery
                </Link>
              </li>

              <li className="item" id="support">
                <Link href="/News" class="btn">
                  News & Events
                </Link>
              </li>
              <li class="item">
                <Link
                  className="portal btn btn-sm"
                  href="/"
                  target="_blank"
                >
                  PORTAL
                </Link>
              </li>
            </ui>
          </div>
        </ul>
    </nav>
  );
}

export default NavBar