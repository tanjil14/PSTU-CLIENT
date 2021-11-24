// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home/Home";
import NoticeBoard from "./Pages/Dropdown/Announcement/NoticeBoard";
import History from "./Pages/Dropdown/About/History/History";
import ImageGallery from "./Pages/Dropdown/About/ImageGallery/ImageGallery";
import Vision from "./Pages/Dropdown/About/Vision/Vision";
import Welcome from "./Pages/Dropdown/About/Welcome/Welcome";
import Cse from "./Pages/Dropdown/Academic/Cse";
import DeanOffice from "./Pages/Dropdown/Administration/DeanOffice";
import OtherStaff from "./Pages/Dropdown/Administration/OtherStaff";
import Footer from "./Shared/Footer/Footer";
import TopHeader from "./Shared/TopHeader/TopHeader";
import MainNews from "./Pages/Dropdown/Announcement/MainNews";
import PstuAtGlance from "./Pages/Glance/PstuAtGlance";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
          <Route path="/gallery">
            <ImageGallery />
          </Route>
          <Route path="/bsc_in_cse">
            <Cse />
          </Route>
          <Route path="/dean-office">
            <DeanOffice />
          </Route>
          <Route path="/staffs">
            <OtherStaff />
          </Route>
          <Route path="/notice">
            <NoticeBoard />
          </Route>
          <Route path="/news">
            <MainNews />
          </Route>
          <Route path="/pstu_at_glance">
            <PstuAtGlance />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
