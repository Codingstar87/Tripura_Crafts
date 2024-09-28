import React from "react";
import "./banner.css";
import img1 from "../Assests3/idcard1.jpg";
import img2 from "../Assests3/bottle3.jpg";
import img3 from "../Assests3/bottle2.jpg";

import companylogo from "../Assests/company-logo.jpg";

const Banner = React.forwardRef((props,ref) => {
  const images = [img1, img2, img3];
  console.log(ref)
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="full-banner">
      <div className="banner">
        <h1>Eco-Friendly Bamboo Products</h1>
        <p className="subtitle">Sustainable solutions for a better tomorrow</p>

        <div className="circle-images-container">
          {images.map((imgSrc, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={imgSrc}
                alt={`Product Image ${index + 1}`}
                className="circle-image"
              />
            </div>
          ))}
        </div>

        <button className="cta-button" onClick={handleScroll}>Explore Our Products</button>

        <div className="companyName">
          <img src={companylogo} alt="Company Logo" className="company-logo" />
          <h2>EcoWorld Zilpa Producer Company Limited</h2>
        </div>
      </div>
    </div>

  );
});

export default Banner;

// import React from 'react';
// import './banner.css';
// import img1 from '../Assests/bmw-m-series-seo-overview-ms-04.jpg';
// import img2 from '../Assests/images.jpeg';
// import img3 from '../Assests/desktop_banner_modi_0.png';
// import ProductCards from "../productCards/productCards"
// import companylogo from "../Assests/company-logo.jpg"

// const Banner = () => {
//     const images = [img1,
//                     img2,
//                     img3];
//     return (
//     <div className='full-banner'>
//         <div className="banner">
//             <h1>Eco-Friendly Bamboo Products</h1>

//             <div className="circle-images-container">
//             {images.map((imgSrc, index) => (
//                 <div key={index} className="image-wrapper">
//                     <img src={imgSrc} alt={`Image ${index + 1}`} className="circle-image" />
//                 </div>
//             ))}
//         </div>
//             <div className='companyName'>
//             <img src={companylogo} alt="comany-logo" className="company-logo" />
//             <h2>EcoWorld Zilpa Producer Company Limited</h2>
//             </div>
//         </div>

//             <ProductCards/>
// </div>
//     );
// }

// export default Banner;
