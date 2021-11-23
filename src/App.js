// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home/Home";
import History from "./Pages/Dropdown/About/History/History";
import ImageGallery from "./Pages/Dropdown/About/ImageGallery/ImageGallery";
import Vision from "./Pages/Dropdown/About/Vision/Vision";
import Welcome from "./Pages/Dropdown/About/Welcome/Welcome";
import Cse from "./Pages/Dropdown/Academic/Cse";
import Footer from "./Shared/Footer/Footer";
import TopHeader from "./Shared/TopHeader/TopHeader";

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
           <Welcome/>
          </Route>
          <Route path="/history">
           <History/>
          </Route>
          <Route path="/vision">
           <Vision/>
          </Route>
          <Route path="/gallery">
           <ImageGallery/>
          </Route>
          <Route path="/bsc_in_cse">
           <Cse/>
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
