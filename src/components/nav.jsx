import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from '@mui/material/Modal';
import { FaCartShopping } from "react-icons/fa6";
import '../assets/nav.css'; // Import custom CSS for navigation styling

const Navigation = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log('error');
  };

  const [open, setOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State to track the number of items in the cart

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItemCount(storedCart.length);
    }
  }, []);

  return (
    <Navbar  expand="lg" className="nav-bar">
    <div className="container">
      <Navbar.Brand href="/" className="logo-container">
      <img className="nav_logo" src="/images/our-cars.svg"/>
        AutoSpare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-items-center link-container">
         <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Products</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
    
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="button-container">
          <Nav.Link href="/cart" onClick={handleOpen} className="cart-icon">
            <FaCartShopping className="cart_logo" />
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
