import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header3 from "./Header3";
import Header2Extract from "./Header2Extract";
import DataMainSideNav from "./DataMainSideNav";

function DataExtract() {
  return (
    <div className="App">
      <Header1 />
      <Header2Extract />
      <Header3 content={"Data Extract"} />
      <DataMainSideNav />
      <Footer />
    </div>
  );
}

export default DataExtract;
