import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <section id="location" className="location-section">
            <div className="container">
                <div className="location-header">
                    <h2 className="section-title">Trouvez-Nous</h2>
                    <p className="section-subtitle">
                        Votre voyage vers le bien-être commence ici
                    </p>
                </div>

                <div className="location-content">
                    <div className="map-container">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.92830486187572!2d5.298637318654408!3d35.92610099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f35b9cdbd4d4eb%3A0x85b32af4dec11b63!2sW7GX%2BCHX%2C%20Unnamed%20Road%2C%20A%C3%AFn%20Oulmene!5e0!3m2!1sen!2sdz!4v1764074117299!5m2!1sen!2sdz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Body and Soul Location"
                            ></iframe>
                        </div>
                        <div className="map-overlay">
                            <p>📍 Centre Médical Chiad</p>
                        </div>
                    </div>

                    <div className="location-info">
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Adresse</h3>
                                <p>Centre Médical Chiad</p>
                                <p>Aïn Oulmene, Sétif</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h3>Téléphone</h3>
                                <p>05 58 94 98 03</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
