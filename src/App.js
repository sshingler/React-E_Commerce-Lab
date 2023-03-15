import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordShopContainer from './containers/RecordShopContainer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AddToBasket from './components/AddToBasket';
import React, { useState } from 'react';


function App() {

  const [baskets, setBaskets] = useState([])

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/records" element={<RecordShopContainer baskets={baskets} setBaskets={setBaskets}/>} /> 
        <Route path="/basket" element={<AddToBasket baskets={baskets}/>} /> 
      </Routes>
    </Router>
   
  );
}

export default App;



