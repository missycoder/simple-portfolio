import React from "react"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  const greeting = "Hello React!";

  return (
  <div>
    <Router>
      <Navbar />
      <br></br>
      <br></br>
      <h1 className="greeting">{greeting}</h1>
    <p>React is a JavaScript library for building user interfaces</p>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  
    </Router>
   
    </div>
  );
};

export default App;