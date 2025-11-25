import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // Spa stones and candles
        title: 'Bienvenue chez Body and Soul',
        subtitle: 'Santé et Beauté'
    },
    {
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // Wellness center interior
        title: 'Massage Relaxant',
        subtitle: 'Détendez votre corps et votre esprit'
    },
    {
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // Facial massage tools and products
        title: 'Soins du Visage',
        subtitle: 'Traitements professionnels pour une peau éclatante'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-overlay">
                        <div className="container hero-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <a href="#contact" className="btn">Réserver Maintenant</a>
                        </div>
                    </div>
                </div>
            ))}
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
