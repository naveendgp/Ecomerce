import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddToCard from "./Components/AddToCard/AddToCard";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Pages/Home";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addtocard" element={<AddToCard/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
    </Router>
  )
}

export default App