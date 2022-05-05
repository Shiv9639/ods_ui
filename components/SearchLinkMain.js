import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2Extract from "./Header2Extract";
import Header3 from "./Header3";
import SearchLink from "./SearchLink";

function DataSearch() {
  return (
    <div className="App">
      <Header1 />
      <Header2Extract />
      <Header3 content={"Search Result"} />
      <SearchLink />
      <Footer />
    </div>
  );
}

export default DataSearch;
