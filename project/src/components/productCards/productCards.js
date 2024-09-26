import React from 'react';
import './productCards.css';
import image1 from "../Assets2/bottle3.jpg"
import image2 from "../Assets2/wavinglamp2.jpg"
import image3 from "../Assests/PXL_20240923_160107762.jpg"


const ProductCards = () => {
    return (
        <div className="product-cards">
            <div className="card" style={{ backgroundImage: `url(${image1})` }}>
                <div className="card-content">
                    <h2>Close To Nature</h2>
                    <p>We believe in nurturing a greener planet.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${image2})` }}>
                <div className="card-content">
                    <h2>Being With Nature</h2>
                    <p>Our eco-friendly bamboo products offer a sustainable alternative to plastic.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${image3})` }}>
                <div className="card-content">
                    <h2>Make The Switch</h2>
                    <p>Helping you make responsible choices for the environment.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>
        </div>
    );
}

export default ProductCards;
