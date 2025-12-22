import React, { useState, useEffect } from 'react';
import './Facilities.css';

const facilityImages = [
    '/assets/ins1.jpg',
    '/assets/ins4.jpg',
    '/assets/3.jpeg',
    '/assets/4.jpeg',
    '/assets/5.jpeg',
    '/assets/6.jpeg',
    '/assets/ins2.jpg',
    '/assets/ins3.jpg',
    '/assets/ins5.jpg',
];

const Facilities = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % facilityImages.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="facilities" className="section facilities-section">
            <div className="container">
                <h2 className="section-title">Nos Installations</h2>
                <div className="facilities-content">
                    <div className="facility-text">
                        <h3>Équipements de Pointe</h3>
                        <p>
                            Notre centre est équipé des dernières technologies pour votre bien-être.
                            Nous disposons de lits médicaux spécialisés pour les traitements du dos,
                            d'un espace fitness complet avec miroirs pour corriger vos postures,
                            et d'une salle dédiée aux soins du visage dans une ambiance apaisante.
                        </p>
                        <ul className="facility-list">
                            <li>Lits médicaux ergonomiques</li>
                            <li>Espace Fitness tout équipé</li>
                            <li>Salle de soin visage privée</li>
                            <li>Ambiance zen et relaxante</li>
                        </ul>
                    </div>
                    <div className="facility-image">
                        <div className="facility-slideshow">
                            {facilityImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Installation ${index + 1}`}
                                    className={`facility-slide ${index === currentImage ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
