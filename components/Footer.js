import React from 'react'
import footerlogo from '../assets/logo-footer.png'
import "../assets/css/main.css";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerlogo} alt="footer logo"></img>
      </div>
      <div className="footer-sitemap">
         <Link className="linkMain" to="/sitemap">
          Sitmap
        </Link>
       
      </div>
    </div>
  );
}

export default Footer