import jumboData from '../utils/about.json';
import '../assets/jumbo.css';
import { IoArrowBack } from "react-icons/io5";
import { Card } from 'react-bootstrap';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function About() {
  return (
    <>
 <header className='banner'>
       <div className="container">
<IoArrowBack /> Back to Home
<h1 className="h-title margin-top">Shipping & Delivery</h1>
<h2 className="subtitle margin-top">We value the diverse perspectives and experiences of our users, and we encourage<br />
 collaboration and community engagement. Our platform provides opportunities for users<br /> to contribute their knowledge, 
 share their opinions, and engage in discussions with like-minded individuals.  </h2>
</div>
    </header>

    <div className="container">
    
     <div className="row">
  <h1 className="title">Shipping & Delivery</h1>
     
            
            <h2 className="subtitle">Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are hazardous materials, or flammable liquids or gases.
Additional non-returnable items: 
Gift cards
Downloadable software products 
Some health and personal care items
To complete your return, we require a receipt or proof of purchase.
Please do not send your purchase back to the manufacturer.
There are certain situations where only partial refunds are granted (if applicable)
Book with obvious signs of use 
CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened 
Any item not in its original condition, is damaged or missing parts for reasons not due to our error 
Any item that is returned more than 30 days after delivery</h2>
          </div>








               <div className="row">
  <h1 className="title">Refunds (if applicable)</h1>
     
            
            <h2 className="subtitle">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. 
If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
Late or missing refunds (if applicable) 
If you haven’t received a refund yet, first check your bank account again. 
Then contact your credit card company, it may take some time before your refund is officially posted. 
Next contact your bank. There is often some processing time before a refund is posted.
If you’ve done all of this and you still have not received your refund yet, please contact us at themesupport@shopify.com.
Sale items (if applicable) 
Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</h2>
          </div>




               <div className="row">
  <h1 className="title">Gifts</h1>
     
            
            <h2 className="subtitle">If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</h2>
          </div>


          


</div>
    
    </>
  );
}
