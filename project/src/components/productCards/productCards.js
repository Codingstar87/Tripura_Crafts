import React from "react";
import "./productCards.css";
import image1 from "../Assets2/bottle3.jpg";
import image2 from "../Assets2/wavinglamp2.jpg";
import image3 from "../Assests/PXL_20240923_160107762.jpg";  // Fix typo from Assests to Assets
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCards = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,  
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={3000} 
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="card" style={{ backgroundImage: `url(${image1})` }}>
        <div className="card-content">
          <h2>Close To Nature</h2>
          <p>We believe in nurturing a greener planet.</p>
        </div>
      </div>

      <div className="card" style={{ backgroundImage: `url(${image2})` }}>
        <div className="card-content">
          <h2>Being With Nature</h2>
          <p>Our eco-friendly bamboo products offer a sustainable alternative to plastic.</p>
        </div>
      </div>

      <div className="card" style={{ backgroundImage: `url(${image3})` }}>
        <div className="card-content">
          <h2>Make The Switch</h2>
          <p>Helping you make responsible choices for the environment.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default ProductCards;
