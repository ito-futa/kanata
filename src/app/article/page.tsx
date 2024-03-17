import { client } from "@/lib/client";
import React from 'react';

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
}

export default async function article() {
    //microCMSからデータを取得する処理
    const data: dataType = await client.get({
        endpoint: 'article', //microCMSで設定したendpoint
        queries: { fields: 'id,title,thumbnail,text,createdAt', limit: 9 }, // limitを設定して取得件数を増やす
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
        <>
            <div className="mt-4 w-full mx-8">
                <ul>
                    {data?.contents.map((value, index) => (
                        <li key={index}>
                            <span>{value.title}</span>
                            <span>{value.text}</span>
                            <span>{formatDate(value.createdAt)}</span>
                            <img
                                src={value.thumbnail.url}
                                alt={value.title}
                                className="w-16 h-16 mr-4 object-cover"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}