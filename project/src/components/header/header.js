import React from 'react';
import './header.css'; // Ensure you have styling in place
import logo from '../Assests/WhatsApp Image 2024-09-22 at 01.53.30_1c32b0c9.jpg'; // Adjust the path to your logo image

const Header = () => {
    return (
        <header className="header">
                <h1>Bamboo Clone</h1>
            <div className="logo">
                <img src={logo} alt="Bamboo Clone Logo" className="logo-image" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
