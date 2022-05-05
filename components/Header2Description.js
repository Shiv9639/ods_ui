/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import schlogo from '../assets/sch.png'
import loblawlogo from '../assets/logo-loblaw.png';
import menuIcon from "../assets/icons/menu.png";
import languageIcon from "../assets/icons/language-toggle.png";
import "../assets/css/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'

<FontAwesomeIcon icon="fa-solid fa-xmark" />;

const Header2 = () => {

  const toggleSearch = () => {
    const searchMenu = document.querySelector(".search-box");
    searchMenu.classList.toggle("active");
  };

const searchData =() =>{
  alert("Searching data goes here")
}

const sidebarShow =() =>{
  var sideNav = document.getElementById("sideNav")
   // eslint-disable-next-line no-unused-expressions
   sideNav.style.left == "-250px";
   
  if (sideNav.style.left == "-250px") {
    sideNav.style.left = "0";
      document.getElementById("menu").src = require("../assets/icons/close.png");
  } else {
    sideNav.style.left = "-250px";
    document.getElementById("menu").src = require('../assets/icons/menu.png');
   }
}

 return (
   <div className="header2">
     <div id="sideNav">
       <nav className="navSidebar">
         <ul className="nav-sb-ul">
           <li className="nav-sb-li">
             <a href="#">
               <i
                 id="slide"
                 className="fa fa-long-arrow-right side-icon"
                 src={schlogo}
               ></i>
             </a>
             {/* </div> */}
           </li>
         </ul>
       </nav>
     </div>
     <Sidebar />

     <div id="menuBtn">
       <img
         src={menuIcon}
         alt="menu icon"
         id="menu"
         onClick={sidebarShow}
       ></img>
     </div>

     <div className="flip-logo">
       <img src={schlogo} alt="schlogo"></img>
     </div>
     <div className="vl"></div>
     <div className="loblaw-logo">
       <img src={loblawlogo} alt="loblawlogo"></img>
     </div>
     <div className="vl"></div>
     {/* Top menu */}
     <div>
       <div className="navbar">
         <div className="dropdown">
           <Link className="linkMain" to="/">
             Home<i className="fa fa-caret-right linkFaMain"></i>
           </Link>
           <div className="vls"></div>
         </div>
         
         <div className="dropdown">
           <Link className="linkMain" to="/dashboard">
             Dashboard <i className="fa fa-caret-right linkFaMain"></i>
           </Link>
           <div className="vls"></div>
         </div>

         <div className="dropdown">
           <Link className="linkMain" to="/dataextract">
             Data Extract <i className="fa fa-caret-right linkFaMain"></i>
           </Link>
           <div className="vls"></div>
         </div>

         <div className="dropdown">
           <Link className="linkMain" to="/datasearch">
             Data Search <i className="fa fa-caret-right linkFaMain"></i>
           </Link>
           <div className="vls"></div>
         </div>
       </div>
     </div>

     <div className="language-toggler">
       <a
         className="language-a"
         href="http://www.google.com"
         target="_blank"
         rel="noreferrer"
       >
         <img
           className="language-img"
           src={languageIcon}
           alt="language toggler"
           align="left"
         ></img>
         <span className="language-span-en">EN</span>
         <span className="language-span-sep">|</span>
         <span className="language-span-fr">FR</span>
       </a>
     </div>

     <div className="search-bar">
       <i className="fa fa-search search-blue" onClick={toggleSearch}></i>
       <div className="search-box">
         <div className="input-data">
           <input type="text" required></input>
           <div className="search-underline"></div>
           <label>Search</label>
           <i
             className="fa fa-long-arrow-right arrow-long"
             aria-hidden="true"
             onClick={searchData}
           ></i>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Header2