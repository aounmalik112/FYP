import React from 'react';
import './AboutUs.css';
import sabihImage from '../images/sabihimage.jpeg'; // Example image paths
import aounImage from '../images/aounimage.jpeg';
import hassnainImage from '../images/hassnainimage.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our Real Estate Management System. We are dedicated to
          revolutionizing the real estate industry through transparency,
          efficiency, and innovation.
        </p>
      </div>
      <div className="about-us-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify and secure the real estate management
            process for all stakeholders by leveraging cutting-edge blockchain
            technology.
          </p>
        </section>
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={sabihImage} alt="Muhammad Sabih Ul Hassan" className="team-image" />
              <h3>Muhammad Sabih Ul Hassan</h3>
              <p>User Interface, Liquidity, Fractional Ownership</p>
            </div>
            <div className="team-member">
              <img src={aounImage} alt="Muhammad Aoun Tariq" className="team-image" />
              <h3>Muhammad Aoun Tariq</h3>
              <p>Digital Passport, Voting/Tokenization</p>
            </div>
            <div className="team-member">
              <img src={hassnainImage} alt="Hassnain Abbas" className="team-image" />
              <h3>Hassnain Abbas</h3>
              <p>Transparency, Integration in Filing System</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
