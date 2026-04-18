import React, { useEffect, useRef, useState } from 'react';
import './container.css';

const Container = () => {
    const [visibleElements, setVisibleElements] = useState({
        karta: false,
        kartb: false,
        kartc: false
    });

    const kartaRef = useRef(null);
    const kartbRef = useRef(null);
    const kartcRef = useRef(null);

    useEffect(() => {
        const observers = [];

        // Her bir element için ayrı observer oluştur
        const elements = [
            { ref: kartaRef, key: 'karta' },
            { ref: kartbRef, key: 'kartb' }

        ];

        elements.forEach(({ ref, key }) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        // Görüş alanına girdiğinde
                        setVisibleElements(prev => ({
                            ...prev,
                            [key]: true
                        }));
                    } else {
                        // Görüş alanından çıktığında
                        setVisibleElements(prev => ({
                            ...prev,
                            [key]: false
                        }));
                    }
                },
                {
                    threshold: 0.2, // %20 görünürlük
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => {
                observer.disconnect();
            });
        };
    }, []);

    return (


        <section className="kart-container">

            <div className="container1">

                {/* SOL - METİN */}
                <section className="akutu">
                    <h2>Website Neden Önemlidir?</h2>

                    <p className="lead">
                        İşletmeniz internette yoksa, müşterileriniz sizi bulamaz.
                    </p>

                    <p>
                        İnsanlar bir hizmet almadan önce Google’da araştırma yapar.
                        Eğer siz görünmüyorsanız, müşterileriniz rakiplerinize gider.
                    </p>

                    <p>
                        Web siteniz sizin <strong>7/24 çalışan dijital satış temsilcinizdir.</strong>
                        Güven oluşturur, marka değerinizi artırır ve müşteri kazandırır.
                    </p>

                    <p>
                        Sosyal medya geçicidir. Ama web sitesi sizin kontrolünüzde olan
                        kalıcı bir dijital varlıktır.
                    </p>

                    <p className="highlight">
                        Daha fazla müşteri ve profesyonel görünüm için web sitesi artık zorunluluktur.
                    </p>


                </section>


                {/* SAĞ - İSTATİSTİK */}
                <section className="bkutu">

                    <div className="statBox">
                        <h3>%98</h3>
                        <p>Müşteri Memnuniyeti</p>
                    </div>

                    <div className="statBox">
                        <h3>7/24</h3>
                        <p>Destek</p>
                    </div>

                    <div className="statBox">
                        <h3>100+</h3>
                        <p>Tamamlanan Proje</p>
                    </div>

                </section>

            </div>

            {/* karta - Fırsatlar */}
            <div
                ref={kartaRef}
                className={`karta ${visibleElements.karta ? 'visible' : ''}`}
            >
                <h2>Fırsatlar</h2>
                <p>Yeni Açıldığımız İçin Cömertiz!</p>
                <p>🎯 ÜCRETSİZ Demo + 7 Gün Ücretsiz Kullanım!</p>
                <p>→ "Beğenmediğiniz takdirde ücret almıyoruz!"</p>
                <h3>İlk 2 Hafta ÜCRETSİZ Güncelleme!</h3>
                <p>🎯→ "Aklınıza sonradan gelenleri ekliyoruz."</p>
            </div>

            {/* kartb - Web Tasarım bilgisi */}
            <div
                ref={kartbRef}
                className={`kartb ${visibleElements.kartb ? 'visible' : ''}`}
            >
                <h2>Web Tasarımın Önemi</h2>
                <p>🌐 Web tasarım, dijital dünyada kurumsal kimliğin en önemli parçasıdır.</p>
                <p>💡 Kullanıcı deneyimi (UX) ve arayüz tasarımı (UI), bir web sitesinin başarısını doğrudan etkiler.</p>
                <p>🚀 Responsive tasarım sayesinde her cihazda mükemmel görüntü sağlanır.</p>
                <p>⭐ İyi bir web tasarım, marka değerini artırır ve güven oluşturur.</p>
                <p>🎯 Modern web tasarım, hem estetik hem de işlevselliği bir arada sunar.</p>
            </div>


        </section >
    );
};

export default Container;