import React from 'react';
import './Offers.css';

const offersList = [
    {
        title: 'Nettoyage de Peau Caviar',
        subtitle: 'تنظيف البشرة العادي مع ماسك الكافيار',
        price: '3000 DA',
        originalPrice: '4000 DA',
        image: '/assets/11.jpeg',
        features: ['Nettoyage profond', 'Masque caviar luxueux', 'Hydratation intense'],
        badgeType: 'Février'
    },
    {
        title: 'Hydrafacial + LED',
        subtitle: 'الهدرافسيال مع ماسك لاد مجاني',
        price: '5000 DA',
        originalPrice: '7000 DA',
        image: '/assets/22.jpeg',
        features: ['Hydrafacial complet', 'Masque LED gratuit', 'Éclat instantané'],
        badgeType: 'Février'
    },
    {
        title: 'Hydrafacial + Dermapen',
        subtitle: 'الهدرافسيال مع الديرمابن و ماسك لاد',
        price: '6000 DA',
        originalPrice: '9000 DA',
        image: '/assets/33.jpeg',
        features: ['Hydrafacial', 'Dermapen', 'Masque LED gratuit'],
        badgeType: 'Février'
    },
    {
        title: 'Massage Facial + Réflexologie',
        subtitle: 'مساج الوجه مع رفلكسولوجي اليدين',
        price: '4000 DA',
        originalPrice: '6000 DA',
        image: '/assets/44.jpeg',
        features: ['Massage facial relaxant', 'Réflexologie des mains', 'Détente totale'],
        badgeType: 'Février'
    },
    {
        title: 'Massage Lymphatique',
        subtitle: 'مساج لمفاوي',
        price: '4000 DA',
        originalPrice: '6000 DA',
        image: '/assets/55.jpeg',
        features: ['Drainage lymphatique', 'Détoxification', 'Réduction des gonflements'],
        badgeType: 'Février'
    },
    {
        title: 'Hot Stone Massage',
        subtitle: 'مساج استرخائي بالحجارة الساخنة',
        price: '4000 DA',
        originalPrice: '6000 DA',
        image: '/assets/66.jpeg',
        features: ['Pierres chaudes volcaniques', 'Relaxation profonde', 'Soulagement musculaire'],
        badgeType: 'Février'
    },
    {
        title: 'Haute Fréquence + LED',
        subtitle: 'الهايفريكونس مع ماسك لاد مجاني',
        price: '3000 DA',
        originalPrice: '4500 DA',
        image: '/assets/77.jpeg',
        features: ['Traitement haute fréquence', 'Masque LED gratuit', 'Peau purifiée'],
        badgeType: 'Février'
    },
    {
        title: 'Hydrafacial + Massage Facial',
        subtitle: 'هيدرافيشل مع مساج الوجه',
        price: '5000 DA',
        originalPrice: '9000 DA',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        features: ['Pour 2 personnes', 'Hydrafacial complet', 'Massage facial relaxant', 'Moment entre amies'],
        badgeType: 'friends'
    },
    {
        title: 'Hydrafacial + Massage Relaxant',
        subtitle: 'هيدرافيشل مع مساج استرخائي',
        price: '5000 DA',
        originalPrice: '10000 DA',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
        features: ['Pour 2 personnes', 'Hydrafacial complet', 'Massage relaxant', 'Détente totale'],
        badgeType: 'friends'
    }
];

const Offers = () => {
    return (
        <section id="offers" className="section offers-section">
            <div className="container">
                <h2 className="section-title">Offres Spéciales</h2>
                <p className="section-subtitle">Profitez de nos promotions exceptionnelles</p>
                <div className="offers-grid">
                    {offersList.map((offer, index) => (
                        <div key={index} className="offer-card fade-in">
                            <div className="offer-image-container">
                                <img src={offer.image} alt={offer.title} className="offer-image" />
                                <div className={`offer-badge ${offer.badgeType === 'friends' ? 'badge-friends' : 'badge-december'}`}>
                                    {offer.badgeType === 'friends' ? 'Un jour pour les amies' : 'Offre Février'}
                                </div>
                            </div>
                            <div className="offer-content">
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
                                <a href="#contact" className="btn">Réserver Maintenant</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
