// src/app/components/ParallaxEffect.tsx
"use client"
import React, { useState, useEffect } from 'react';

const ParallaxEffect = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newOffsetY = window.pageYOffset;
            setOffsetY(newOffsetY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-5]">
            <div
                className="w-full h-full bg-repeat-y bg-center"
                style={{
                    backgroundImage: `url(/img/parallax_pc-01.png)`,
                    backgroundSize: 'auto 100%',
                    backgroundRepeat: 'repeat-y',
                    transform: `translateY(${offsetY * -0.3}px)`,
                }}
            ></div>
        </div>
    );
};

export default ParallaxEffect;
