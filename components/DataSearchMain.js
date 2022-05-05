import React,{useState,useEffect} from "react";
import "../assets/css/search.css";
import SidebarMain from "./SidebarMain";
import searchbar from '../assets/images/search.png'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'
import SearchLink from "./SearchLink";

const DataSearchMain = () => {

  const [dropData, setDropData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [searchId, setSerarchId] = useState('')
  const [displayURL, setDisplayUrl] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([])


//  let { DISPLAY_ID } = useParams()

  const url =
    "https://scs-generic-query-api-scs-dv.apps.ltosp4lwr.osp.ngco.com/api/generic-query-api";
  const data = {
    query_id: "SearchPage",
    query_info: [],
  };

  const getData = async () => {
    try {
      const response = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(data),
        credentials: "same-origin",
      });
      return response.data
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("API Fetch Failed");
      }
      //errRef.current.focus();
    }
  };

  useEffect(() => {
    getData()
      .then((data) => {
      setDropData(data.records);
      console.log("data records", data.records); 
    });
  }, []);

  const api = "http://localhost:5000/search-api";

  const fetchData = async () => {
    try {
      const res = await axios.get(api, {
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(data),
        credentials: "same-origin",
      });
      //console.log(res.data)
      return res.data;
      
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchData().then((result) => {
       setSearchResult(result);
       console.log("search data records", searchResult);
    });
  }, []);

   const searchString = searchId + inputValue
   const submitSearch =() =>{
      
   }
 
  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>

      <div className="flex-item-22">
        <div className="white-paper-search">
          <div className="container-search">
            <label className="label-display">Enter search criteria</label>

            <label className="label-search">
              <select
                class="select-drop"
                onChange={(e) => setSerarchId(e.target.value)}
              >
                {dropData.map((drop) => (
                  <option key={drop.DISPLAY_ID} value={drop.API_URL}>
                    {drop.DISPLAY_NAME}
                  </option>
                ))}
              </select>
            </label>

            <div className="search-bar-form">
              <input
                type="text"
                name="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search"
                autocomplete="off"
              />
              <button type="button" onClick={submitSearch}>
                <img src={searchbar} alt="searchbar" />
              </button>
            </div>
          </div>
          <div className="display-results" id="display-results">
            {searchResult
              .filter((val) => {
                if (inputValue == "") {
                  return null;
                } else if (
                  val.DataDesc.toLowerCase().includes(inputValue.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => { 
                return (
                  <div className="search-container" key={key}>
                    <Link className="search-header" to={"/searchmain/" + val.DISPLAY_ID + val.DataDesc + val.DataDetails } >
                       OD Monitoring
                    </Link>

                    {/* <Link className="search-header" to={"/searchmain/" + val.DISPLAY_ID + val.DataDesc + val.DataDetails } >
                       OD Monitoring
                    </Link> */}
                    <p className="search-sub-header">{val.DataDesc}</p>
                    <p className="search-details">{val.DataDetails}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex-item-3"></div>
    </div>
  );
};

export default DataSearchMain;
