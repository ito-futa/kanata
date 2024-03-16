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
        <button className="absolute top-1/2 left-10 z-10 transform -translate-y-1/2" onClick={onClick}>
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
        <button className="absolute top-1/2 right-10 z-10 transform -translate-y-1/2" onClick={onClick}>
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
        dots: false, //ドット（インジケーター）の表示・非表示
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false, //現在表示しているスライドを中央に配置し、次のスライドを少し見切れて表示させます。
        centerPadding: '0', //centerModeを指定した場合に見切れて表示をさせる割合を指定します。
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        adaptiveHeight: false, //スライドの高さを自動で調整するかどうか
        // centerPadding: 80, //スライドとスライドの間隔
        swipeToSlide: true, // ドラッグ、スワイプでのスクロールを有効にするか
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
            // 他のブレークポイントもここに追加できます
        ]
    };

    const images = [
        { src: "/img/mv_bg-01.jpg", url: "/link-1" },
        { src: "/img/mv_bg-01.jpg", url: "/link-2" },
        { src: "/img/mv_bg-01.jpg", url: "/link-3" }
    ];



    return (
        <section className="bg-black flex items-center relative overflow-hidden">
            <div className="w-full py-12">
                <Slider Slider {...settings}> {
                    images.map((image, index) => (
                        <div key={index}>
                            <div className="flex justify-center items-center">
                                <Link href={image.url} passHref>
                                    <Image
                                        src={image.src}
                                        alt="スライド画像"
                                        width={800} // コンテナのサイズに応じて調整してください
                                        height={480} // コンテナのサイズに応じて調整してください
                                        className='rounded-md border-lightgrey border-solid border-2 cursor-pointer'
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div >
        </section >
    );
};

export default Pickup;
