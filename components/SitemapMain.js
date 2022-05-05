import React from "react";
import "../assets/css/search.css";
import SidebarMain from "./SidebarMain";
import sitemappng from "../assets/images/sitemap.png";

const SitemapMain = () => {

  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>
      <div className="flex-item-22">
        <div className="sitemap-container">
          <div className="desc-box">
            <div className="img-sitemap">
              <h3>SCH Application sitemap</h3>
              <img src={sitemappng} alt="sitemap" width={1670} height={792} />
            </div>
          </div>
        </div>
        <div className="flex-item-3"></div>
      </div>
    </div>
  );
};

export default SitemapMain;
