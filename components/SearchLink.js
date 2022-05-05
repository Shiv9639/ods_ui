import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../assets/css/main.css";
import SidebarMain from "./SidebarMain";
import axios from 'axios'

const SearchLink = () => {
    
    let {DISPLAY_ID, DataDesc, DataDetails } = useParams();

//  const [dataSearch, setDataSearch] = useState([])
//  const api = `http://localhost:5000/search-api/${DISPLAY_ID}`;
//  console.log("display_id", DISPLAY_ID)

//  const fetchData = async () => {
//    try {
//      const res = await axios.get(api, {
//        headers: { "Content-Type": "application/json" },
//        mode: "cors",
//        body: JSON.stringify(dataSearch),
//        credentials: "same-origin",
//      });
//      setDataSearch(res.data);
//      //console.log(res.data)
//      return res.data;
//    } catch (err) {
//      console.log(err);
//    }
//  };

//  useEffect(() => {
//    fetchData().then((result) => {
//      console.log("single record", dataSearch);
//    });
//  }, []);

  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>

      <div className="flex-item-22">
        <div className="white-paper-white">
          <div className="search-details-disp">
            {/* {console.log("res", dataSearch)}

            {dataSearch.map((dt) => {
              const list = (
                <>
                  <ul>
                    <li>Id {dt.id}</li>
                    <li>API {dt.APILink}</li>
                  </ul>
                  <hr/>
                </>
                
              );
              return list;
            })} */}
             
             
            {/* {data.map((value, index) => {
              return (
                <div key={index} className="sub-header">
                  {value.DataDesc}
                </div>
              );
            })} */}

            <p className="id-header">{DISPLAY_ID}</p>
            <p className="sub-header">{DataDesc}</p>
            <p className="contents-search">{DataDetails}</p>
            
            <br></br>
          </div>
        </div>
      </div>
      <div className="flex-item-3"></div>
    </div>
  );
}

export default SearchLink