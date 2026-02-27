import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      title: "Welcome to ShopHub",
      subtitle: "Discover amazing products at unbeatable prices",
      cta: "Start Shopping"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      title: "New Tech Arrivals",
      subtitle: "Upgrade your lifestyle with our latest gadgets",
      cta: "Explore Tech"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      title: "Quality Guaranteed",
      subtitle: "Curated collections from top global brands",
      cta: "View Collections"
    }
  ];

  // Auto-scroll logic for Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="hero-carousel">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <Link to="/products" className="hero-btn">
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active-dot' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* 2. FEATURES SECTION (Your Original Elements) */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Fast Shipping</h3>
          <p>Get your orders delivered quickly to your doorstep</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Best Prices</h3>
          <p>Competitive pricing on all products</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✅</div>
          <h3>Quality Assured</h3>
          <p>All products are carefully curated for quality</p>
        </div>
      </section>

      {/* 3. CALL TO ACTION / CATEGORY PREVIEW SECTION */}
      <section className="home-cta-section">
        <div className="cta-box">
          <h2>Ready to find your next favorite item?</h2>
          <p>Browse through our extensive catalog of electronics, clothing, and more.</p>
          <Link to="/products" className="secondary-btn">Browse Catalog</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;