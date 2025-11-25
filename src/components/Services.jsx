import React from 'react';
import './Services.css';

const servicesList = [
    {
        title: 'Massage Spécialisé',
        description: 'Traitement pour les douleurs dorsales et la sciatique (Scoliose).',
        icon: '💆‍♀️'
    },
    {
        title: 'Drainage Lymphatique',
        description: 'Stimulation de la circulation de la lymphe pour détoxifier l\'organisme.',
        icon: '💧'
    },
    {
        title: 'Massage Relaxant',
        description: 'Détente absolue pour évacuer le stress et les tensions.',
        icon: '✨'
    },
    {
        title: 'Soin Visage',
        description: 'Hydrafacial et massage anti-rides spécial pour une peau éclatante.',
        icon: '🧖‍♀️'
    },
    {
        title: 'Sports et Fitness',
        description: 'Remise en forme avec équipements modernes et suivi personnalisé.',
        icon: '🏋️‍♀️'
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title">Nos Services</h2>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
