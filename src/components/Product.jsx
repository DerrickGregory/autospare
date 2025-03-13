import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/product.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaCartShopping } from "react-icons/fa6";

export default function Product({ id, title, img, price, info }) {

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(item => item.id === id);
    
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ id, title, img, price, quantity: 1 });
       toast.success(
        <div className="custom-card mb-3">
      <img src={img} className="custom-img" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>

        <p className="custom-card-text">Price: Ksh {price}</p>
      </div>
 
    </div>
    );

 

    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
 
  };
  return (
    <>
     <ToastContainer />
      <div className="img-container position-relative">
        <img src={img} alt="" className="card-img-top product" />
        <button className="cart-btn color" onClick={addToCart}>
          <FaCartShopping />
        </button>
      </div>
      <Link to={`/details/${id}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       
        <h5 className="card-price">{price}</h5>
      </div>
    </Link>
    </>
  );
}
