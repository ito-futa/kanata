"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

// 戻る・進むボタンのコンポーネントの引数を修正
const PrevArrow = ({ onClick }) => {
    return (
        <button className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2" onClick={onClick}>
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
        <button className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2" onClick={onClick}>
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
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1, // 1つのスライドだけを中央で表示
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // 追加: レスポンシブな振る舞いを設定することも可能
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            // 他のブレークポイントもここに追加できます
        ]
    };

    const images = ["/img/mv_bg-01.jpg", "/img/mv-01.png", "/img/mv-02.png"];

    return (
        <div className="relative w-full overflow-hidden">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full px-4">
                        <Image
                            src={image}
                            alt="スライド画像"
                            layout='responsive'
                            width={500} // コンテナのサイズに応じて調整してください
                            height={300} // コンテナのサイズに応じて調整してください
                            objectFit="contain" // 画像がコンテナに収まるようにする
                            className="block"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );

};

export default Pickup;
