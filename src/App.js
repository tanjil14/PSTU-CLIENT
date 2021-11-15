// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import TopHeader from "./Shared/TopHeader/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
