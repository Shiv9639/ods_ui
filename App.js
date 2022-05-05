import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Dashboard from './components/Dashboard';
import DataExtract from './components/DataExtract';
import DataSearch from './components/DataSearch';
import LandingPage from './components/LandingPage';
import ODMonitoring from './components/ODMonitoring';
import MMSDashboard from './components/MMSDashboard';
import DataExtractSummeryMain from './components/DataExtractSummeryMain'
import DataExtractDataMain from "./components/DataExtractDataMain";
import TestAPI from './components/TestAPI'
import TestAPI2 from "./components/TestAPI2";
import Description from './components/Description';
import Login from './components/Login/LoginScreen'
import Register from './components/Login/Register';
import ResetPW from './components/Login/ResetPW';
import EditProfile from './components/Login/EditProfile';
import Sitemap from './components/Sitemap'
import SearchLinkMain from './components/SearchLinkMain';

function App(props) {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/dataextract" eact element={<DataExtract />} />
          <Route path="/datasearch" exact element={<DataSearch />} />
          <Route path="/odmonitoring" element={<ODMonitoring />} />
          <Route path="/mmsdashboard" element={<MMSDashboard />} />
          <Route path="/dataextractdatamain" exact element={<DataExtractDataMain />} />
          <Route path="/dataextractsummerymain" exact element={<DataExtractSummeryMain />} />
          <Route path="/description" exact element={<Description />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/edit-profile" exact element={<EditProfile />} />
          <Route path="/register-user" exact element={<Register />} />
          <Route path="/reset-pw" exact element={<ResetPW />} />
          <Route path="/sitemap" exact element={<Sitemap />} />
          <Route path="searchmain/:DISPLAY_ID"  element={<SearchLinkMain/>} />
          <Route path="/testapi" element={<TestAPI />} />
          <Route path="/testapi2" element={<TestAPI2 />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
