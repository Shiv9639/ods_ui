/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../assets/css/main.css";
import "../assets/css/dashboard.css";
import SidebarMain from './SidebarMain';
import MuiCardComponent from './MuiCardComponent'
import MuiCardComponent2 from "./MuiCardComponent2";
import MuiCardComponent3 from "./MuiCardComponent3";
import LineChart from "./Charts/LineChart"
import DoughnutChart from './Charts/DoughnutChart';
const header1Img = require("../assets/images/tec1.jpg");

const Main = () => {
  return (
    <div className="main-container-db">
      <div className="flex-item-1">
        <SidebarMain />
      </div>

      <div className="flex-item-22-dashboard">
        <header className="header-dashboard">
          <div className="header-child1">
            <MuiCardComponent
              header="DC performance"
              productivity="2456"
              percentage="3.48%"
              image={header1Img}
            />
          </div>
          <div className="header-child1">
            <MuiCardComponent2
              header="Profitability Analysis"
              productivity="5356"
              percentage="13.48%"
            />
          </div>
          <div className="header-child2">
            <MuiCardComponent3
              header="Network Traffic"
              productivity="4566"
              percentage="2.41%"
            />
          </div>
        </header>
        <main className="main-dashboard">
          <article className="article-dashboard">
            <LineChart />
          </article>
           <aside className="dashboard-column2">
            <DoughnutChart />
          </aside>
        </main>
      </div>
      <div className="flex-item-3"></div>
    </div>
  );
}

export default Main