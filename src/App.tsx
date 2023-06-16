import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddFavourite from "./Components/Pages/AddFavourite";
import Description from './Components/Pages/Description';
import NavBar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
       <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addfavourite' element={<AddFavourite />} />
        <Route path='/description' element={<Description />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
