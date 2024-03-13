import React from 'react';
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex justify-center fixed text-center w-full">
            <div className="w-[1200px] h-24 px-2 justify-between items-center flex">
                {/* ロゴ部分 */}
                <div className="px-8 py-[14px] bg-white rounded-2xl shadow flex justify-center items-center gap-2">
                    <Link href="/">
                        <img className="w-[130px] h-[30px]" src="https://via.placeholder.com/130x30" alt="ロゴ" />
                    </Link>
                </div>
                {/* ナビゲーションリンク部分 */}
                <div className="text-accessible px-8 py-4 bg-white rounded-2xl shadow flex justify-center items-center gap-2">
                    {/* Newsリンク */}
                    <div className="w-[80px] flex justify-center items-center">
                        <div className="text-base font-normal font-['Yu Gothic']">
                            <Link href="/news">
                                News
                            </Link>
                        </div>
                    </div>
                    {/* Profileリンク */}
                    <div className="w-[80px] flex justify-center items-center">
                        <div className="text-base font-normal font-['Yu Gothic']">
                            <Link href="/profile">
                                Profile
                            </Link>
                        </div>
                    </div>
                    {/* Contactリンク */}
                    <div className="w-[80px] flex justify-center items-center">
                        <div className="text-base font-normal font-['Yu Gothic']">
                            <Link href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
