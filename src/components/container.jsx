import React, { useEffect, useRef, useState } from "react";
import "./container.css";

const Container = () => {

    const [visible, setVisible] = useState({
        karta: false,
        kartb: false,
        info: false,
        cta: false
    });

    const refs = {
        karta: useRef(null),
        kartb: useRef(null),
        info: useRef(null),
        cta: useRef(null)
    };

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const key = entry.target.getAttribute("data-key");
                    setVisible(prev => ({ ...prev, [key]: true }));
                }
            });
        }, { threshold: 0.2 });

        Object.keys(refs).forEach(key => {
            if (refs[key].current) {
                observer.observe(refs[key].current);
            }
        });

        return () => observer.disconnect();

    }, []);

    return (
        <div className="page">

            {/* HERO */}
            <section className="hero">
                <h1>İşletmenizi Dijitale Taşıyın</h1>
                <p>Web siteniz yoksa, müşterileriniz sizi bulamaz.</p>

            </section>

            {/* INFO */}
            <section
                ref={refs.info}
                data-key="info"
                className={`info ${visible.info ? "show" : ""}`}
            >
                <h2>Neden Web Sitesi?</h2>

                <div className="grid">

                    <div className="infoCard">
                        <h3>⚡ Hızlı</h3>
                        <p>3-7 gün içinde teslim</p>
                    </div>

                    <div className="infoCard">
                        <h3>🎯 SEO</h3>
                        <p>Google’da üst sıralar</p>
                    </div>

                    <div className="infoCard">
                        <h3>📱 Mobil</h3>
                        <p>Tüm cihazlara uyumlu</p>
                    </div>

                </div>
            </section>

            {/* FIRSAT */}
            <section
                ref={refs.karta}
                data-key="karta"
                className={`karta ${visible.karta ? "show" : ""}`}
            >
                <h2>Özel Fırsat</h2>
                <p>Ücretsiz demo + 7 gün kullanım</p>
                <p>Memnun kalmazsan ödeme yok</p>
                <p>İlk 2 hafta ücretsiz revizyon</p>
            </section>

            {/* GROWTH */}
            <section
                ref={refs.kartb}
                data-key="kartb"
                className={`kartb ${visible.kartb ? "show" : ""}`}
            >

                <div className="chart">

                    <div className="bar" style={{ height: "30%" }}><span>%20</span></div>
                    <div className="bar" style={{ height: "50%" }}><span>%40</span></div>
                    <div className="bar" style={{ height: "70%" }}><span>%65</span></div>
                    <div className="bar highlight" style={{ height: "95%" }}><span>%90</span></div>

                </div>

                <div className="text">
                    <h3>Ziyaretçi → Müşteri</h3>
                    <p>Web siteniz sadece görünür olmak için değil, satış yapmak içindir.</p>
                    <p className="accent">Dijital sisteminiz zamanla gelir üretir.</p>
                </div>

            </section>

            {/* CTA */}
            <section
                ref={refs.cta}
                data-key="cta"
                className={`cta ${visible.cta ? "show" : ""}`}
            >
                <h2>Hazır mısınız?</h2>
                <p>Dijitalde kaybolmayın, büyümeye başlayın.</p>

            </section>

        </div>
    );
};

export default Container;