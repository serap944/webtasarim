import React from "react";
import "./websitedeolmasigerekenler.css";

const Gridkutusu = () => {

    const features = [
        { id: 1, image: "/images/grafik-tasarim.svg", title: "Grafik Tasarım" },
        { id: 2, image: "/images/mobil-uyum.svg", title: "Mobil Uyumluluk" },
        { id: 3, image: "/images/seo.svg", title: "SEO Dostu Yapı" },
        { id: 4, image: "/images/grafik-tasarim.svg", title: "Modern UI Tasarım" },
        { id: 5, image: "/images/teknik-destek.svg", title: "Teknik Destek" }
    ];

    return (
        <main>

            {/* FEATURES */}
            <section className="featuresSection">

                <h1>Web Sitede Olması Gerekenler</h1>

                <div className="featuresGrid">

                    {features.map(f => (
                        <div key={f.id} className="featureCard">
                            <img src={f.image} alt={f.title} />
                            <h3>{f.title}</h3>
                        </div>
                    ))}

                </div>

            </section>

            {/* WEB IMPORTANCE */}
            <section className="webSection">

                <div className="webContainer">

                    <div className="webText">

                        <h2>Web Sitesi Neden Önemlidir?</h2>

                        <p className="lead">
                            Günümüzde bir işletmenin görünürlüğü artık sadece fiziksel varlığıyla değil, dijital dünyada ne kadar erişilebilir olduğu ile ölçülmektedir. İnsanlar bir hizmete ihtiyaç duyduklarında ilk olarak internette araştırma yapar ve güven duydukları işletmeleri tercih eder.

                            Web sitesi, bir işletmenin dijital dünyadaki en önemli temsilcisidir. Sadece bir tanıtım aracı değil; güven oluşturan, müşteriyi bilgilendiren ve satın alma kararını etkileyen bir merkezdir. Sosyal medya geçici bir alan sunarken, web sitesi tamamen işletmenin kontrolünde olan kalıcı bir dijital varlıktır.

                            Bu nedenle web sitesi, sadece bir seçenek değil; rekabetin içinde yer alabilmenin ve müşteri kazanmanın temel şartıdır.
                        </p>

                        <p className="highlight">
                            Web sitesi kontrolü tamamen sizdedir.
                        </p>

                    </div>

                    <div className="webStats">

                        <div className="stat">
                            <h3>%93</h3>
                            <p>Online araştırma yapar</p>
                        </div>

                        <div className="stat">
                            <h3>%70</h3>
                            <p>Daha fazla güven sağlar</p>
                        </div>

                        <div className="stat">
                            <h3>7/24</h3>
                            <p>Kesintisiz müşteri</p>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Gridkutusu;