"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Profile() {
    const [mainImage, setMainImage] = useState('chara_st-01.png');

    // アイコンをクリックしたときのハンドラ
    const handleIconClick = (iconNumber) => {
        setMainImage(`chara_st-0${iconNumber}.png`);
    };

    return (
        <div className="flex justify-center py-32 bg-white">
            <div className="w-full max-w-6xl flex gap-8">
                {/* 左カラム：画像 */}
                <div className="flex-1">
                    <Image
                        width={400}
                        height={800}
                        alt="キャラクター画像"
                        src={`/img/${mainImage}`}
                    />
                </div>
                {/* 右カラム：テキスト */}
                <div className="flex-1 flex flex-col justify-center">
                    {/* 名前 */}
                    <div className="space-y-2">
                        <h1 className="text-[64px] font-bold text-secondary font-['Yu_Gothic']">彩雲カナタ</h1>
                        <h2 className="text-[32px] font-medium text-secondary font-['Yu_Gothic']">Saiun Kanata</h2>
                    </div>
                    {/* 画像リスト */}
                    <div className="flex gap-2 mt-8">
                        {[...Array(5)].map((_, i) => (
                            <button key={i} onClick={() => handleIconClick(i + 1)} className="focus:outline-none">
                                <Image
                                    width={100}
                                    height={100}
                                    alt={`彩雲カナタのアイコン${i + 1}`}
                                    src={`/img/chara_icon-0${i + 1}.png`}
                                />
                            </button>
                        ))}
                    </div>
                    {/* 説明テキスト */}
                    <p className="text-base font-medium text-gray-900 mt-4">
                        カメラが好きで、撮影のために秘境を探検するのが趣味。<br />
                        パンケーキも好きで、撮影地の近くに良いカフェがあるかも重要！<br />
                        性格は冒険心があり、新しいことに挑戦するのが大好き。<br />
                        狐耳は自然と動物たちを引き寄せる不思議な魅力を持っている。
                    </p>
                    {/* 情報テーブル */}
                    <div className="mt-8 flex gap-16 bg-white p-8 rounded-lg border-2 border-zinc-400">
                        <div className="text-base font-medium text-gray-800">
                            デビュー日<br />
                            誕生日<br />
                            身長<br />
                            年齢<br />
                            好きなカメラ
                        </div>
                        <div className="text-base font-medium text-gray-800">
                            2024年3月6日<br />
                            11月24日<br />
                            159センチ<br />
                            ??歳<br />
                            富士フィルム
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
