// src/app/components/Background.jsx

import React from 'react';

const Background = () => {
    return (
        <div
            className="fixed inset-0 z-[-50] bg-center bg-cover bg-[url('/img/bg_pc-01.jpg')] w-full opacity-80"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default Background;