import React from 'react';
import './productCards.css';
import image1 from "../Assets2/bottle3.jpg"
import image2 from "../Assets2/wavinglamp2.jpg"


const ProductCards = () => {
    return (
        <div className="product-cards">
            <div className="card" style={{ backgroundImage: `url(${image1})` }}>
                <div className="card-content">
                    <h2>Close To Nature</h2>
                    <p>Switch to bamboo and contribute towards making the world ecofriendly.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${image2})` }}>
                <div className="card-content">
                    <h2>Being With Nature</h2>
                    <p>Nurture the planet by making a small switch towards the bamboo toothbrush.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url('../Assests/WhatsApp Image 2024-09-22 at 01.53.30_1c32b0c9.jpg')` }}>
                <div className="card-content">
                    <h2>Make The Switch</h2>
                    <p>Using bamboo toothbrushes would help in reducing the plastic wastage.</p>
                    {/* <a href="#shop-now" className="shop-link">Shop Now +</a> */}
                </div>
            </div>
        </div>
    );
}

export default ProductCards;
