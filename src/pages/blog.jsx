import React from 'react';
// src/context/TeklifContext.js
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './blog.css';

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            slug: 'web-tasarim-trendleri-2025',
            title: '2025 Yılı Web Tasarım Trendleri',
            excerpt: '2025 yılında web tasarım dünyasında öne çıkacak trendleri ve yenilikleri keşfedin.',
            date: '15 Aralık 2025',
            readTime: '5 dk',
            category: 'Web Tasarım',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h-250&fit=crop'
        },
        {
            id: 2,
            slug: 'seo-stratejileri',
            title: 'Yeni Başlayanlar İçin SEO Stratejileri',
            excerpt: 'Web sitenizin arama motorlarında üst sıralarda çıkması için temel SEO ipuçları.',
            date: '10 Aralık 2025',
            readTime: '7 dk',
            category: 'SEO',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            slug: 'mobil-uyumlu-tasarim',
            title: 'Mobil Uyumlu Web Tasarımının Önemi',
            excerpt: 'Mobil cihazlar için optimize edilmiş web siteleri neden bu kadar kritik?',
            date: '5 Aralık 2025',
            readTime: '4 dk',
            category: 'Responsive',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
        },
        {
            id: 4,
            slug: 'logo-tasarimi-ipuclari',
            title: 'Etkili Logo Tasarımı İçin 5 İpucu',
            excerpt: 'Markanızı temsil edecek unutulmaz bir logo tasarlamak için pratik öneriler.',
            date: '1 Aralık 2025',
            readTime: '6 dk',
            category: 'Logo Tasarımı',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=250&fit=crop'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog | Noradark Web Tasarım</title>
                <meta name="description" content="Web tasarım, SEO ve dijital pazarlama hakkında güncel bilgiler ve ipuçları." />
                <meta name="keywords" content="web tasarım blog, seo ipuçları, dijital pazarlama, web geliştirme" />
                <link rel="canonical" href="https://www.noradark.com.tr/blog" />
            </Helmet>

            <div className="blog-container">
                {/* HERO BÖLÜMÜ */}
                <section className="blog-hero">
                    <div className="container">
                        <h1 className="blog-title">Web Tasarım ve Dijital Dünya</h1>
                        <p className="blog-subtitle">
                            Web teknolojileri, SEO, tasarım trendleri ve dijital pazarlama hakkında
                            güncel bilgileri buradan takip edebilirsiniz.
                        </p>
                    </div>
                </section>

                {/* BLOG YAZILARI */}
                <section className="blog-posts">
                    <div className="container">
                        <h2 className="section-title">Son Yazılarımız</h2>

                        <div className="posts-grid">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="post-card">
                                    <div className="post-image">
                                        <img src={post.image} alt={post.title} />
                                        <span className="post-category">{post.category}</span>
                                    </div>

                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span className="post-date">{post.date}</span>
                                            <span className="post-read-time">{post.readTime} okuma</span>
                                        </div>

                                        <h3 className="post-title">
                                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>

                                        <p className="post-excerpt">{post.excerpt}</p>

                                        <Link to={`/blog/${post.slug}`} className="read-more">
                                            Devamını Oku →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* BLOG YAZISI YOKSA (boş state) */}
                        {blogPosts.length === 0 && (
                            <div className="empty-blog">
                                <div className="empty-icon">📝</div>
                                <h3>Yakında Burada İlginç Yazılar Olacak</h3>
                                <p>Web tasarım ve dijital dünyaya dair yazılarımızı hazırlıyoruz.</p>
                                <p>Bizi takip etmeye devam edin!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* KATEGORİLER */}
                <section className="blog-categories">
                    <div className="container">
                        <h2 className="section-title">Kategoriler</h2>
                        <div className="categories-list">
                            <a href="#web-tasarim" className="category-tag">Web Tasarım</a>
                            <a href="#seo" className="category-tag">SEO</a>
                            <a href="#responsive" className="category-tag">Responsive Tasarım</a>
                            <a href="#logo" className="category-tag">Logo Tasarımı</a>
                            <a href="#dijital-pazarlama" className="category-tag">Dijital Pazarlama</a>
                            <a href="#teknoloji" className="category-tag">Teknoloji</a>
                        </div>
                    </div>
                </section>

                {/* NEWSLETTER */}
                <section className="blog-newsletter">
                    <div className="container">
                        <h2>Yenilikleri Kaçırmayın</h2>
                        <p>Web tasarım ve teknoloji dünyasındaki gelişmelerden haberdar olmak için bültenimize abone olun.</p>

                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                required
                            />
                            <button type="submit" className="subscribe-btn">
                                Abone Ol
                            </button>
                        </form>

                        <p className="privacy-note">
                            E-postanızı yalnızca bülten göndermek için kullanacağız.
                            <a href="/gizlilik"> Gizlilik politikamız</a>.
                        </p>
                    </div>
                </section>


            </div >
        </>
    );
};

export default Blog;