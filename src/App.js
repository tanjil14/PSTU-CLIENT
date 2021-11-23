// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import TopHeader from "./Shared/TopHeader/TopHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Switch>
          <Route path="/">
            <Home />
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
