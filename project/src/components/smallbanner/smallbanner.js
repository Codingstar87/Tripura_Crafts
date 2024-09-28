import React from 'react';
import './smallbanner.css'; 
import bannerimg from "../Assests/banner.jpg"; // Ensure the correct file path

const SmallBanner = () => {
  return (
    <div className="small-banner">
      <div className="small-banner-text">
        <h1>Best Bamboo Products from us</h1>
        <p>
        We believe in nurturing a greener planet. Our eco-friendly bamboo products offer a sustainable alternative to plastic, helping you make responsible choices for the environment.
        </p>
        <a href="#" className="shop-now-btn">Shop Now</a>
      </div>
      <div className="small-banner-image">
        <img src={bannerimg} alt="Kid holding bamboo toothbrush" />
      </div>
    </div>
  );
};

export default SmallBanner;

