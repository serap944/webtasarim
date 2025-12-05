import React from 'react';
import './seo.css';
// Eğer resimlerin public klasöründeyse bu şekilde kullan
// import logoDesignImage1 from '../images/logo1.jpg';
// import logoDesignImage2 from '../images/logo2.jpg';


const LogoTasarimi = () => {
    return (
        < div className="anaicerik">
            <section className="icerik-seo">
                <h1>Logo Tasarımı</h1>
                <p>
                    Logo, bir markanın kimliğini yansıtan ve müşteriler üzerinde kalıcı bir izlenim
                    bırakan en önemli görsel öğedir. Doğru tasarlanmış bir logo, yalnızca estetik
                    bir görünüme sahip olmakla kalmaz, aynı zamanda markanın değerlerini, vizyonunu
                    ve hedef kitlesine sunduğu mesajı da iletir. Bu nedenle logo tasarımı, marka
                    kimliği oluşturmanın temel adımlarından biridir.
                </p>
                <p>
                    Profesyonel logo tasarımı; renk seçimi, tipografi, simgeler ve tasarım
                    dili gibi birçok unsuru barındırır. Her bir detay, markanızın karakterini
                    ortaya koyar. Güçlü bir logo, müşterilerin zihninde kolayca yer eder ve
                    markanızı rakiplerinizden ayırır.
                </p>
                <p>
                    İyi bir logo; basit, akılda kalıcı ve farklı ortamlarda kullanılmaya uygun
                    olmalıdır. Dijital platformlarda, basılı materyallerde veya reklam
                    çalışmalarında kullanılabilecek şekilde ölçeklenebilir olması, tasarımın
                    değerini artırır. Markanız için hazırlanan özgün bir logo, uzun vadede
                    marka bilinirliğinizi güçlendirir ve kurumsal kimliğinizin temel taşı olur.
                </p>
            </section>

            <a
                href="https://wa.me/905415624921?text=Merhaba, web sitenizden iletişime geçiyorum. Ürün ve hizmetleriniz hakkında bilgi almak istiyorum"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div >
    );
};
export default LogoTasarimi;