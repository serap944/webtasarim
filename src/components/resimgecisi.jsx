import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './resimgecisi.css';

const Slider = () => {
    const navigate = useNavigate();
    const kapsayiciRef = useRef(null);

    const [mevcutSlayt, setMevcutSlayt] = useState(0);
    const [gosterilecekKartSayisi, setGosterilecekKartSayisi] = useState(3);
    const [kartGenisligi, setKartGenisligi] = useState(0);

    // 👉 Dokunma
    const dokunmaBaslangicX = useRef(0);
    const dokunmaBitisX = useRef(0);

    // 👉 Otomatik geçiş zamanlayıcısı
    const zamanlayiciRef = useRef(null);

    // 👉 Slider verileri
    const slaytlar = [
        { id: 1, image: "/images/blog1.jpg", title: "Kurumsal Web Sitesi Nedir?", link: "/web-tasarim" },
        { id: 2, image: "/images/blog7.jpg", title: "E-ticaret Sistemleri Nedir?", link: "/web-tasarim" },
        { id: 3, image: "/images/blog2.jpg", title: "Responsive Tasarım Nedir?", link: "/blog" },
        { id: 4, image: "/images/blog3.jpg", title: "SEO Optimizasyonu Nedir?", link: "/seo-optimizasyonu" },
        { id: 5, image: "/images/blog4.jpg", title: "Kolay CMS Kontrol Sistemi Nedir?", link: "/ozel-kontrol-paneli" },
        { id: 6, image: "/images/blog5.jpg", title: "Logo Tasarımı", link: "/logo-tasarimi" }
    ];

    /* ============================= */
    /* EKRAN BOYUTU / KART GENİŞLİĞİ */
    /* ============================= */
    useEffect(() => {
        const ekranDegisti = () => {
            let kartSayisi = 3;

            if (window.innerWidth <= 480) kartSayisi = 1;
            else if (window.innerWidth <= 768) kartSayisi = 2;

            setGosterilecekKartSayisi(kartSayisi);

            if (kapsayiciRef.current) {
                const kapsayiciGenisligi = kapsayiciRef.current.offsetWidth;
                const bosluk = 20;
                const icBosluk = 40;

                const genislik =
                    (kapsayiciGenisligi - icBosluk - bosluk * (kartSayisi - 1)) /
                    kartSayisi;

                setKartGenisligi(genislik);
            }

            const max = slaytlar.length - kartSayisi;
            setMevcutSlayt((onceki) => Math.min(onceki, max));
        };

        ekranDegisti();
        window.addEventListener('resize', ekranDegisti);
        return () => window.removeEventListener('resize', ekranDegisti);
    }, [slaytlar.length]);

    /* ============================= */
    /* OTOMATİK GEÇİŞ KONTROL */
    /* ============================= */
    const temizleZamanlayici = () => {
        if (zamanlayiciRef.current) {
            clearInterval(zamanlayiciRef.current);
            zamanlayiciRef.current = null;
        }
    };

    const otomatikBaslat = () => {
        temizleZamanlayici();
        zamanlayiciRef.current = setInterval(() => {
            ileri(false);
        }, 4000);
    };

    useEffect(() => {
        otomatikBaslat();
        return () => temizleZamanlayici();
    }, [gosterilecekKartSayisi]);

    /* ============================= */
    /* İLERİ / GERİ */
    /* ============================= */
    const ileri = (manuel = true) => {
        if (manuel) temizleZamanlayici();

        const max = slaytlar.length - gosterilecekKartSayisi;
        setMevcutSlayt((onceki) => (onceki >= max ? 0 : onceki + 1));

        if (manuel) otomatikBaslat();
    };

    const geri = () => {
        temizleZamanlayici();

        const max = slaytlar.length - gosterilecekKartSayisi;
        setMevcutSlayt((onceki) => (onceki <= 0 ? max : onceki - 1));

        otomatikBaslat();
    };

    /* ============================= */
    /* KAYDIRMA HESABI */
    /* ============================= */
    const kaydirmaDegeri = () => {
        if (!kartGenisligi) return 'translateX(0px)';
        const bosluk = 20;
        return `translateX(-${(kartGenisligi + bosluk) * mevcutSlayt}px)`;
    };

    /* ============================= */
    /* DOKUNMA (SWIPE) */
    /* ============================= */
    const dokunmaBasladi = (e) => {
        dokunmaBaslangicX.current = e.touches[0].clientX;
    };

    const dokunmaBitti = (e) => {
        dokunmaBitisX.current = e.changedTouches[0].clientX;
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
                        transition: 'transform 0.6s ease'
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
                                    daha fazlası
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-btn prev-btn" onClick={geri}>‹</button>
            <button className="nav-btn next-btn" onClick={() => ileri()}>›</button>
        </section>
    );
};

export default Slider;
