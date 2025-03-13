import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storeProducts } from '../utils/data'; // Assuming storeProducts is exported from data.js
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
function ProductDetails() {
  const { id } = useParams(); // Get the ID from route parameters
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
 const navigate = useNavigate();
  // Function to filter products by ID
  const getProductById = (productId) => {
    return storeProducts.find((product) => product.id === parseInt(productId));
  };

  // Set the product state when the component mounts
  useEffect(() => {
    const selectedProduct = getProductById(id);
    setProduct(selectedProduct);
  }, [id]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    setCart([...cart, product]); // Add the selected product to the cart
         toast.success(
        <div className="custom-card mb-3">
      <img src={product.img} className="custom-img" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{product.title}</h5>

        <p className="custom-card-text">Price: Ksh {product.price}</p>
      </div>
 
    </div>
    );

  };


    const buyNow= () => {
    setCart([...cart, product]); // Add the selected product to the cart
         toast.success(
        <div className="custom-card mb-3">
      <img src={product.img} className="custom-img" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{product.title}</h5>

        <p className="custom-card-text">Price: Ksh {product.price}</p>
      </div>
 
    </div>
    );

         navigate('/cart')

  };

  if (!product) {
    return <div>Loading...</div>; // Or handle loading state accordingly
  }

  return (
    <>
      <ToastContainer />
    <div className='container py-5'>
      <div className='row'>
        <div className='col-10 col-md-6'>
          <img src={product.img} className='img-fluid' alt='' />
        </div>
        <div className='col-10 col-md-6 mt-5'>
          <h5 className="card-title">{product.title}</h5><br />
          <h5 className="card-title">{product.subject}</h5>
          <p className="card-text">{product.info?.substring(0, 200)}</p>
          <h5 className="card-price">{product.price}</h5>
          <div type="button" className="button-container">
            <button className="nav_btn m-2" onClick={addToCart}>Add To Cart</button>
            <button className="nav_btn" onClick={buyNow}>Buy it now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetails;
