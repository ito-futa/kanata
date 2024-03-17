import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';

type articleType = {
    id: string;
    title: string;
    thumbnail: { url: string };
    text: string;
    createdAt: string;
    category: string;
};

export default function ArticlePage() {
    const router = useRouter();
    const { id } = router.query;
    const [article, setArticle] = React.useState<articleType | null>(null);

    React.useEffect(() => {
        if (id) {
            client.get({ endpoint: "article", contentId: id as string })
                .then((res: articleType) => {
                    setArticle(res);
                });
        }
    }, [id]);

    if (!article) return <div>Loading...</div>;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <div className="mb-4">
                <Image
                    src={article.thumbnail.url}
                    alt={article.title}
                    width={600}
                    height={400}
                    objectFit="cover"
                />
            </div>
            <p className="text-gray-600">{formatDate(article.createdAt)}</p>
            <div className="prose mt-4">
                <div dangerouslySetInnerHTML={{ __html: article.text }} />
            </div>
        </div>
    );
}
