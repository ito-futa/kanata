import { client } from "@/lib/client"

type dataType = {
    contents: contentsType[]
    totalCount: number
    offset: number
    limit: number
}
type contentsType = {
    id: string;
    title: string;
    thumbnail: { url: string }; // サムネイル画像のURLを持つオブジェクト
    text: string; // リッチエディタの本文
}

export default async function todo() {
    //microCMSからデータを取得する処理
    const data: dataType = await client.get({
        endpoint: 'article', //microCMSで設定したendpoint
        queries: { fields: 'id,title,thumbnail,text' },
    })

    return (
        <>
            <div className="mt-4 w-full mx-8">
                <ul>
                    {data?.contents.map((value, index) => (
                        <li key={index}>
                            <span>{value.title}</span>
                            <span>{value.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}