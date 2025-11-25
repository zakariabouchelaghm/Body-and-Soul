import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Body and Soul</h3>
                    <p>Votre destination pour la santé, la beauté et le bien-être.</p>
                </div>
                <div className="footer-col">
                    <h3>Contact</h3>
                    <p>📍 Centre Medical Chiad, Aïn Oulmene</p>
                    <p>📞 05 58 94 98 03</p>
                </div>
                <div className="footer-col">
                    <h3>Suivez-nous</h3>
                    <div className="social-links">
                        <a href="https://instagram.com/soumia_bouchelaghem" target="_blank" rel="noopener noreferrer">Instagram</a>
                        {/* Add more social links if needed */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Body and Soul. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
