import React from 'react';
import { Helmet } from 'react-helmet-async';
import './kontrolpaneli.css'; // Stil dosyası

const OzelKontrolPaneli = () => {
    return (
        <>
            <Helmet>
                <title>Özel Kontrol Paneli | Noradark Web Tasarım</title>
                <meta name="description" content="Noradark ile ihtiyacınıza özel geliştirilmiş kontrol paneli çözümleri. Web sitenizi kolayca yönetin." />
                <meta name="keywords" content="özel kontrol paneli, web site yönetim paneli, admin panel, içerik yönetim sistemi" />
                <link rel="canonical" href="https://www.noradark.com.tr/ozel-kontrol-paneli" />
            </Helmet>

            <div className="ozel-panel-container">
                {/* HERO BÖLÜMÜ */}
                <section className="panel-hero">
                    <div className="container">
                        <h1 className="panel-title">Özel Kontrol Paneli Çözümleri</h1>
                        <p className="panel-subtitle">
                            Web sitenizi profesyonelce yönetebileceğiniz, ihtiyaçlarınıza özel geliştirilmiş kontrol panelimiz ile tanışın.
                        </p>
                    </div>
                </section>

                {/* NEDEN ÖZEL PANEL? */}
                <section className="panel-why">
                    <div className="container">
                        <h2>Neden Özel Kontrol Paneli?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🎯</div>
                                <h3>İhtiyaca Özel</h3>
                                <p>Her işletmenin ihtiyaçları farklıdır. Size özel geliştirilen panel ile sadece ihtiyacınız olan özellikleri kullanırsınız.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h3>Kolay Kullanım</h3>
                                <p>Teknik bilgi gerektirmeyen, sade ve anlaşılır arayüz ile içeriklerinizi kolayca yönetebilirsiniz.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">🛡️</div>
                                <h3>Güvenli Yapı</h3>
                                <p>Gelişmiş güvenlik önlemleri ile verileriniz her zaman koruma altındadır.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PANEL ÖZELLİKLERİ */}
                <section className="panel-features">
                    <div className="container">
                        <h2>Kontrol Panelimizin Temel Özellikleri</h2>

                        <div className="feature-list">
                            <div className="feature-item">
                                <h4>✏️ İçerik Yönetimi</h4>
                                <p>Sayfalarınızı, blog yazılarınızı ve ürünlerinizi görsel editör ile kolayca düzenleyin.</p>
                            </div>

                            <div className="feature-item">
                                <h4>📊 Analiz ve Raporlama</h4>
                                <p>Sitenizin ziyaretçi istatistiklerini ve performans verilerini panel üzerinden takip edin.</p>
                            </div>

                            <div className="feature-item">
                                <h4>📱 Responsive Tasarım</h4>
                                <p>Panelimiz tüm cihazlardan (bilgisayar, tablet, telefon) sorunsuz çalışır.</p>
                            </div>

                            <div className="feature-item">
                                <h4>🔄 Otomatik Yedekleme</h4>
                                <p>Verileriniz düzenli olarak yedeklenir, güvenliğiniz bizim için önemlidir.</p>
                            </div>

                            <div className="feature-item">
                                <h4>📧 Entegrasyonlar</h4>
                                <p>E-posta, sosyal medya ve diğer sistemlerle entegre çalışabilme özelliği.</p>
                            </div>

                            <div className="feature-item">
                                <h4>🆘 Teknik Destek</h4>
                                <p>7/24 teknik destek ekibimiz ile her zaman yanınızdayız.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KİMLER İÇİN UYGUN? */}
                <section className="panel-for-whom">
                    <div className="container">
                        <h2>Kimler İçin Uygun?</h2>
                        <div className="audience-grid">
                            <div className="audience-card">
                                <h4>👔 Küçük ve Orta Ölçekli İşletmeler</h4>
                                <p>Web sitenizi kendiniz güncellemek istiyorsanız, özel kontrol panelimiz tam size göre.</p>
                            </div>

                            <div className="audience-card">
                                <h4>🏬 E-ticaret Siteleri</h4>
                                <p>Ürün yönetimi, stok takibi ve sipariş süreçleri için optimize edilmiş panel çözümleri.</p>
                            </div>

                            <div className="audience-card">
                                <h4>🏥 Kurumsal Firmalar</h4>
                                <p>Çoklu kullanıcı yönetimi ve detaylı izin sistemine sahip kurumsal çözümler.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ÇALIŞMA SÜRECİ */}
                <section className="panel-process">
                    <div className="container">
                        <h2>Nasıl Çalışıyoruz?</h2>
                        <div className="process-steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <h4>İhtiyaç Analizi</h4>
                                <p>Size özel ihtiyaçlarınızı belirliyoruz.</p>
                            </div>

                            <div className="step">
                                <div className="step-number">2</div>
                                <h4>Tasarım ve Geliştirme</h4>
                                <p>Özel panelinizi geliştiriyoruz.</p>
                            </div>

                            <div className="step">
                                <div className="step-number">3</div>
                                <h4>Test ve Eğitim</h4>
                                <p>Paneli test ediyor ve kullanım eğitimi veriyoruz.</p>
                            </div>

                            <div className="step">
                                <div className="step-number">4</div>
                                <h4>Canlıya Alma</h4>
                                <p>Panelinizi kullanıma hazır hale getiriyoruz.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA - TEKLİF AL */}
                <section className="panel-cta">
                    <div className="container">
                        <h2>Özel Kontrol Panelinizi Oluşturalım</h2>
                        <p>İhtiyaçlarınıza uygun özel kontrol paneli çözümümüz hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
                        <a href="/iletisim" className="cta-button">Ücretsiz Teklif Alın</a>
                        <p className="cta-note">Veya <a href="tel:+905415624921">+90 541 562 49 21</a> numaralı telefondan bize ulaşabilirsiniz.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OzelKontrolPaneli;