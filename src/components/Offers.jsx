import React from 'react';
import './Offers.css';

const offersList = [
    {
        title: 'Un jour pour les amies',
        subtitle: 'عرض للشخصين',
        price: '5000 DA',
        originalPrice: '9000 DA',
        features: ['Hydrafacial', 'Massage facial']
    },
    {
        title: 'Un jour pour les amies',
        subtitle: 'عرض للشخصين',
        price: '5000 DA',
        originalPrice: '10000 DA',
        features: ['Hydrafacial', 'Massage relaxant']
    }
];

const Offers = () => {
    return (
        <section id="offers" className="section offers-section">
            <div className="container">
                <h2 className="section-title">Nos Offres Spéciales</h2>
                <div className="offers-grid">
                    {offersList.map((offer, index) => (
                        <div key={index} className="offer-card fade-in">
                            <h3>{offer.title}</h3>
                            {offer.subtitle && <p className="offer-subtitle">{offer.subtitle}</p>}
                            <div className="price-container">
                                {offer.originalPrice && (
                                    <div className="original-price">{offer.originalPrice}</div>
                                )}
                                <div className="price">{offer.price}</div>
                            </div>
                            <ul>
                                {offer.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn">Réserver</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
