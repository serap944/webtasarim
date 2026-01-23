import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './resimgecisi.css';

const Slider = () => {
    const navigate = useNavigate();
    const kapsayiciRef = useRef(null);

    const [mevcutSlayt, setMevcutSlayt] = useState(0);
    const [gosterilecekKartSayisi, setGosterilecekKartSayisi] = useState(3);
    const [kartGenisligi, setKartGenisligi] = useState(0);

    // 👉 Dokunma için ref’ler
    const dokunmaBaslangicX = useRef(0);
    const dokunmaBitisX = useRef(0);

    // 👉 Slider verileri
    const slaytlar = [
        {
            id: 1,
            image: "/images/blog1.jpg",
            title: "Kurumsal Web Sitesi Nedir?",
            buttonText: "daha fazlası",
            link: "/web-tasarim"
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
            link: "/blog"
        },
        {
            id: 4,
            image: "/images/blog3.jpg",
            title: "SEO Optimizasyonu Nedir?",
            buttonText: "daha fazlası",
            link: "/seo-optimizasyonu"
        },
        {
            id: 5,
            image: "/images/blog4.jpg",
            title: "Kolay CMS Kontrol Sistemi Nedir?",
            buttonText: "daha fazlası",
            link: "/ozel-kontrol-paneli"
        },
        {
            id: 6,
            image: "/images/blog5.jpg",
            title: "Logo Tasarımı",
            buttonText: "daha fazlası",
            link: "/logo-tasarimi"
        }
    ];

    // 👉 Ekran boyutuna göre ayarlama
    useEffect(() => {
        const ekranDegisti = () => {
            let kartSayisi;

            if (window.innerWidth <= 480) {
                kartSayisi = 1;
            } else if (window.innerWidth <= 768) {
                kartSayisi = 2;
            } else {
                kartSayisi = 3;
            }

            setGosterilecekKartSayisi(kartSayisi);
            kartGenisligiHesapla(kartSayisi);

            if (mevcutSlayt > slaytlar.length - kartSayisi) {
                setMevcutSlayt(Math.max(0, slaytlar.length - kartSayisi));
            }
        };

        const kartGenisligiHesapla = (kartSayisi) => {
            if (!kapsayiciRef.current) return;

            const kapsayiciGenisligi = kapsayiciRef.current.offsetWidth;
            const bosluk = 20;
            const icBosluk = 40;

            const kullanilabilirAlan = kapsayiciGenisligi - icBosluk;
            const genislik =
                (kullanilabilirAlan - bosluk * (kartSayisi - 1)) / kartSayisi;

            setKartGenisligi(genislik);
        };

        ekranDegisti();
        window.addEventListener('resize', ekranDegisti);

        return () => window.removeEventListener('resize', ekranDegisti);
    }, [mevcutSlayt, slaytlar.length]);

    // 👉 İleri / geri
    const ileri = () => {
        const max = slaytlar.length - gosterilecekKartSayisi;
        setMevcutSlayt((onceki) => (onceki >= max ? 0 : onceki + 1));
    };

    const geri = () => {
        const max = slaytlar.length - gosterilecekKartSayisi;
        setMevcutSlayt((onceki) => (onceki <= 0 ? max : onceki - 1));
    };

    // 👉 Otomatik geçiş
    useEffect(() => {
        const zamanlayici = setInterval(ileri, 4000);
        return () => clearInterval(zamanlayici);
    }, [gosterilecekKartSayisi]);

    // 👉 Kaydırma hesabı
    const kaydirmaDegeri = () => {
        if (!kartGenisligi) return 'translateX(0px)';
        const bosluk = 20;
        const deger = (kartGenisligi + bosluk) * mevcutSlayt;
        return `translateX(-${deger}px)`;
    };

    // 👉 Dokunma olayları
    const dokunmaBasladi = (e) => {
        dokunmaBaslangicX.current = e.touches[0].clientX;
    };

    const dokunmaBitti = (e) => {
        dokunmaBitisX.current = e.changedTouches[0].clientX;
        dokunmaKontrol();
    };

    const dokunmaKontrol = () => {
        const fark = dokunmaBaslangicX.current - dokunmaBitisX.current;

        if (fark > 50) ileri();
        else if (fark < -50) geri();
    };

    return (
        <section className="kutu2" ref={kapsayiciRef}>
            <h2>Web Tasarım Hizmetlerimiz</h2>

            <div className="slider-container">
                <div
                    className="slides-track"
                    onTouchStart={dokunmaBasladi}
                    onTouchEnd={dokunmaBitti}
                    style={{
                        transform: kaydirmaDegeri(),
                        transition: 'transform 0.6s ease',
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    {slaytlar.map((slayt, index) => (
                        <div
                            key={slayt.id}
                            className={`slide-card ${index >= mevcutSlayt &&
                                index < mevcutSlayt + gosterilecekKartSayisi
                                ? 'visible'
                                : ''
                                }`}
                            style={{ flex: `0 0 ${kartGenisligi}px` }}
                        >
                            <div className="card-content">
                                <div className="image-container">
                                    <img src={slayt.image} alt={slayt.title} />
                                </div>

                                <h3>{slayt.title}</h3>

                                <button
                                    className="card-button"
                                    onClick={() => navigate(slayt.link)}
                                >
                                    {slayt.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-btn prev-btn" onClick={geri}>‹</button>
            <button className="nav-btn next-btn" onClick={ileri}>›</button>
        </section>
    );
};

export default Slider;
