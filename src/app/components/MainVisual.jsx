"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import GradientText from './GradientText.jsx';

const MainVisual = () => {

    return (
        <section className="mx-auto pt-28 pb-24 max-w-[1200px] h-[930px] relative bg-white border-8">
            <div className="z-10 max-w-[1000px] h[600px] mx-auto">
                <Image
                    src="/img/mv_bg-01.jpg"
                    objectFit="cover"
                    className="rounded-xl"
                    alt="メインビジュアル背景の海"
                    layout="responsive"
                    width={1000}
                    height={600}
                />
            </div>
            <div className="z-20 w-1/2 absolute transform -translate-y-1/4 top-[30%] left-1/2 -translate-x-1/2">
                <Image
                    src="/img/mv-01.png"
                    className=""
                    alt="メインビジュアルのキャラ画像"
                    layout="responsive"
                    width={700}
                    height={600}
                    objectFit='contain'
                />
            </div>
            <div className="animate-fadein-2000 absolute z-30 transform -translate-y-1/4 top-[58%] left-[22%] -translate-x-1/2"><GradientText text="終わらない旅へ" /></div>
            <div className="animate-fadein-4000 absolute z-30 transform -translate-y-1/4 top-[70%] left-[28%] -translate-x-1/2"><GradientText text="ともに出かけよう" /></div>
        </section>
    );
};

export default MainVisual;
