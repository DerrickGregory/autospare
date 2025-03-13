import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Category() {
  const starRating = 4.5; // Example star rating value
  const defaultReview = {
    name: 'John Doe',
    title: 'Satisfied Customer',
    description: 'I had a great experience with this product. It exceeded my expectations and I highly recommend it!',
    date: new Date().toLocaleDateString(),
  };

  // Function to generate star icons based on the rating
  const renderStarRating = () => {
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    return stars;
  };

  return (
    <div className="row">
     

           <Card className='col-md-4 ' style={{backgroundSize:'cover',backgroundImage:`url('/images/cwallet.webp')`,height:'20em'}}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating"></div>
                <small>Categories</small>
              </div>
              <Card.Title>Wallet</Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>6 Items</Card.Text>
            </Card.Body>
          </Card>


                <Card className='col-md-4 ' style={{backgroundSize:'cover',backgroundImage:`url('/images/cbags.webp')`,height:'20em'}}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating"></div>
                <small>Categories</small>
              </div>
              <Card.Title>Bags</Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>6 Items</Card.Text>
            </Card.Body>
          </Card>


      <Card className='col-md-4' style={{backgroundSize:'cover',backgroundImage:`url('/images/cpacks.webp')`,height:'20em'}}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating"></div>
                <small>Categories</small>
              </div>
              <Card.Title>Backpacks</Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>6 Items</Card.Text>
            </Card.Body>
          </Card>

 
 


 
 
    </div>
  );
}
