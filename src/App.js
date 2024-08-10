import Sidebar from "./components/Sidebar";
import sidebar from "./components/sidebar.css";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import Halka from "./pages/Halka.jsx";
import Search from "./pages/Search.jsx"
import Team from "./pages/Team.jsx"
import Records from "./pages/Records.jsx"
import ERTM from "./pages/ERTM.jsx"
import Reports from "./pages/Reports.jsx"
import Polling from "./pages/Polling.jsx"
import PollingDay from "./pages/PollingDay.jsx"
import Management from "./pages/Management.jsx"
import Transport from "./pages/Transport.jsx"
import Suspicious from "./pages/Suspicious.jsx"
import Map from "./pages/Map.jsx"
import Logout from "./pages/Logout.jsx"
import home from "./pages/home.css"
import Check from "./pages/Check.jsx";
import halka from "./pages/halka.css"
import search from  "./pages/search.css"
import management from "./pages/management.css"
import team from "./pages/team.css"
import record from "./pages/record.css"
import ertm from "./pages/ertm.css"
import report from "./pages/report.css"
import polling from "./pages/polling.css";
import day from "./pages/day.css"
function App() {
  return (
    <>
    <div>
      {/* <Sidebar/> */}
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/halka" element={<Halka/>}/>
<Route path="/search" element={<Search/>}/>
<Route path="/team" element={<Team/>}/>
<Route path="/records" element={<Records/>}/>
<Route path="/ertm" element={<ERTM/>}/>
<Route path="/reports" element={<Reports/>}/>
<Route path="/polling" element={<Polling/>}/>
<Route path="/pollingday" element={<PollingDay/>}/>
<Route path="/mangment" element={<Management/>}/>
<Route path="/transport" element={<Transport/>}/>
<Route path="/suspicious" element={<Suspicious/>}/>
<Route path="/map" element={<Map/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/view" element={<Check/>}/>



      </Routes>
    </div>
    </>
  );
}

export default App;
