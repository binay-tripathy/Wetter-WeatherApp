import React, { memo } from 'react';
import '../App.css';

const ParticleBackground = memo(() => {
    const particleCount = window.innerWidth > 768 ? 50 : 30; // Adjust particle count for smaller screens
    const particles = Array(particleCount).fill().map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * -20
    }));

    return (
        <div className="particles">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        animation: `particleFloat ${p.duration}s linear infinite ${p.delay}s`
                    }}
                />
            ))}
        </div>
    );
});

export default ParticleBackground;