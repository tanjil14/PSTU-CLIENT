// import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home/Home";
import NoticeBoard from "./Pages/Dropdown/Announcement/NoticeBoard";
import History from "./Pages/Dropdown/About/History/History";
import ImageGallery from "./Pages/Dropdown/About/ImageGallery/ImageGallery";
import Vision from "./Pages/Dropdown/About/Vision/Vision";
import Welcome from "./Pages/Dropdown/About/Welcome/Welcome";
import Cse from "./Pages/Dropdown/Academic/Cse";
import DeanOffice from "./Pages/Dropdown/Administration/DeanOffice";
import OtherStaff from "./Pages/Dropdown/Administration/OtherStaff";
import MainNews from "./Pages/Dropdown/Announcement/MainNews";
import PstuAtGlance from "./Pages/Glance/PstuAtGlance";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Dashboard/Login/Login";
import Register from "./Pages/Dashboard/Login/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Dashboard/Login/PrivateRoute/PrivateRoute";
import AddNews from "./Pages/Dashboard/Dashboard/AddNews";
import SingleNews from "./Home/NoticeBoard/News/SingleNews";
import UpdateNews from "./Pages/Dashboard/Dashboard/UpdateNews";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
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
          <Route path="/news/update/:id">
            <UpdateNews/>
          </Route>
          <Route path="/news/:id">
            <SingleNews/>
          </Route>
          <Route path="/news">
            <MainNews />
          </Route>
          
          <Route path="/pstu_at_glance">
            <PstuAtGlance />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/add_news">
            <AddNews/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
