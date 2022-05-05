import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2Extract from "./Header2Extract";
import Header3 from "./Header3";
import MMSMain from "./MMSMain";

function LandingPage() {
  return (
    <div className="App">
      <Header1 />
      <Header2Extract />
      <Header3 content={"MMS Dashboard"} />
      <MMSMain />
      <Footer />
    </div>
  );
}

export default LandingPage;
