import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import FilterChart from "./components/Filter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cse" element={<FilterChart department="CSE" />} />
        <Route path="/eee" element={<FilterChart department="EEE" />} />
        <Route path="/ece" element={<FilterChart department="ECE" />} />
        <Route path="/mech" element={<FilterChart department="MECH" />} />
        <Route path="/it" element={<FilterChart department="IT" />} />
      </Routes>
    </Router>
  );
}

export default App;
