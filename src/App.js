import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import ProfileSetup from "./components/ProfileSetup";
import DribbleOption from "./components/DribbleOption";

function App() {
  return (
    <Router>
      {/* <Navbar /> Navbar should be outside the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="setup/*" element={<ProfileSetup />} />
        <Route path="next" element={<DribbleOption />} />
      </Routes>
    </Router>
  );
}

export default App;
