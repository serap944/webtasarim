import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // EmailJS import'u ekleyin
import './teklifformu.css';

const TeklifFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // EmailJS'i başlat
    useEffect(() => {
        emailjs.init("JDtq3FyoDENfcG0RtdO8h"); // Public Key'iniz
    }, []);

    // Modal açıldığında body'e scroll'u engelle
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EMAILJS GÖNDERİMİ
            const templateParams = {
                to_email: 'serap.ekin.12@gmail.com', // Sizin email adresiniz
                from_name: formData.name,
                phone: formData.phone,
                email: formData.email,
                service: formData.service || 'Belirtilmemiş',
                message: formData.message || 'en kısa sürede dönüş yapılacaktır.',
                date: new Date().toLocaleString('tr-TR'),
                ip_address: 'Web Formu'
            };

            // ⭐⭐ TEMPLATE ID'Yİ EMAILJS DASHBOARD'DAN ALMANIZ GEREKİYOR ⭐⭐
            await emailjs.send(
                'service_q4x6bg6',      // Service ID'niz
                'template_wot4i8m',    // ⭐ BURAYA TEMPLATE ID YAZIN ⭐
                templateParams,
                'IF3LyLXLVFdVeP4fr'       // Public Key'iniz
            );

            setSubmitStatus('success');

            // Formu temizle
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });

            // 3 saniye sonra modal'ı kapat
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 3000);

        } catch (error) {
            console.error('Gönderme hatası:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Ücretsiz Aranma Talebi</h3>
                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Kapat"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="modal-body">
                    {submitStatus === 'success' ? (
                        <div className="success-message">
                            <i className="fas fa-check-circle"></i>
                            <h4>Talebiniz Alındı!</h4>
                            <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
                            <p className="success-note">
                                <i className="fas fa-clock"></i>
                                3 saniye içinde pencere kapanacaktır...
                            </p>
                        </div>
                    ) : (
                        <form id="teklif-formu" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="fas fa-user"></i> Ad Soyad *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Adınız ve soyadınız"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    <i className="fas fa-phone"></i> Telefon *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="05XX XXX XX XX"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="fas fa-envelope"></i> E-posta *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="ornek@email.com"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">
                                    <i className="fas fa-cog"></i> İlgilendiğiniz Hizmet
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Seçiniz</option>
                                    <option value="web-tasarim">Web Tasarım</option>
                                    <option value="seo">SEO Optimizasyonu</option>
                                    <option value="logo">Logo Tasarımı</option>
                                    <option value="panel">Özel Kontrol Paneli</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    <i className="fas fa-comment"></i> Mesajınız (Opsiyonel)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Eklemek istediğiniz notlar..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {submitStatus === 'error' && (
                                <div className="error-message">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    <span>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</span>
                                </div>
                            )}

                            <div className="form-footer">
                                <p className="form-note">
                                    <i className="fas fa-info-circle"></i>
                                    Bilgileriniz gizli tutulacak ve yalnızca sizinle iletişim kurmak için kullanılacaktır.
                                </p>

                                <div className="form-buttons">
                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={onClose}
                                        disabled={isSubmitting}
                                    >
                                        <i className="fas fa-times"></i> Vazgeç
                                    </button>

                                    <button
                                        type="submit"
                                        className="teklif-butonu submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i>
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane"></i>
                                                Gönder
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeklifFormModal;