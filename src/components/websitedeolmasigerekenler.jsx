// src/components/WebsiteFeatures.jsx
import React from 'react';
import './websitedeolmasigerekenler.css';

const Gridkutusu = () => {
    // Özellikler dizisi - daha temiz ve dynamic
    const features = [
        {
            id: 1,
            image: "/images/grafik-tasarim.svg",
            title: "grafik tasarım",
            alt: "Grafik Tasarım İkonu"
        },
        {
            id: 2,
            image: "/images/mobil-uyum.svg",
            title: "mobil cihazlara uyumluluk",
            alt: "Mobil Uyum İkonu"
        },
        {
            id: 3,
            image: "/images/seo.svg",
            title: "Seo Dostu",
            alt: "SEO İkonu"
        },
        {
            id: 4,
            image: "/images/grafik-tasarim.svg",
            title: "grafik tasarımları",
            alt: "Grafik Tasarımlar İkonu"
        },
        {
            id: 5,
            image: "/images/teknik-destek.svg",
            title: "teknik destek ve panel eğitimi",
            alt: "Teknik Destek İkonu"
        }
    ];

    return (
        <section className="website-features">
            <h1 className="features-title">
                Websitede Olması Gerekenler
            </h1>

            <div className="grid-kutusu">
                {features.map((feature) => (
                    <div key={feature.id} className="kartx">
                        <img
                            src={feature.image}
                            alt={feature.alt}
                            className="feature-image"
                        />
                        <h3 className="feature-title">{feature.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gridkutusu;