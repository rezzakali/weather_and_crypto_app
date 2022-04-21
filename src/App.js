import { Route, Routes } from "react-router-dom";
import Crypto from "./Components/Crypto";
import Github from "./Components/Github";
import Navbar from "./Components/Navbar";
import Whether from "./Components/Whether";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/github" element={<Github />} />
        <Route path="/whether" element={<Whether />} />
      </Routes>
    </div>
  );
}

export default App;
