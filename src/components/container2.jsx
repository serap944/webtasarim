import React from 'react';
import './container2.css';

const Container2 = () => {
    const kartcRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px' // Görünür alana girince tetiklenmesi için
            }
        );

        const currentRef = kartcRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section className="container2">
            <div ref={kartcRef} className={`kartc ${isVisible ? 'visible' : ''}`}>
                <h2>Neden Bizi Seçmelisiniz?</h2>
                <p>✅ Profesyonel ve deneyimli tasarım ekibi</p>
                <p>✅ Müşteri odaklı çözümler</p>
                <p>✅ Her bütçeye uygun fiyatlandırma sağlıyoruz</p>
                <p>✅ Hızlı teslimat ve sürekli destek</p>
                <p>✅ Yaratıcı ve özgün tasarımlar</p>
            </div>
        </section>
    );
};

export default Container2;