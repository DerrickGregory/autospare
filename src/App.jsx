import React from 'react';
import  Home  from './pages/home'
import {  Nav } from './components'
import Footer from './components/footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/Details";
import Shop from "./pages/shop";
import About from "./pages/About";
import Delivery from "./pages/delivery";
import Contact from "./pages/Contact";
import Cart from "./pages/cart";
import './app.css'

export default function App() {


  return (
    <>
     <BrowserRouter>
     <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/product" element={<Shop />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/delivery" element={<Delivery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </>

  ) 
}