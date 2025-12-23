import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import TeklifFormModal from './teklifForm'; // Modal bileşenini import et

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false); // Modal state'i

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleForm = () => setIsFormOpen(!isFormOpen); // Modal aç/kapa

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    // Modal açıldığında menüyü kapat
    const handleOpenForm = () => {
        setIsMenuOpen(false);
        setIsFormOpen(true);
    };

    return (
        <header>
            <nav className="menu-cubugu">
                <h2 className="logo">
                    <Link to="/" onClick={handleLinkClick}>Noradark</Link>
                </h2>

                <div className="teklif">
                    <button onClick={handleOpenForm} className="teklif-butonu">
                        <i className="fas fa-phone-alt"></i> aranma talebi
                    </button>
                </div>

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`linklerim ${isMenuOpen ? 'aktiflik' : ''}`}>
                    <li className="menu-oge">
                        <Link to="/" onClick={handleLinkClick}>
                            <i className="fas fa-home"></i> anasayfa
                        </Link>
                    </li>

                    <li className={`menu-oge acilir ${isDropdownOpen ? 'open' : ''}`}>
                        <button className="acilir-toggle" onClick={toggleDropdown}>
                            <i className="fas fa-cogs"></i> hizmetlerimiz
                            <i className="fas fa-chevron-down down-icon"></i>
                        </button>
                        <div className="acilir-pencere">
                            <Link to="/web-tasarim" onClick={handleLinkClick}>
                                <i className="fas fa-code"></i> web tasarım
                            </Link>
                            <Link to="/seo-optimizasyonu" onClick={handleLinkClick}>
                                <i className="fas fa-chart-line"></i> seo
                            </Link>
                            <Link to="/logo-tasarimi" onClick={handleLinkClick}>
                                <i className="fas fa-palette"></i> logo tasarımı
                            </Link>
                            <Link to="/ozel-kontrol-paneli" onClick={handleLinkClick}>
                                <i className="fas fa-tachometer-alt"></i> Özel kontrol Paneli
                            </Link>
                        </div>
                    </li>

                    <li className="menu-oge">
                        <Link to="/iletisim" onClick={handleLinkClick}>
                            <i className="fas fa-envelope"></i> iletişim
                        </Link>
                    </li>

                    <li className="menu-oge">
                        <Link to="/blog" onClick={handleLinkClick}>
                            <i className="fas fa-blog"></i> blog
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Modal bileşeni */}
            <TeklifFormModal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </header>
    );
};

export default Header;