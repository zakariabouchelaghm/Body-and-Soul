import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="container video-container">
                <div className="video-text">
                    <h2>Découvrez Body and Soul</h2>
                    <p>Une expérience unique de bien-être et de remise en forme.</p>
                    <p>Nos installations modernes et notre équipe professionnelle sont à votre service pour vous offrir les meilleurs soins de massage, drainage lymphatique, et remise en forme.</p>
                </div>
                <div className="video-player">
                    <video controls className="video-element">
                        <source src="/assets/Untitled Project-final.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
