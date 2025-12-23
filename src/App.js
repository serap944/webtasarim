// App.js - DÜZELTİLMİŞ VERSİYON
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Gridkutusu from './components/websitedeolmasigerekenler';
import Slider from './components/resimgecisi';
import Container from './components/container';
import Container2 from './components/container2';
import WatsapButon from './components/whatsapp';
import TeklifFormModal from './components/teklifForm';
import './App.css';

// SAYFALARI İÇE AKTAR

import SEO from './pages/seo-optimizisyonu';
import WebTasarim from './pages/webtasarim';
import LogoTasarimi from './pages/LogoTasarimi';
import Iletisim from './pages/iletisim';


function App() {
  return (
    <Router>
      <Header />

      {/* ANA İÇERİK WRAPPER'ı EKLE */}
      <div className="ana-kitap">
        <Routes>
          {/* ANA SAYFA */}
          <Route path="/" element={
            <div>

              <Gridkutusu />
              <Slider />
              <Container />
              <Container2 />
              <div id="teklif-formu">
                <h2>Teklif Formu</h2>
                {/* Form buraya gelecek */}
              </div>

            </div>
          } />

          <Route path="/web-tasarim" element={
            <div>
              <WebTasarim />
            </div>
          } />

          <Route path="/seo-optimizasyonu" element={
            <div>
              <SEO />
            </div>
          } />

          <Route path="/logo-tasarimi" element={
            <div>
              <LogoTasarimi />
            </div>
          } />

          <Route path="/ozel-kontrol-paneli" element={
            <div style={{ padding: '20px' }}>
              <h1>Kontrol Paneli Sayfası</h1>
              <p>Bu sayfa henüz hazır değil.</p>
            </div>
          } />

          <Route path="/iletisim" element={
            <div>
              <Iletisim />
            </div>
          } />

          <Route path="/blog" element={
            <div style={{ padding: '20px' }}>
              <h1>Blog Sayfası</h1>
              <p>Bu sayfa henüz hazır değil.</p>
            </div>
          } />

          {/* 404 sayfası ekleyelim */}
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>404 - Sayfa Bulunamadı</h1>
            </div>
          } />
        </Routes>
      </div>
      <WatsapButon />
      <Footer />

    </Router>
  );
}

export default App;