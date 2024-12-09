import React, { useState, useEffect } from 'react';
import './Home.css'; 
import prop4 from '../images/prop4.jpg';
import prop1 from '../images/prop1.jpg';
import prop2 from '../images/prop2.jpg';
import prop3 from '../images/prop3.jpg';
import prop5 from '../images/prop5.jpg';
import apartment from '../images/apartment.png';
import condominium from '../images/condominium.png';
import deal from '../images/deal.png';
import luxury from '../images/luxury.png';
import housing from '../images/apartment.png';
import villa from '../images/villa.png';
import house from '../images/house.png';
import neighborhood from '../images/icon-neighborhood.png';
import picture1 from '../images/picture1.jpg'; 
import pic4 from '../images/pic4.jpg'; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [prop4, prop1, prop2, prop3, prop5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-text">
            <h1>Your Family’s New Beginning Starts with the Right Home, Where Every Moment Matters</h1>
            <p>
              We are pioneering the future of real estate with cutting-edge blockchain technology. 
              Explore our innovative solutions designed to bring transparency, efficiency, and security 
              to the real estate industry.
            </p>
            <a href="#property-types" className="learn-more-button">Learn More</a>
          </div>

          {/* Image Carousel with Navigation Arrows */}
          <div className="welcome-image-container">
            <button className="arrow arrow-left" onClick={prevImage}>❮</button>
            <img src={images[currentIndex]} alt="Home" className="welcome-image" />
            <button className="arrow arrow-right" onClick={nextImage}>❯</button>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section id="property-types" className="property-types-section">
        <h2 style={{ color: '#27ae60' }}>Property Types</h2>
        <p>
          Our blockchain-based real estate management system categorizes properties for enhanced transparency and efficiency. 
          By providing immutable records, we empower buyers and sellers to verify ownership and transaction history seamlessly, 
          fostering trust in every property transaction.
        </p>

        {/* Property Icons Grid */}
        <div className="property-icons-grid">
          <div className="property-icon">
            <img src={apartment} alt="Apartment" />
            <p>Apartment</p>
            <p>12 Properties</p>
          </div>
          <div className="property-icon">
            <img src={villa} alt="Villa" />
            <p>Villa</p>
            <p>8 Properties</p>
          </div>
          <div className="property-icon">
            <img src={house} alt="Home" />
            <p>Home</p>
            <p>15 Properties</p>
          </div>
          <div className="property-icon">
            <img src={luxury} alt="Office" />
            <p>Office</p>
            <p>5 Properties</p>
          </div>
          <div className="property-icon">
            <img src={neighborhood} alt="Building" />
            <p>Building</p>
            <p>3 Properties</p>
          </div>
          <div className="property-icon">
            <img src={housing} alt="Townhouse" />
            <p>Townhouse</p>
            <p>4 Properties</p>
          </div>
          <div className="property-icon">
            <img src={deal} alt="Shop" />
            <p>Shop</p>
            <p>6 Properties</p>
          </div>
          <div className="property-icon">
            <img src={condominium} alt="Garage" />
            <p>Garage</p>
            <p>2 Properties</p>
          </div>
        </div>
      </section>

      {/* Property Highlight Section */}
      <section className="property-highlight-section">
        <div className="property-highlight-container">
          {/* Image on the right */}
          <div className="highlight-image">
            <img src={prop5} alt="Property Highlight" className="large-property-image" />
          </div>

          {/* Text on the left */}
          <div className="highlight-text">
            <h2>#1 Place To Find The Perfect Property</h2>
            <p>
              Whether you're looking to buy your dream home or invest in prime real estate, we are your go-to platform for finding the perfect property. 
              Explore top locations across Pakistan, including Islamabad, Lahore, Karachi, Faisalabad, and more. 
              Our platform offers unparalleled transparency and security for all your real estate transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="property-listings-section">
        <h2 style={{ color: '#27ae60' }}>Featured Properties</h2>
        <p>Explore our exclusive property listings across major cities. Click on each property to know more.</p>

        {/* Property Listings Grid */}
        <div className="property-listings-grid">
          <div className="property-listing">
            <p><img src={picture1} alt="Location" /> Available in: Islamabad, Lahore</p> 
            <h3>Apartment</h3>
          </div>
          <div className="property-listing">
            <p><img src={prop2} alt="Location" /> Available in: Karachi, Faisalabad</p>
            <h3>Villa</h3>
          </div>
          <div className="property-listing">
            <p><img src={prop1} alt="Location" /> Available in: Islamabad</p>
            <h3>Offices</h3>
          </div>
          <div className="property-listing">
            <p><img src={pic4} alt="Location" /> Available in: Lahore, Karachi</p>
            <h3>Building</h3>
          </div>
          <div className="property-listing">
            <p><img src={picture1} alt="Location" /> Available in: Faisalabad, Islamabad</p>
            <h3>Home</h3>
          </div>
          <div className="property-listing">
            <p><img src={prop5} alt="Location" /> Available in: Karachi, Lahore</p>
            <h3>Shop</h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Our Clients Say!</h2>
        <p>We take pride in providing exceptional service to our clients.</p>
        {/* Add testimonial content here */}
      </section>
    </div>
  );
};

export default Home;
