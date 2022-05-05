import "../assets/css/main.css";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2Landing from "./Header2Landing";
import Header3 from "./Header3";
import Main from "./Main";

function LandingPage() {
  return (
    <div className="App">
      <Header1 />
      <Header2Landing />
      <Header3 content={"Welcome to SCH"} />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
