import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./components/pages/Home";

function Rota ()  {
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      
    </Routes>
    
 </BrowserRouter>
  
};
  

export default Rota
