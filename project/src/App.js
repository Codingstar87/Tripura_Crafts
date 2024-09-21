import React from 'react';
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import Products from './components/products/products.js';
import Footer from './components/footer/footer.js';

import './App.css'; // Main CSS file

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
