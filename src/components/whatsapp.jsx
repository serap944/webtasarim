import React from 'react';
import './whatsapp.css';

const WatsapButon = () => {

    const handleWhatsAppClick = () => {
        // Google Analytics / Google Ads event
        if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
                event_category: 'contact',
                event_label: 'whatsapp_button'
            });
        }
    };

    return (
        <div>
            <a
                href="https://wa.me/905415624921?text=Merhaba, web sitenizden iletişime geçiyorum. Ürün ve hizmetleriniz hakkında bilgi almak istiyorum"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default WatsapButon;