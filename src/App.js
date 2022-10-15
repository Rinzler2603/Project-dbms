import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
