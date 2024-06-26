"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ParallaxEffect from '../components/ParallaxEffect';
import Background from '../components/Background';

export default function Profile() {
    const [mainImage, setMainImage] = useState('chara_st-01.png');
    const [imageLoading, setImageLoading] = useState(false);

    // プリロードする画像のパスを配列で定義 // 差分1
    const imagePaths = [
        'chara_st-01.png',
        'chara_st-02.png',
        'chara_st-03.png',
        'chara_st-04.png',
        'chara_st-05.png',
    ];

    // 画像をプリロードする関数を定義 // 差分2
    const preloadImages = () => {
        imagePaths.forEach(image => {
            if (typeof window !== 'undefined') {
                const img = new window.Image();
                img.src = `/img/${image}`;
            }
        });
    };

    // コンポーネントのマウント時に画像をプリロード // 差分3
    useEffect(() => {
        preloadImages();
    }, []);

    // アイコンをクリックしたときのハンドラ
    const handleIconClick = (iconNumber) => {
        setImageLoading(true); // 画像読み込み開始
        setMainImage(`chara_st-0${iconNumber}.png`);
    };

    // 画像読み込み状態のリセット
    useEffect(() => {
        if (imageLoading) {
            setTimeout(() => setImageLoading(false), 0); // 0ミリ秒後に読み込み状態をfalseに
        }
    }, [imageLoading]);

    return (
        <>
            {/* Background */}
            <Background />
            {/* ParallaxEffect */}
            <ParallaxEffect />
            <div className="flex justify-center py-32 mb-32 h-screen">
                <div className="w-full max-w-5xl flex gap-8">
                    {/* 左カラム：画像 */}
                    <div className={`flex-1 ${!imageLoading && 'animate-fadein-500'}`}>
                        <Image
                            width={350}
                            height={700}
                            alt="キャラクター画像"
                            src={`/img/${mainImage}`}
                            onLoadingComplete={() => setImageLoading(false)}
                        />
                    </div>
                    {/* 右カラム：テキスト */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* 名前 */}
                        <div className='mb-8'>
                            <h1 className="text-[64px] font-medium text-secondary">彩雲カナタ</h1>
                            <h2 className="text-[32px] font-medium text-secondary">Saiun Kanata</h2>
                        </div>
                        {/* 画像リスト */}
                        <div className="flex gap-2 mb-8 ">
                            {[...Array(5)].map((_, i) => (
                                <button key={i} onClick={() => handleIconClick(i + 1)} className="focus:outline-none">
                                    <Image
                                        width={100}
                                        height={100}
                                        alt={`彩雲カナタのアイコン${i + 1}`}
                                        src={`/img/chara_icon-0${i + 1}.png`}
                                        className='hover:opacity-50'
                                    />
                                </button>
                            ))}
                        </div>
                        {/* 説明テキスト */}
                        <p className="text-base text-accessible mb-8 leading-loose">
                            カメラが好きで、撮影のために秘境を探検するのが趣味。<br />
                            パンケーキも好きで、撮影地の近くに良いカフェがあるかも重要！<br />
                            性格は冒険心があり、新しいことに挑戦するのが大好き。<br />
                            狐耳は自然と動物たちを引き寄せる不思議な魅力を持っている。
                        </p>
                        {/* 情報テーブル */}
                        <div className="flex gap-16 bg-white py-8 px-16 rounded-lg border-2 border-grey border-solid" style={{ width: 'fit-content' }}>
                            <div className="text-base text-accessible leading-loose">
                                デビュー日<br />
                                誕生日<br />
                                身長<br />
                                年齢<br />
                                好きなカメラメーカー
                            </div>
                            <div className="text-base text-accessible leading-loose">
                                2024年3月15日<br />
                                11月24日<br />
                                159センチ<br />
                                ??歳<br />
                                富士フィルム
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
