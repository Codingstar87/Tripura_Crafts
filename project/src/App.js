import React, { Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Lazy load the components
const Header = React.lazy(() => import('./components/header/header.js'));
const Banner = React.lazy(() => import('./components/banner/banner.js'));
const Products = React.lazy(() => import('./components/products/products.js'));
const Footer = React.lazy(() => import('./components/footer/footer.js'));
const WhatsApp = React.lazy(() => import('./components/Whatsapp/Whatsapp.js'));
const SmallBanner = React.lazy(() => import('./components/smallbanner/smallbanner.js'));
const ProductCards = React.lazy(() => import('./components/productCards/productCards.js'));
const ComingSoon = React.lazy(() => import('./components/CommingSoon/ComingSoon.js'));

function App() {
  // Ref for the products section
  const productsRef = useRef(null);

  // Function to scroll to products
  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header onProductsClick={scrollToProducts} />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <div style={{ marginBottom: '10px' }}></div>
              <ProductCards />
              <SmallBanner />
              {/* Products section */}
              <div ref={productsRef}>
                <Products />
              </div>
              <Footer />
              <WhatsApp />
            </>
          } />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
