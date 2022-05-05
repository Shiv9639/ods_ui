import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header3 from "./Header3"
import Header2Landing from "./Header2Landing";
import DataMainSideNav from "./DataMainSideNav";

function DataExtract() {
  return (
    <div className="App">
      <Header1 />
      <Header2Landing />
      <Header3 content={"Data Extract"} />
      <DataMainSideNav />
      <Footer />
    </div>
  );
}

export default DataExtract;
