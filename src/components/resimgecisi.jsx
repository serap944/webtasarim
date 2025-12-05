// src/components/Slider.jsx
import React, { useState } from 'react';
import './resimgecisi.css';

const Slider = () => {
    // Slider state'leri
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider verileri
    const slides = [
        {
            id: 1,
            image: "/images/blog1.jpg",
            title: "Kurumsal Web Sitesi Nedir?",
            description: "",
            buttonText: "daha fazlası"
        },
        {
            id: 2,
            image: "/images/blog7.jpg",
            title: "E-ticaret Sistemleri Nedir?",
            description: "",
            buttonText: "daha fazlası"
        },
        {
            id: 3,
            image: "/images/blog2.jpg",
            title: "Responsive Tasarım Nedir?",
            description: "",
            buttonText: "daha fazlası"
        },
        {
            id: 4,
            image: "/images/blog3.jpg",
            title: "SEO Optimizasyonu Nedir?",
            description: "",
            buttonText: "daha fazlası"
        },
        {
            id: 5,
            image: "/images/blog4.jpg",
            title: "Kolay CMS Kontrol Sistemi Nedir?",
            description: "",
            buttonText: "daha fazlası"
        },
        {
            id: 6,
            image: "/images/blog5.jpg",
            title: "Logo Tasarımı",
            description: "",
            buttonText: "daha fazlası"
        }
    ];

    // Slider fonksiyonları
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="kutu2">
            <h2>Web Tasarım Hizmetlerimiz</h2>

            {/* Slider alanı */}
            <div className="flexkutusu1">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`kartw ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        <img src={slide.image} alt={slide.title} />
                        <h3>{slide.title}</h3>
                        {slide.description && <h3>{slide.description}</h3>}
                        <button className="button1 arkarenk">
                            {slide.buttonText}
                        </button>
                    </div>
                ))}
            </div>

            {/* Oklar */}
            <span className="okyonu sol" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
            </span>
            <span className="okyonu sag" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
            </span>

            {/* Dots navigasyonu */}
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Slider;