import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2Description from "./Header2Description";
import Header3 from "./Header3";
import DescriptionMain from "./DescriptionMain";

function DataSearch() {
  return (
    <div className="App">
      <Header1 />
      <Header2Description />
      <Header3 content={"Automation process"} />
      <DescriptionMain />
      <Footer />
    </div>
  );
}

export default DataSearch;
