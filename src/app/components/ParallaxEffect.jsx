// src/app/components/ParallaxEffect.tsx
"use client"
import React, { useState, useEffect } from 'react';

const ParallaxEffect = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newOffsetY = window.pageYOffset % (window.innerHeight * 1.5);
            setOffsetY(newOffsetY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-5]">
            <div
                className="absolute w-full h-[150%] bg-no-repeat bg-center transition-transform animate-fadein-500 duration-[2s] ease-out"
                style={{
                    backgroundImage: `url(/img/bg_parallax01_pc.png.webp)`,
                    backgroundSize: '100% auto',
                    transform: `translateY(${offsetY * -0.5}px)`,
                }}
            ></div>
        </div>
    );
};

export default ParallaxEffect;
