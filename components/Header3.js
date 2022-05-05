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
    <div className="header3">
      <div className="date-header3">
           {today.toLocaleDateString("en-US", options)}
      </div>

      <div className="header3-content-left">
        <h1>{props.content}</h1>
      </div>
    </div>
  );
};

export default Header3