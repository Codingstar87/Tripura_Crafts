import React from 'react';
import './products.css';

const Products = () => {
    const products = [
        { name: 'Bamboo Toothbrush', price: '$5', img: 'https://picsum.photos/200' },
        { name: 'Bamboo Straw', price: '$2', img: 'https://picsum.photos/201' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/202' },
        { name: 'Bamboo Toothbrush', price: '$5', img: 'https://picsum.photos/203' },
        { name: 'Bamboo Straw', price: '$2', img: 'https://picsum.photos/204' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/205' },
        { name: 'Bamboo Toothbrush', price: '$5', img: 'https://picsum.photos/206' },
        { name: 'Bamboo Straw', price: '$2', img: 'https://picsum.photos/207' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/208' },
        { name: 'Bamboo Toothbrush', price: '$5', img: 'https://picsum.photos/209' },
        { name: 'Bamboo Straw', price: '$2', img: 'https://picsum.photos/210' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/211' },
        { name: 'Bamboo Toothbrush', price: '$5', img: 'https://picsum.photos/212' },
        { name: 'Bamboo Straw', price: '$2', img: 'https://picsum.photos/213' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/214' },
        { name: 'Bamboo Cutlery Set', price: '$10', img: 'https://picsum.photos/215' },
    ];

    return (
        <section className="products">
            <h3>Our Products</h3>
            <div className="product-list">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.img} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
