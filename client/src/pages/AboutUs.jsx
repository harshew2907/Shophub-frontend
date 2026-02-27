import React from 'react';
import '../styles/aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About ShopHub</h1>
      <div className="about-content">
        <section>
          <h2>Who We Are</h2>
          <p>
            ShopHub is a leading e-commerce platform dedicated to providing customers with 
            quality products at competitive prices. Founded in 2020, we have rapidly grown to 
            become a trusted destination for millions of shoppers worldwide.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping convenient, affordable, and enjoyable for everyone.
            We strive to offer the best selection of products with excellent customer service.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of high-quality products</li>
            <li>Competitive prices and regular discounts</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
            <li>Secure payment options</li>
            <li>Easy returns and exchanges</li>
          </ul>
        </section>

        <section>
          <h2>Our Values</h2>
          <p>
            We believe in integrity, customer satisfaction, and continuous improvement. 
            Every decision we make is guided by our commitment to our customers and the communities we serve.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
