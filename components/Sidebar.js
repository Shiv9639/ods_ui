import React from 'react'
import "../assets/css/dropdown.css";

const Sidebar = () => {

  const InnerSidebarShow = () => {
    var sideNavInner = document.getElementById("sideNav-inner");
    // eslint-disable-next-line no-unused-expressions
    // // sideNavInner.style.left == "250px";

    if (sideNavInner.style.left == "250px") {
      sideNavInner.style.left = "250px";
      document.getElementById(
        "menu"
      ).src = require("../assets/icons/close.png");
    } else {
      sideNavInner.style.left = "250px";
      document.getElementById("menu").src = require("../assets/icons/menu.png");
    }
  };
  
  return (
 
     <div id="sideNav-Inner">
      <nav className="navSidebar-Inner">
        <ul className="nav-sb-ul-Inner">
          <li className="nav-sb-li-inner">
            <a href="#" onClick={InnerSidebarShow}>
              <i className="fa fa-long-arrow-right side-icon"></i>
              Workday
            </a>
          </li>

          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              Academy
            </a>
          </li>
          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              Sap
            </a>
          </li>

          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              Solution Center
            </a>
          </li>

          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              Translation Portal
            </a>
          </li>

          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              Store List
            </a>
          </li>

          <li className="nav-sb-li-inner">
            <a href="#">
              <i className="fa fa-long-arrow-right side-icon"></i>
              SCH Requests
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar