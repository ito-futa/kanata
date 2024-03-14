import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full h-[330px] px-[440px] py-16 bg-black flex-col justify-between items-center inline-flex">
            <div className=" justify-center items-center gap-16 inline-flex">
                <a href="">
                    <img className="w-[52px] h-[38px]" src="img/icon_youtube-01.png" />
                </a>
                <a href="https://twitter.com/SaiunKanata">
                    <img className="w-[38px] h-10" src="img/icon_x-01.png" />
                </a>
            </div>
            <div className="text-white font-bold font-['Yu Gothic']">© 2024 Saiun Kanata Co., Ltd.</div>
        </div>
    );
};

export default Footer;
