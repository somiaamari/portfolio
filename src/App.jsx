import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {

  return (
<div>
<Router>
      <div className="">
        <Routes>
          {/* 
<Route path="/" element={<Home/>} /> */}
          <Route path="/home" element={<Home />} />
        
        </Routes>
      </div>
    </Router></div>
  )
}

export default App
