/* eslint-disable no-lone-blocks */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/odmonitoring.css";
import { color } from "@mui/system";

const DCHeader = () => {
  const [fetchData, setFetchData] = useState([]);

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  const data = {
    query_id: "ODSDC30",
    query_info: [],
  };


  console.log("data2", fetchData); 


  const size = fetchData.length;
  const date_array = [];

  console.log("length ", size);

  

  return (
    <div>
    
      <div className="DCHeader-main">
        <div className="DCHeader-container">
          <div className="dcblock1 dc-content dc-odm">DC 10</div>
          <div className="dcblock1 dc-content dc-odm">DC 20</div>
          <div className="dcblock1 dc-content dc-odm">DC 30</div>
          <div className="dcblock1 dc-content dc-odm">DC 50</div>
        </div>

        {/* white box */}

        <div className="SAPHeader-container">
          <div className="sap-content sap-odm">
            <p className="p-sap-hd">SAP ODs Released</p>
            <p className="p-sap-nr">12</p>
          </div>
          <div className="sap-content sap-odm">
            <p className="p-sap-hd">SAP ODs Released</p>
            <p className="p-sap-nr">5</p>
          </div>
          <div className="sap-content sap-odm">
            <p className="p-sap-hd">SAP ODs Released</p>
            <p className="p-sap-nr">32</p>
          </div>
          <div className="sap-content sap-odm">
            <p className="p-sap-hd">SAP ODs Released</p>
            <p className="p-sap-nr">(Blank)</p>
          </div>
        </div>

        {/* WMS Table boxes - first row*/}

        <div className="WMSHeader-container">
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">12</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">15</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">32</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">(Blank)</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">16</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">13</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">9</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">8</p>
          </div>
        </div>

        {/* WMS Table boxes - second row*/}

        <div className="WMSHeader-container">
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">21</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">15</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">32</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">(Blank)</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">16</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">19</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">9</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">8</p>
          </div>
        </div>

        {/* WMS Table boxes - third row*/}

        <div className="WMSHeader-container">
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">22</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">5</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">12</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">(Blank)</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">16</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">11</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">9</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">7</p>
          </div>
        </div>

        {/* WMS Table boxes - fourth row*/}

        <div className="WMSHeader-container">
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">12</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">5</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">32</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">IN WMS</p>
            <p className="w-sap-nr">(Blank)</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">NOT IN WMS</p>
            <p className="w-sap-nr">16</p>
          </div>
          <div className="wms-content wms-odm wms-ev-color">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">11</p>
          </div>
          <div className="wms-content wms-odm">
            <p className="w-sap-hd">WMS</p>
            <p className="w-sap-nr">9</p>
          </div>
            <div className="wms-content wms-odm wms-ev-color">
             <p className="w-sap-hd">NOT IN WMS</p>
             <p className="w-sap-nr">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};;

export default DCHeader;
