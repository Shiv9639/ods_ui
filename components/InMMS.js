import React from 'react'

const InMMS = (props) => {
const { inmms, inWMSCount,notInWMSCount } = props;
console.log("inMMS", inmms)

 return (
   <div className="WMSHeader-container">
     <div className="wms-content wms-odm">
       <p className="w-sap-hd">IN WMS</p>
       <p className="w-sap-nr">{inWMSCount}</p>
     </div>
     <div className="wms-content wms-odm wms-ev-color">
       <p className="w-sap-hd">NOT IN WMS</p>
       <p className="w-sap-nr">{notInWMSCount}</p>
     </div>
    
   </div>
 );
}

export default InMMS