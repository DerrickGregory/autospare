import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import Category from "../components/category";
import '../assets/banner.css'
import { storeProducts } from '../utils/data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ImQuotesLeft } from "react-icons/im";
import jumboData from '../utils/jumbo.json'
import Pagination from '../components/pagination';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/PartsSection.css';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

import Testimonial from '../components/Testimonial';
import CarBrandsCarousel from '../components/CarBrandsCarousel';
import { carLocation,makeOptions,vehicleTypes,brandOptions, carBrands,items, testimonials, typeItems } from '../utils/carData';





export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [email, setEmail] = useState('');
  const [banner, setBanner] = useState([])
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState(storeProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsPerPage] = useState(10);


    const images = [
    '/images/banner/banner2.png',
    '/images/banner/banner3.png',
    '/images/banner/banner4.png',
  ];


  const parts = [
  { name: 'Spark Plug', image: '/images/parts/sparkplug.webp' },
  { name: 'Air Filter', image: '/images/parts/airfilter.webp' },
  { name: 'Oil Filter', image: '/images/parts/oilfilter.webp' },
  { name: 'Fuel Filter', image: '/images/parts/fuelfilter.webp' },
  { name: 'Cabin Filter', image: '/images/parts/cabinfilter.webp' },
  { name: 'Engine Oil', image: '/images/parts/engineoil.webp' },
  { name: 'Brake Pad', image: '/images/parts/brakepad.webp' },
  { name: 'Brake Disc', image: '/images/parts/brakedisc.webp' },
  { name: 'Shock Absorber', image: '/images/parts/shockabsorber.webp' },
  { name: 'Coil Spring', image: '/images/parts/coilspring.webp' },
  { name: 'Wiper', image: '/images/parts/wiper.webp' },
  { name: 'Battery', image: '/images/parts/battery.webp' },
];



     useEffect(() => {
    // Calculate total pages when filtered products change
    setTotalPages(Math.ceil(storeProducts.length / productsPerPage));
  }, [filteredProducts, productsPerPage]);

  useEffect(() => {
    // Update filtered products based on pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setFilteredProducts(storeProducts.slice(startIndex, endIndex));
  }, [currentPage, productsPerPage]);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    async function fetchData() {
      setBanner(jumboData[Math.floor(Math.random() * jumboData.length)]);
    }
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    const filteredBanner = jumboData.find((item) => item.category === category);
    setBanner(filteredBanner);
  };



const handleCatChange = (category) => {
    const filteredItems = storeProducts.filter((item) => item.category === category);
    setItems(filteredItems);
};




  const handleSubmit = async (event) => {
    event.preventDefault();


      toast('An error occurred while sending the email. Please try again.');

  };

  return (
    <>
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: '75vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>


        <section className="parts-section">
      <h2 className="text-center mb-5">
        Shop By <span className="highlight">Parts</span>
      </h2>
      <div className="row">
        {parts.map((part, index) => (
          <div key={index} className="col-md-2 col-4 text-center mb-4">
            <img src={part.image} alt={part.name} className="part-img" />
            <p>{part.name}</p>
          </div>
        ))}
      </div>
    </section>



 <div className="container">
  <h2 className="text-center mb-5">
        Product <span className="highlight">Center</span>
      </h2>
 <div className="row">

   
        {filteredProducts.slice(0, 4).map(product => (
              <div className="product-wrapper mx-auto col-md-3 mt-3">
      <div className="card" style={{ background: "white" }}>
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            info={product.info}
            img={product.img}
            price={product.price}
            inCart={product.inCart}
          />
          </div>
      </div>
        ))}

              <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
</div>
</div>







<div className="row align-items-center justify-content-center">
  <div className="col-4 col-md-4 text-center">
    <img className="left-image img-fluid" src="/images/left.webp" alt="Product Image" />
  </div>
  <div className="col-8 col-md-4 text-center">
    <img className="avatar avatar-md shadow-xl mb-2" src="/images/customer-service.png" alt="bruce" loading="lazy" />
    <p className="mb-1">Have any questions?</p>
    <h1 className="text-gradient text-warning">(+254) 700 888 666</h1>
  </div>
  <div className="col-4 col-md-4 text-center">
    <img className="right-image img-fluid" src="/images/right.webp" alt="Product Image" />
  </div>
</div>



<div  style={{ backgroundImage: `url(/images/road.jpg)` }}>
  <Testimonial testimonials={testimonials} />
</div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <h3 className="text-gradient text-warning mb-0">About us</h3>
            <h3>Toyota AutoSpare</h3>

               <p className="pe-md-5 mb-4">
          Welcome to Toyota AutoSpare, your ultimate destination for high-quality automotive spare parts.
            </p>

            <p className="pe-md-5 mb-4">
          Welcome to AutoSpare Hub, your ultimate destination for high-quality automotive spare parts.

At  Toyota AutoSpare, we are dedicated to transforming the auto spare parts industry by providing a seamless platform where customers can easily access a wide range of genuine and affordable spare parts. Our mission is to bridge the gap between suppliers and customers, ensuring reliability, efficiency, and customer satisfaction.
              </p>
            <p className="pe-md-5 mb-4">
            With a focus on quality and innovation, we aim to simplify the process of finding the right parts for your vehicle while offering competitive pricing and fast delivery services. Whether you're a mechanic, a car enthusiast, or a regular vehicle owner, AutoSpare Hub is here to meet your needs and keep your car running smoothly.
            </p>
            <p className="pe-md-5 mb-4">
            Join us on this journey as we revolutionize the auto spare parts market, one part at a time.
            </p>
            <a href="/about" className="bg-gradient-warning mb-5 mb-sm-0">
              <Button variant="warning" className="bg-gradient-warning mb-5 mb-sm-0">
   Learn More
  </Button>
  </a>
          </div>
          <div className="col-md-4">
      
              <img className="w-100" src="/images/ban.jpg" alt="Product Image" />
            
          </div>
        </div>
      </div>
  <Container className="my-5">
    <Row className="mb-3">
      <Col lg={8}>
        <h3>I WANT TO SEARCH FOR</h3>
      </Col>
    </Row>


        <Row>
          {typeItems.map((item, index) => (
            <Col key={index} xs={6} md={3} className="mb-3">
              <Card bg="white" text="black" className="shadow-lg">
                <Card.Img src={item.imageUrl} alt="Card image" className="p-4"/>
                <Card.ImgOverlay>
                  <Card.Title>{item.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
  
    </>
  )
}