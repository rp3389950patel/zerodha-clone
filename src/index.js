import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import HomePage from './landing_page/homepage/HomePage';
import Signup from './landing_page/signuppage/Signup';
import AboutPage from './landing_page/aboutpage/AboutPage';
import ProductPage from './landing_page/productpage/ProductPage';
import PricingPage from './landing_page/pricingpage/PricingPage';
import Supportpage from './landing_page/supportpage/Supportpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


