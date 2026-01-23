import React from 'react';
// src/context/TeklifContext.js
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './blog.css';

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            title: 'Güncel Web Tasarım Trendleri',
            excerpt: '2025 yılında web tasarım dünyasında öne çıkacak trendleri ve yenilikleri sizin sitenizde uyguşayalım.',
            category: 'Web Tasarım',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h-250&fit=crop'
        },
        {
            id: 2,
            title: 'SEO Stratejileri',
            excerpt: 'Web sitenizin arama motorlarında üst sıralarda çıkması için temel SEO ipuçları.',
            category: 'SEO',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            /* slug: 'mobil-uyumlu-tasarim', */ // !Slug, bir içeriğin URL’de kullanılan, okunabilir ve sabit adıdır. 
            title: 'Mobil Uyumlu Web Tasarımının Önemi',
            excerpt: 'Mobil cihazlar için optimize edilmiş web siteleri neden bu kadar kritik?',
            category: 'Responsive',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
        },
        {
            id: 4,
            title: 'Etkili Logo Tasarımı İçin 5 İpucu',
            excerpt: 'Markanızı temsil edecek unutulmaz bir logo tasarlamak için pratik öneriler sunuyoruz.',
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
                            size destek vermek için buradayız.
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
                                        <h3 className="post-title">
                                            {post.title}
                                        </h3>
                                        <p className="post-excerpt">{post.excerpt}</p>

                                    </div>
                                </article>
                            ))}
                        </div>

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



            </div >
        </>
    );
};

export default Blog;