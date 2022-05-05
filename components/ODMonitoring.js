import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2Dashboard from "./Header2Dashboard";
import Header3 from "./Header3";
import MonitoringMain from "./MonitoringMain";

function ODMonitoring() {
  return (
    <div className="App">
       <Header1 />
       <Header2Dashboard />
       <Header3 content={"OD Monitoring"} />
       <MonitoringMain /> 
      <Footer />
    </div>
  );
}

export default ODMonitoring;

