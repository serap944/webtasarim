// App.js - TAM DÜZELTİLMİŞ VERSİYON
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import OzelKontrolPaneli from './pages/OzelKontrolPaneli';
import Blog from './pages/blog';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <div className="ana-kitap">
          <Routes>
            {/* ANA SAYFA */}
            <Route path="/" element={
              <div>
                <Gridkutusu />
                <Slider />
                <Container />
                <Container2 />
              </div>
            } />

            <Route path="/web-tasarim" element={<WebTasarim />} />
            <Route path="/logo-tasarimi" element={<LogoTasarimi />} />
            <Route path="/seo-optimizasyonu" element={<SEO />} />
            {/* ⬇️ DÜZELT: küçük harf */}
            <Route path="/ozel-kontrol-paneli" element={<OzelKontrolPaneli />} />

            <Route path="/iletisim" element={<Iletisim />} />

            {/* ⬇️ DÜZELT: küçük harf */}
            <Route path="/blog" element={<Blog />} />

            {/* 404 sayfası */}
            <Route path="" element={
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>404 - Sayfa Bulunamadı</h1>
              </div>
            } />
          </Routes>
        </div>
        <WatsapButon />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;