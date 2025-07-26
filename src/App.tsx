import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Product from './components/Product';
import Category from './components/Category';
import BestSellingProducts from './components/BestSellingProducts';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import ProductDetails from './Page/Productdetail';
//import About from './pages/About';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    {/* <Route path="/about" element={<About />} /> */}
    <Route path="/product/:id" element={<ProductDetails />} />

    </Routes>
    </>
  )
}

export default App
