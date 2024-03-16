"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

// 戻る・進むボタン
const PrevArrow = ({ props }) => {
    return (
        <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2" onClick={props}>
            <Image
                src="/img/button_prev.svg"
                alt="スライダー用の左矢印（戻る）"
                width={40}
                height={40}
            />
        </div>
    );
}

const NextArrow = ({ props }) => {
    return (
        <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2" onClick={props}>
            <Image
                src="/img/button_next.svg"
                alt="スライダー用の右矢印（進む）"
                width={40}
                height={40}
            />
        </div>
    );
}

// Pickupコンポーネント
const Pickup = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // 中央の画像だけを強調表示
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px', // paddingを0にすると画像が中央に来た時のみ大きく表示されます
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    // 表示させる画像
    const images = ["/img/mv_bg-01.jpg", "/img/mv-01.png", "/img/mv-02.png"];

    return (
        <div className="relative w-full overflow-hidden">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image}
                            alt="スライダー用の右矢印（進む）"
                            fill
                            className="px-auto block object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Pickup;
