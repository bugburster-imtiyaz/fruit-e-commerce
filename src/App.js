import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import logo from './logo.svg'; // Import the logo

function App() {
  return (
    <div>
      {/* Use the imported logo */}
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopdetail" element={<ShopDetail />} />
        </Routes>
      </BrowserRouter>
      {/* Add the images referenced in your HTML code */}
      <img src="img/fruite-item-1.jpg" alt="Fruit" />
      <img src="img/fruite-item-2.jpg" alt="Fruit" />
      {/* Add more images as needed */}
      <Footer />
    </div>
  );
}

export default App;