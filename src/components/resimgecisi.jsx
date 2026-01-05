import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './resimgecisi.css';

const Slider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef(null);

    // 1. BUTON TIKLAMA FONKSİYONU EKLEYİN - BU EKSİKTİ
    const handleButtonClick = (link) => {
        navigate(link);
    };

    // 2. SLIDE VERİLERİ - App.js'deki path'lerle aynı yapın
    const slides = [
        {
            id: 1,
            image: "/images/blog1.jpg",
            title: "Kurumsal Web Sitesi Nedir?",
            buttonText: "daha fazlası",
            link: "/web-tasarim" // App.js'de: path="/web-tasarim"
        },
        {
            id: 2,
            image: "/images/blog7.jpg",
            title: "E-ticaret Sistemleri Nedir?",
            buttonText: "daha fazlası",
            link: "/web-tasarim"
        },
        {
            id: 3,
            image: "/images/blog2.jpg",
            title: "Responsive Tasarım Nedir?",
            buttonText: "daha fazlası",
            link: "/blog" // App.js'de: path="/blog"
        },
        {
            id: 4,
            image: "/images/blog3.jpg",
            title: "SEO Optimizasyonu Nedir?",
            buttonText: "daha fazlası",
            link: "/seo-optimizasyonu" // App.js'de: path="/seo-optimizasyonu"
        },
        {
            id: 5,
            image: "/images/blog4.jpg",
            title: "Kolay CMS Kontrol Sistemi Nedir?",
            buttonText: "daha fazlası",
            link: "/ozel-kontrol-paneli" // App.js'de: path="/ozel-kontrol-paneli"
        },
        {
            id: 6,
            image: "/images/blog5.jpg",
            title: "Logo Tasarımı",
            buttonText: "daha fazlası",
            link: "/logo-tasarimi" // App.js'de: path="/logo-tasarimi"
        }
    ];

    // 3. EKRAN BOYUTUNA GÖRE KART SAYISI AYARLA
    useEffect(() => {
        const handleResize = () => {
            let newSlidesToShow;

            if (window.innerWidth <= 480) {
                newSlidesToShow = 1;
            } else if (window.innerWidth <= 768) {
                newSlidesToShow = 2;
            } else {
                newSlidesToShow = 3;
            }

            setSlidesToShow(newSlidesToShow);
            calculateCardWidth(newSlidesToShow);

            if (currentSlide > slides.length - newSlidesToShow) {
                setCurrentSlide(Math.max(0, slides.length - newSlidesToShow));
            }
        };

        const calculateCardWidth = (cardsToShow) => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerWidth = container.offsetWidth;
            const padding = 40;
            const availableWidth = containerWidth - padding;
            const gap = 20;

            const width = (availableWidth - (gap * (cardsToShow - 1))) / cardsToShow;
            setCardWidth(width);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [currentSlide, slides.length]);

    // 4. SLIDER FONKSİYONLARI
    const nextSlide = () => {
        const maxSlide = slides.length - slidesToShow;
        setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    };

    const prevSlide = () => {
        const maxSlide = slides.length - slidesToShow;
        setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
    };

    // 5. OTOMATİK GEÇİŞ
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [slidesToShow]);

    // 6. KAYDIRMA DEĞERİNİ HESAPLA
    const getTransformValue = () => {
        if (!cardWidth) return 'translateX(0px)';

        const gap = 20;
        const translateValue = (cardWidth + gap) * currentSlide;
        return `translateX(-${translateValue}px)`;
    };

    return (
        <section className="kutu2" ref={containerRef}>
            <h2>Web Tasarım Hizmetlerimiz</h2>

            <div className="slider-container">
                <div
                    className="slides-track"
                    style={{
                        transform: getTransformValue(),
                        transition: 'transform 0.6s ease',
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slide-card ${index >= currentSlide && index < currentSlide + slidesToShow ? 'visible' : ''}`}
                            style={{
                                flex: `0 0 ${cardWidth}px`,
                                minWidth: 0
                            }}
                        >
                            <div className="card-content">
                                <div className="image-container">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        loading="lazy"
                                    />
                                </div>
                                <h3>{slide.title}</h3>
                                <button
                                    className="card-button"
                                    onClick={() => handleButtonClick(slide.link)} // BU FONKSİYON ARTIK TANIMLI
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-btn prev-btn" onClick={prevSlide}>
                ‹
            </button>

            <button className="nav-btn next-btn" onClick={nextSlide}>
                ›
            </button>

            <div className="pagination-dots">
                {Array.from({ length: Math.max(1, slides.length - slidesToShow + 1) }).map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slider;