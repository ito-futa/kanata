import React from 'react';
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex justify-center fixed w-full z-50">
            <div className="w-[1200px] h-24 justify-between items-center flex">

                {/* ロゴ部分 */}
                <div className="w-[200px] px-8 h-14 bg-white rounded-2xl shadow flex justify-center items-center gap-2 ">
                    <Link href="/">
                        <img className="w-[130px] h-[30px] hover:opacity-50" src="img/logo-type.png" alt="ロゴ" />
                    </Link>
                </div>

                {/* ナビゲーションリンク部分 */}
                <div className="text-accessible px-8 h-14 bg-white rounded-2xl shadow flex justify-center items-center gap-2">
                    {/* Newsリンク */}
                    <div className="w-[80px] flex justify-center hover:text-lightgrey">
                        <Link href="/news">
                            News
                        </Link>
                    </div>
                    {/* Profileリンク */}
                    <div className="w-[80px] flex justify-center hover:text-lightgrey">
                        <Link href="/profile">
                            Profile
                        </Link>
                    </div>
                    {/* Contactリンク */}
                    <div className="w-[80px] flex justify-center hover:text-lightgrey">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
