import React from 'react';
import './whatsapp.css';

const WatsapButon = () => {
    return (

        <div>
            <a href="https://wa.me/905415624921?text=Merhaba, web sitenizden iletişime geçiyorum. Ürün ve hizmetleriniz hakkında bilgi almak istiyorum"
                className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>

        </div>
    );
};

export default WatsapButon;