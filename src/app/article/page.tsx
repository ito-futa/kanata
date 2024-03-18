// src/app/article/page.tsx
import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import ParallaxEffect from '../components/ParallaxEffect';

type dataType = {
    contents: contentsType[];
    totalCount: number;
    offset: number;
    limit: number;
}
type contentsType = {
    id: string;
    title: string;
    thumbnail: { url: string }; // サムネイル画像のURLを持つオブジェクト
    text: string; // リッチエディタの本文
    createdAt: string; // 作成日時
    category: string; //カテゴリ
}

export default async function article() {
    //microCMSからデータを取得する処理
    const data: dataType = await client.get({
        endpoint: 'article', //microCMSで設定したendpoint
        queries: { fields: 'id,title,thumbnail,text,createdAt,category', limit: 9 }, // limitを設定して取得件数を増やす
    });

    // 日付を YYYY/MM/DD 形式でフォーマットする関数
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月（頭の0を除去）
        const day = date.getDate(); // 日（頭の0を除去）
        return `${year}年${month}月${day}日`;
    };

    return (
        <div className="flex justify-center py-32 w-full mx-auto max-w-[800px]">
            <ParallaxEffect />
            <div className="mt-4 w-full">
                <div className="w-full mb-8">
                    <Heading title="News" subtitle="最新情報" />
                </div>
                <ul>
                    {data?.contents.map((value, index) => (
                        <li key={index}>
                            <Link href={`/article/${value.id}`}>
                                <span>{value.title}</span>
                            </Link>
                            <span>{value.category}</span>
                            <span>{formatDate(value.createdAt)}</span>
                            <div className="w-[160px] h-[160px] relative">
                                <Image
                                    src={value.thumbnail.url}
                                    alt={value.title}
                                    width={40}
                                    height={40}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="object-cover"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}