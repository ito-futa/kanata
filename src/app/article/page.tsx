// src/app/article/page.tsx
import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import ParallaxEffect from '../components/ParallaxEffect';
import ArticleCard from '../components/ArticleCard';

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
        <section className="max-w-[1200px] mx-auto" >
            <ParallaxEffect />
            <div className="w-full my-24 flex justify-center flex-col items-center">
                <div className="w-full mb-8">
                    <Heading title="News" subtitle="最新情報" />
                </div>
                <div className="grid grid-cols-3 gap-y-20 justify-items-center w-full mb-20">
                    {data?.contents.map((article) => (
                        <ArticleCard
                            key={article.id}
                            imageUrl={article.thumbnail.url}
                            category={article.category}
                            date={formatDate(article.createdAt)}
                            title={article.title}
                            link={`/article/${article.id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}