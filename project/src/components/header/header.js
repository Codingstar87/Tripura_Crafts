import React from 'react';
import './header.css'; // Create a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Bamboo Clone</h1>
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
