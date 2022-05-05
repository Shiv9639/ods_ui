/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import infologo from "../assets/info.jpg";
import ODMonitoring from './ODMonitoring';
import "../assets/css/main.css";
import SidebarMain from './SidebarMain';

const Main = () => {
  const allHappening =() =>{
     alert("All happening goes here..")
  }
  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>

      <div className="flex-item-22">
        {/* <ODMonitoring /> */}
         <div className='white-paper-main'>
            <h4 className='middle-h4'>MMS Dashboard Content goes here</h4>
         </div>

      </div>
      <div className="flex-item-3">
        </div>
    </div>
  );
}

export default Main