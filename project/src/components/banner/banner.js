import React from 'react';
import './banner.css';
import img1 from '../Assests/bmw-m-series-seo-overview-ms-04.jpg'; // Example image, replace with your actual image paths
// import img2 from '../Assests/images (1).jpeg';
import img2 from '../Assests/images.jpeg';
import img3 from '../Assests/desktop_banner_modi_0.png';
import ProductCards from "../productCards/productCards"

const Banner = () => {
    const images = [img1,
                    img2,
                    img3]; 
    return (
    <div className='full-banner'>
        <div className="banner">
            <h1>Eco-Friendly Bamboo Products</h1>
            
            <div className="circle-images-container">
            {images.map((imgSrc, index) => (
                <div key={index} className="image-wrapper">
                    <img src={imgSrc} alt={`Image ${index + 1}`} className="circle-image" />
                </div>
            ))}
        </div>
        </div>
        
            <ProductCards/>
</div>
    );
}

export default Banner;
