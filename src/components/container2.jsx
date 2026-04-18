import React from "react";
import "./container2.css";

const Container2 = () => {
    const ref = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: 0.15 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="container2">

            <div ref={ref} className={`card ${visible ? "show" : ""}`}>

                <h2>Neden Bizi Seçmelisiniz?</h2>

                <div className="features">

                    <div className="feature">
                        <span className="icon">⚡</span>
                        <p>Profesyonel ve hızlı teslimat sistemi</p>
                    </div>

                    <div className="feature">
                        <span className="icon">🎯</span>
                        <p>Müşteri odaklı modern çözümler</p>
                    </div>

                    <div className="feature">
                        <span className="icon">💰</span>
                        <p>Her bütçeye uygun fiyatlandırma</p>
                    </div>

                    <div className="feature">
                        <span className="icon">🚀</span>
                        <p>Sürekli destek ve güncelleme sistemi</p>
                    </div>

                    <div className="feature">
                        <span className="icon">🎨</span>
                        <p>Özgün ve yaratıcı tasarımlar</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Container2;