import React from 'react'
// import Moment from "react-moment";

import "../assets/css/main.css";

const Header3 = (props) => {
 
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();

  return (
    <div className="header3 header3-ex">
      <div className="date-header3">
           {today.toLocaleDateString("en-US", options)}
      </div>

      <div className="header3-content-left-mr">
        <h3>{props.content}</h3>
      </div>
    </div>
  );
};

export default Header3