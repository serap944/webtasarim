import React from 'react';
import './seo.css';
// Eğer resimlerin public klasöründeyse bu şekilde kullan
// import seoImage1 from '../images/images6.jpg';
// import seoImage2 from '../images/seo2.jpg';

const SEO = () => {
    return (
        <main className="anaicerik">
            {/* İlk Bölüm */}
            <section className="icerik-seo">


                <h1>SEO (Arama Optimizasyonu)</h1>
                <p>
                    SEO (Search Engine Optimization), web sitelerinin arama motorlarında daha
                    görünür olmasını sağlayan dijital pazarlama yöntemlerinin bütünüdür. Doğru
                    SEO stratejileriyle hazırlanan bir site, Google gibi arama motorlarında üst
                    sıralara çıkarak daha fazla potansiyel müşteriye ulaşabilir. Böylece hem
                    organik trafik artar hem de marka bilinirliği güçlenir.
                </p>
                <p>
                    SEO çalışmaları; teknik optimizasyon, anahtar kelime planlaması, içerik
                    düzenlemesi ve backlink stratejilerini kapsar. Düzenli olarak yapılan
                    SEO iyileştirmeleri sayesinde siteniz, yalnızca kısa vadeli değil uzun vadeli
                    bir başarı da elde eder. Bu da reklam bütçesinden tasarruf etmenize olanak tanır.
                </p>

                <div className="modern-text">
                    Modern Tasarım
                    <br /> +
                    <br /> Güçlü SEO
                    <br /> =
                    <br /> Başarı.
                </div>

            </section>

            {/* İkinci Bölüm */}
            <section className="seo2">
                <div className="seob">
                    <h2>SEO'nun Önemi</h2>
                    <p>
                        İnternet üzerindeki rekabetin giderek arttığı günümüzde, SEO'nun önemi
                        her geçen gün daha da artmaktadır. Arama motorları, kullanıcıların bilgiye
                        ulaşma biçimlerini şekillendirirken, işletmeler için de dijital dünyada
                        var olmanın anahtarı haline gelmiştir. İyi bir SEO stratejisi, sadece
                        arama motorlarında üst sıralarda yer almakla kalmaz, aynı zamanda kullanıcı
                        deneyimini de iyileştirir.
                    </p>
                    <p>
                        SEO, web sitenizin hızını artırır, mobil uyumluluğunu sağlar ve kaliteli
                        içerik sunmanızı teşvik eder. Tüm bu faktörler, ziyaretçilerin sitenizde
                        daha uzun süre kalmasını ve dönüşüm oranlarının artmasını sağlar. Ayrıca,
                        SEO sayesinde hedef kitlenize daha etkili bir şekilde ulaşabilir ve marka
                        sadakati oluşturabilirsiniz.
                    </p>
                </div>

                <div className="seoresim1">
                    {/* Resim public/images/ klasöründeyse */}
                    <img
                        src="/images/images6.jpg"
                        alt="SEO önemi"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x400/7c76f5/ffffff?text=SEO+Görseli";
                        }}
                    />
                </div>
            </section>

            {/* Üçüncü Bölüm */}
            <section className="seo3">
                <div className="seoc">
                    <img
                        src="/resimler/seo2.jpg"
                        alt="SEO önemi"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x400/333/ffffff?text=SEO+Görseli+2";
                        }}
                    />
                </div>

                <div className="seoc">
                    <p >
                        Günümüzde internet kullanıcılarının büyük bir kısmı, ihtiyaç duydukları
                        hizmet ve ürünleri arama motorları üzerinden aramaktadır. Bu nedenle SEO,
                        işletmelerin hedef kitlelerine ulaşmasında vazgeçilmez bir araçtır.
                        Arama sonuçlarında görünürlüğünüzü artırarak, rakiplerinizin önüne geçebilir
                        ve sürdürülebilir bir dijital büyüme sağlayabilirsiniz.
                    </p>
                </div>
            </section>

        </main >
    );
};

export default SEO;