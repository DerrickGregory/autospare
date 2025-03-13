import { React, useState, useContext } from 'react'
import '../assets/form.css';
import { IoArrowBack } from "react-icons/io5";


export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const isInvalid = !firstName || !lastName || !emailAddress || !phoneNumber || !message;


  const handleSignIn = (event) => {
    event.preventDefault();
    // Your sign in logic here
  };

  return (
    <div className=''>
     <header className='banner'>
       <div className="container">
<IoArrowBack /> Back to Home
<h1 className="h-title margin-top">Contact With Us</h1>
<h2 className="subtitle margin-top">With that in mind, we strive to deliver accurate, trustworthy,
 and engaging<br /> content to our users. Our team of experts, researchers, and writers work<br /> tirelessly to 
 curate high-quality articles, guides,
 and resources that cover<br /> various domains such as technology, science, health, business, and more  </h2>
</div>
    </header>
<div className="container">
  <div className="row">
   <div className='title'>Contact</div>
    <div className="col-md-6">
     
     
        <div className="contact-info">
          <div>Call us</div>
          <div>+254 70000000</div>
          <div>EMAIL:</div>
          <div>shop@company.com</div>
          <div>ADDRESS:</div>
          <div>Nakuru,Keny</div>
        </div>
      </div>
  
    <div className="col-md-6">
      {error && <div className='error'>{error}</div>}

      <form  className="card" style={{ background: "white",color:"black", padding:"1rem" }} onSubmit={handleSignIn}>
        <div className='input-row'>
          {/*<label htmlFor="firstName">First Name</label>*/}
          <input
            id="firstName"
            className='input'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/*<label htmlFor="lastName">Last Name</label>*/}
          <input
            id="lastName"
            className='input'
            type='text'
            placeholder='Last Name'
            autoComplete='off'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='input-row'>
          {/*<label htmlFor="email">Email address</label>*/}
          <input
            id="email"
            className='input'
            type='text'
            placeholder='Email address'
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          {/*<label htmlFor="phoneNumber">Phone Number</label>*/}
          <input
            id="phoneNumber"
            className='input'
            type='text'
            placeholder='Phone Number'
            autoComplete='off'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='input-row'>
          {/*<label htmlFor="message">Message</label>*/}
          <textarea
            id="message"
            className='input description'
            placeholder='How can we help you'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className={`submit ${isInvalid ? 'disabled' : ''}`} disabled={isInvalid} type='submit'>
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
<div className="row">
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.638571257481!2d36.81292631427335!3d-1.2868149990634515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18298c805a9f%3A0xe30a780beb94b18d!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1649531312963!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </div>

    </div>
  );
}