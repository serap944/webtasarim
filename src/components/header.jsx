import React, { useState } from 'react'; // React ve useState kancasını içe aktar
import { Link, useNavigate } from 'react-router-dom'; // React Router'dan gerekli bileşenleri içe aktar
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const scrollToForm = () => {
        navigate('/');
        setTimeout(() => {
            const formSection = document.getElementById('teklif-formu');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header>
            <nav className="menu-cubugu">
                <h2 className="logo">
                    <Link to="/" onClick={handleLinkClick}>Noradark</Link>
                </h2>
                <div className="teklif">
                    <button onClick={scrollToForm} className="teklif-butonu">
                        aranma talebi
                    </button>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <ul className={`linklerim ${isMenuOpen ? 'aktiflik' : ''}`}>
                    <li className="menu-oge">
                        <Link to="/" onClick={handleLinkClick}>anasayfa</Link>
                    </li>
                    <li className={`menu-oge acilir ${isDropdownOpen ? 'open' : ''}`}>
                        <button className="acilir-toggle" onClick={toggleDropdown}>
                            hizmetlerimiz <i className="fas fa-chevron-down down-icon"></i>
                        </button>
                        <div className="acilir-pencere">
                            <Link to="/web-tasarim" onClick={handleLinkClick}>web tasarım</Link>
                            <Link to="/seo-optimizasyonu" onClick={handleLinkClick}>seo</Link>
                            <Link to="/logo-tasarimi" onClick={handleLinkClick}>logo tasarımı</Link>
                            <Link to="/ozel-kontrol-paneli" onClick={handleLinkClick}>Özel kontrol Paneli</Link>
                        </div>
                    </li>
                    <li className="menu-oge">
                        <Link to="/iletisim" onClick={handleLinkClick}>iletişim</Link>
                    </li>
                    <li className="menu-oge">
                        <Link to="/blog" onClick={handleLinkClick}>blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;