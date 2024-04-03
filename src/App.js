import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileSetup from "./components/ProfileSetup";
import DribbleOption from "./components/DribbleOption";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<DribbleOption />} />
        <Route path="/setup" element={<ProfileSetup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
