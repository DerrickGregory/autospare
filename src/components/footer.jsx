import { React, useState } from 'react'
import { toast } from 'react-toastify';
import '../assets/footer.css'; // Import your CSS file

import '../assets/form.css'; 
import { SlSocialYoutube } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {

     const [email, setEmail] = useState('');

   const handleSubmit = async (event) => {
    event.preventDefault();

      toast('An error occurred while sending the email. Please try again.');

  };

  return (
    <footer className="footer">
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
         <h3 className="footer-title">Subscribe newsletter<br /> <span className="orange">and get 20% off</span></h3>
        <p className="footer-text">
          Subscribe to our subscription service and elevate your vehicle to new heights. 
          With our subscription, you'll receive carefully curated, high quality products delivered.
        </p>

<form className="base mt-4 container">

 
    <input
      className="input"
      type="email"
      placeholder="Email address"
      value={email}
      onChange={({ target }) => setEmail(target.value)}
    />
    <button className="submit" >Subscribe</button>
 
</form>


                     
        </div>

         <div className="col-md-4">
          <h3 className="footer-title" style={{ paddingLeft:"2rem" }}>Page</h3>
          <ul >
         <a href="/product"> <li className="footer-link">Products</li></a>
          <a href="/about"><li className="footer-link">About Us</li></a>

         <a href="/contact"> <li className="footer-link">Contact</li></a>


          </ul>


         </div>
        <div className="col-md-4">
          <div className="footer-link">
          <h3 className="footer-title" >Link</h3>
            <button className="footer-button"><SlSocialYoutube /></button>
            <button className="footer-button"><SiWhatsapp /></button>
            <button className="footer-button"><FaInstagram /></button>
            <button className="footer-button"><RiTwitterXFill /></button>
         
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
