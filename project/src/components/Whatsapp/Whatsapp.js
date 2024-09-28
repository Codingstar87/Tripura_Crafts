import React from 'react';
import wplogo from "../Assets2/whatsapp.png";
import "./Whatsapp.css"

const WhatsApp = () => {
    return (
        <div className='fix-bottom' style={{zIndex: "9999", position: 'fixed'}}>
            <a href="https://wa.me/+916009966876" target='_blank' rel='noopener noreferrer'>
                <img src={wplogo} width="60" alt='WhatsApp Logo' />
            </a>
        </div>
    );
};

export default WhatsApp;
