// components/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="alt-bilgi">
            <div className="footer-icerik">
                <div className="footer-bolum">
                    <h4>Hızlı Erişim</h4>
                    <p><i className="fas fa-info-circle"></i><a href="/hakkimizda">Hakkımızda</a></p>
                    <p><i className="fas fa-calendar-check"></i><a
                        href="https://wa.me/905415624921?text=Merhaba, bilgi almak istiyorum.">Randevu Al</a></p>
                    <p><i className="fas fa-phone-alt"></i><a href="/iletisim">İletişime Geç</a></p>
                </div>

                <div className="footer-bolum">
                    <h4>İletişim</h4>
                    <p><i className="fas fa-phone"></i> (0541) 562 49 21 </p>
                    <p><i className="fas fa-envelope"></i> serap.ekin.12@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;