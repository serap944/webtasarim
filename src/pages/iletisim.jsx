import React from 'react';
import './iletisim.css';
// Eğer resimlerin public klasöründeyse bu şekilde kullan
// import iletisimImage1 from '../images/iletisim1.jpg';
// import iletisimImage2 from '../images/iletisim2.jpg';

const Iletisim = () => {
    return (

        <main className="anaicerik">

            <div className="iletisim">
                <div className="iletisim-yazi">
                    <i className="fas fa-envelope"></i>
                    <p><strong>e-posta:</strong></p>
                    <p>serap.ekin.12@gmail.com</p>
                </div>

                <div className="iletisim-yazi">
                    <i className="fab fa-whatsapp"></i>
                    <p><strong>whatsapp no:</strong></p>
                    <p>0(541) 562 49 21</p>
                </div>

                <div className="iletisim-yazi">
                    <i className="far fa-calendar-alt"></i>
                    <p><strong>çalışma saatleri:</strong></p>
                    <p>Pazartesi-Cuma</p>
                    <p>10:00 - 17:00</p>
                </div>
            </div>


            <section className="ilekartd">
                <div className="watsap-kutu">
                    <a href="https://wa.me/905415624921" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </section>

        </main>

    );
};
export default Iletisim;