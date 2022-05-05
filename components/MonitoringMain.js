/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import infologo from "../assets/info.jpg";
import ODHeader from "./ODHeader";
import DCHeader from "./DCHeader"
import "../assets/css/main.css";
import SidebarMain from './SidebarMain';

const MonitoringMain = () => {
  const allHappening = () => {
    alert("All happening goes here..");
  };
  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>
      <div className="flex-item-2">
        <ODHeader />
      </div>
    </div>
  );
};

export default MonitoringMain;
