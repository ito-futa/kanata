"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Link from 'next/link';

// 戻る・進むボタンのコンポーネントの引数を修正
const PrevArrow = ({ onClick }) => {
    return (
        <button className="absolute top-1/2 left-[23%] z-10 transform -translate-y-1/2" onClick={onClick}>
            <Image
                src="/img/button_prev.svg"
                alt="スライダー用の左矢印（戻る）"
                width={60}
                height={60}
            />
        </button>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <button className="absolute top-1/2 right-[23%] z-10 transform -translate-y-1/2" onClick={onClick}>
            <Image
                src="/img/button_next.svg"
                alt="スライダー用の右矢印（進む）"
                width={60}
                height={60}
            />
        </button>
    );
};

// Pickupコンポーネントの設定を修正
const Pickup = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '25%',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        adaptiveHeight: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    };

    const images = [
        { src: "/img/thumbnail-1.jpg", url: "/" },
        { src: "/img/thumbnail-2.jpg", url: "/" },
        { src: "/img/thumbnail-3.jpg", url: "/" }
    ];

    return (
        <section className="flex items-center bg-black relative overflow-hidden">
            <div className="w-full py-4">
                <Slider {...settings}> {
                    images.map((image, index) => (
                        <div key={index} >
                            <div className="flex justify-center items-center">
                                <Link href={image.url} passHref>
                                    <Image
                                        src={image.src}
                                        alt="スライド画像"
                                        width={800}
                                        height={480}
                                        className='rounded-md border-lightgrey border-solid border-2 cursor-pointer'
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </section>
    );
};


export default Pickup;
