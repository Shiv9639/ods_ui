import React, {useState, useEffect} from "react";
import "../assets/css/main.css";
import SidebarMain from "./SidebarMain";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Main = () => {

     const [LandingData, setLandingData] = useState([]);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     const apiLanding = "http://localhost:5000/landing-content";

     const fetchData = async () => {
       try {
         setLoading(true);
         const data = await axios
           .get(apiLanding)

           .then((res) => {
             setLandingData(res.data);
           });
         setLoading(false);
        
       } catch (e) {
         console.log("Error while fetching landing content ", e)
       }
     };

     useEffect(() => {
       fetchData();
     }, []);

  // console.log("landingData", LandingData)

  const allHappening = () => {
    navigate("/description");
  };
  //const dd = LandingData[0].landing_img
  //const tec1 = require(toString(dd));
  const tec1 = require("../assets/images/tec1.jpg");
  const tec2 = require("../assets/images/tec2.jpg");
  const tec3 = require("../assets/images/tec3.jpg");
  const tec4 = require("../assets/images/tec4.jpg");

  const images = { tec1, tec2, tec3, tec4 }
  const [imgList, setImgList] = useState(images.tec1)
    
  const menu1Click = () => {
    
    document.getElementById("info2-upd").innerText = LandingData[0].landing_sh
    document.getElementById("main2-column").innerText = LandingData[0].landing_th
    document.getElementById("main-content1").style.overflow = "hidden"  
    document.getElementById("main-content1").innerHTML = LandingData[0].landing_content
    setImgList(images.tec1)
    
    document.getElementById(`aside1-inner`).style.background= '#c7ddee';  
    document.getElementById('aside1-inner').style.borderLeft="#6ec8f1 10px solid"; 
    document.getElementById(`aside2-inner`).style.background = "";
    document.getElementById("aside2-inner").style.borderLeft = "";
    document.getElementById(`aside3-inner`).style.background = "";
    document.getElementById("aside3-inner").style.borderLeft = "";
    document.getElementById(`aside4-inner`).style.background = "";
    document.getElementById("aside4-inner").style.borderLeft ="";
                           
  }; 
   const menu2Click = () => {
     document.getElementById("info2-upd").innerText = LandingData[1].landing_sh;
     document.getElementById("main2-column").innerText= LandingData[1].landing_th;
     document.getElementById("main-content1").style.overflow = "hidden";
     document.getElementById("main-content1").innerHTML = LandingData[1].landing_content
     setImgList(images.tec2);
     document.getElementById(`aside1-inner`).style.background= '';  
     document.getElementById('aside1-inner').style.borderLeft= ''; 
     document.getElementById(`aside2-inner`).style.background = "#c7ddee";
     document.getElementById("aside2-inner").style.borderLeft = "#6ec8f1 10px solid";
    document.getElementById(`aside3-inner`).style.background = "";
    document.getElementById("aside3-inner").style.borderLeft = "";
    document.getElementById(`aside4-inner`).style.background = "";
    document.getElementById("aside4-inner").style.borderLeft = "";
   }; 

const menu3Click = () => {
  document.getElementById("info2-upd").innerText = LandingData[2].landing_sh;
  document.getElementById("main2-column").innerText = LandingData[2].landing_th;
  document.getElementById("main-content1").style.overflow = "hidden";
  document.getElementById("main-content1").innerHTML = LandingData[2].landing_content;
  setImgList(images.tec3);
  document.getElementById(`aside1-inner`).style.background = "";
  document.getElementById("aside1-inner").style.borderLeft = "";
  document.getElementById(`aside2-inner`).style.background = "";
  document.getElementById("aside2-inner").style.borderLeft ="";
  document.getElementById(`aside3-inner`).style.background = "#c7ddee";
  document.getElementById("aside3-inner").style.borderLeft =
        "#6ec8f1 10px solid";
  document.getElementById(`aside4-inner`).style.background = "";
  document.getElementById("aside4-inner").style.borderLeft = "";
};  

  const menu4Click = () => { 
 document.getElementById("info2-upd").innerText = LandingData[3].landing_sh;
 document.getElementById("main2-column").innerText = LandingData[3].landing_th;
 document.getElementById("main-content1").style.overflow = "hidden";
 document.getElementById("main-content1").innerHTML = LandingData[3].landing_content;
 setImgList(images.tec4);
 document.getElementById(`aside1-inner`).style.background = "";
 document.getElementById("aside1-inner").style.borderLeft = "";
 document.getElementById(`aside2-inner`).style.background = "";
 document.getElementById("aside2-inner").style.borderLeft = "";
 document.getElementById(`aside3-inner`).style.background = "";
 document.getElementById("aside3-inner").style.borderLeft = "";
document.getElementById(`aside4-inner`).style.background = "#c7ddee";
document.getElementById("aside4-inner").style.borderLeft =
      "#6ec8f1 10px solid";
  }

  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>


      <div className="flex-item-22-landing">
        <header className="header-landing">
          Supplychain Hub Application Automation Interface
        </header>
        <main className="main-landing">
          <aside className="aside1-landing">
            <div className="aside1-inner" onClick={menu1Click} id="aside1-inner">
              <h3  className="h3-side-main">OD Monitoring</h3>
            </div>
            <div className="aside2-inner" onClick={menu2Click} id="aside2-inner">
              <h3 className="h3-side-main">Data Extract</h3>
            </div>
            <div className="aside3-inner" onClick={menu3Click} id="aside3-inner">
              <h3 className="h3-side-main">MMS Dashboard</h3>
            </div>
            <div className="aside4-inner" onClick={menu4Click} id="aside4-inner">
              <h3 className="h3-side-main">Data Search</h3>
            </div>
          </aside>

          <article className="article-landing">
            <div className="article-content">
              <div className="white-paper2">
                <div className="main2-column" id="main2-column">OD Monitoring</div>
                <div className="info2-column">
                  <span>
                    <img
                      className="img-landing"
                      id="img-landing"
                      src={imgList}
                      // src="https://source.unsplash.com/random/300x300"
                      alt="unsplash"
                    ></img>
                    {/* <img className="img-main" src={tec1} alt="info logo" align="left"></img> */}
                    <p
                      className="info2-upd"
                      style={{ overflow: "hidden" }}
                      id="info2-upd"
                    >
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <p id="main-content1" style={{ overflow: "hidden" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem nemo hic in, possimus doloremque voluptas
                      illo eum fugit officia velit? Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Animi, voluptatibus? Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Esse
                      quo impedit ipsam adipisci libero qui obcaecati aliquid
                      consequuntur iusto nesciunt. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Sapiente, laborum?
                    </p>
                  </span>
                </div>
                <hr className="hr-line-blue"></hr>
                <div className="allHap">
                  <a href="#" onClick={allHappening}>
                    <span style={{ color: "#3692D9", fontWeight: "normal" }}>
                      Explore
                    </span>{" "}
                    <span className="hap-ing">The Automatation Process</span>
                    <span className="arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* <aside></aside> */}
        </main>
      </div>
    </div>
  );
};

export default Main;
