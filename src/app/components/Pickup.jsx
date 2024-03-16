"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 独自の矢印コンポーネント
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2" onClick={onClick}>
            <img src="/img/button_next.svg" alt="Next" className="h-12 w-auto" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2" onClick={onClick}>
            <img src="/img/button_prev.svg" alt="Prev" className="h-12 w-auto" />
        </div>
    );
}

// Pickupコンポーネント
const Pickup = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 中央の画像だけを強調表示
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px', // paddingを0にすると画像が中央に来た時のみ大きく表示されます
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div style={{ bottom: "25px" }}>
                <ul className="flex justify-center space-x-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
        )
    };

    // 仮のイメージURLリスト
    const images = ["/img/mv_bg-01.jpg", "/img/mv-01.png", "/img/mv-02.png"];

    return (
        <div className="relative w-full overflow-hidden">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="outline-none">
                        <img src={image} alt={`Slide ${index}`} className="mx-auto block" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Pickup;
