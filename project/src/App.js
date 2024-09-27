import React from 'react';
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import Products from './components/products/products.js';
import Footer from './components/footer/footer.js';

import './App.css'; // Main CSS file
import WhatsApp from "../src/components/Whatsapp/Whatsapp.js";
import SmallBanner from './smallbanner/smallbanner.js';

function App() {
    return (
        <>
        <div className="App">
            <Header />
            <Banner />
            <SmallBanner/>
            <Products />
            <Footer />
            <WhatsApp/>
        </div>
        </>
        
    );
}

export default App;
