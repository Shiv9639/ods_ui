import React from 'react'
import "../assets/css/main.css";
const SidebarMain = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            className="a-tag-slice"
            href="https://loblaw.service-now.com.mcas.ms/nav_to.do?uri=%2Fhome.do"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-ge"></i>
            {/* <FontAwesomeIcon className="fas-fa" icon={faSnowflake} /> */}
            <span className="sp-wrk">SERVICE NOW</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://lcl-aztms-sso-pr2.jdadelivers.com/tm/framework/Frame.jsp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-cogs"></i>
            <span className="sp-wrk">TMS</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://lavappepp78.ngco.com:50001/irj/portal?spnego=disabled"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-cubes"></i>
            <span className="sp-wrk">SAP</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://login.microsoftonline.com/eaa6cb52-58d7-45cd-8bd6-b1d2a8e61312/saml2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-database"></i>
            <span className="sp-wrk">TRIP</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://lctloblawprd01.jdadelivers.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-object-ungroup"></i>
            <span className="sp-wrk">LCT</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://tld.loblaw.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-rss-square"></i>
            <span className="sp-wrk">TLD</span>
          </a>
        </li>
        <li>
          <a
            className="a-tag-slice"
            href="https://mtcad.sharepoint.com/sites/lclFlip/en-ca"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-exclamation"></i>
            <span className="sp-wrk">FL!P REQUESTS</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarMain
