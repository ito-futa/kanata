import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full h-[330px] px-[440px] py-16 bg-black flex-col justify-between items-center inline-flex">
            <div className=" justify-center items-center gap-16 inline-flex">
                <img className="w-[52px] h-[38px]" src="https://via.placeholder.com/52x38" />
                <img className="w-[38px] h-10" src="https://via.placeholder.com/38x40" />
            </div>
            <div className="text-white font-bold font-['Yu Gothic']">© 2024 Saiun Kanata Co., Ltd.</div>
        </div>
    );
};

export default Footer;
