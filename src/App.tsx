import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddFavourite from "./Components/Pages/AddFavourite";
import ImageDetailPage from './Components/Pages/ImageDetailPage';
import NavBar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
       <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addfavourite' element={<AddFavourite />} />
       <Route path="/image/:id" element={<ImageDetailPage />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
