import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import DataHeader from "./DataHeader"
import Header2Landing from "./Header2Landing";
import DataMainSummery from "./DataMainSummery";

function DataExtractDataMain() {
  return (
    <div className="App">
      <Header1 />
      <Header2Landing />
       <DataHeader content={"Data Extract"} />
       <DataMainSummery />
      <Footer />
    </div>
  );
}

export default DataExtractDataMain;
