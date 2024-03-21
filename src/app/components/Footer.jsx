import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="w-full h-[330px] px-[440px] py-16 bg-black flex-col justify-between items-center inline-flex">
            <div className=" justify-center items-center gap-16 inline-flex">
                <a href="https://www.youtube.com/">
                    <Image
                        src="/img/icon_youtube-01.png"
                        alt="YouTube icon"
                        width={52}
                        height={38}
                        unoptimized={true} // 外部リンクやUIコンポーネントの場合に適用
                    />
                </a>
                <a href="https://twitter.com/SaiunKanata">
                    <Image
                        src="/img/icon_x-01.png"
                        alt="Twitter icon"
                        width={38}
                        height={38}
                        unoptimized={true} // 外部リンクやUIコンポーネントの場合に適用
                    />
                </a>
            </div>
            <div className="text-white font-bold ">© 2024 Saiun Kanata Co., Ltd.</div>
        </div>
    );
};

export default Footer;
