"use client"
import { useState, useEffect } from 'react';
import Heading from '../components/Heading';
import ParallaxEffect from '../components/ParallaxEffect';
import Background from '../components/Background';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            let formErrors = {};
            if (!name) formErrors.name = 'お名前を入力してください。';
            if (email && !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) formErrors.email = '正しいメールアドレスを入力してください。';
            if (!inquiryType) formErrors.inquiryType = 'お問い合わせの種類を選択してください。';
            if (!content) formErrors.content = 'お問い合わせ内容を入力してください。';

            setErrors(formErrors);
        }
    }, [isSubmitted, name, email, inquiryType, content]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted', { name, email, inquiryType, content });
            // 送信処理をここで実装
        }
    };

    return (
        <div className="flex justify-center py-32">
            {/* Background */}
            <Background />
            {/* ParallaxEffect */}
            <ParallaxEffect />
            <form onSubmit={handleSubmit} className="w-full max-w-[800px]">
                <div className="mb-12">
                    <Heading title="Contact" subtitle="お問い合わせ" />
                </div>
                <p className="text-center text-lg">
                    以下の項目をすべて入力して「確認する」ボタンを押してください。
                </p>
                <p className="text-red-500 text-center mb-12 text-sm">
                    ※現在メールを送ることができません
                </p>

                <div className="mb-12">
                    <h4 className="text-accessible font-bold mb-2 inline-block mr-2">
                        ■ お名前</h4>
                    <span className="bg-red-500 text-white p-1 rounded-md text-sm">必須</span>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="あなたのお名前を記入してください"
                        className="mt-1 block w-full border-grey border-2 border-solid p-2 rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                </div>

                <div className="mb-12">
                    <h4 className="text-accessible font-bold mb-2 inline-block mr-2">
                        ■ ご連絡先メールアドレス
                    </h4>
                    <span className="bg-red-500 text-white p-1 rounded-md text-sm">必須</span>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="mt-1 block w-full border-grey border-2 border-solid p-2 rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>

                <div className="mb-12">
                    <h4 className="text-accessible font-bold mb-2 inline-block mr-2">
                        ■ お問い合わせの種類
                    </h4>
                    <span className="bg-red-500 text-white p-1 rounded-md text-sm">必須</span>

                    <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="mt-1 block w-full border-grey border-2 border-solid p-2 rounded-md"
                    >
                        <option value="">選択して下さい</option>
                        <option value="video">動画に関してのお問い合わせ</option>
                        <option value="job">お仕事のお問い合わせ</option>
                        <option value="fanmail">ファンレター/プレゼントについてのお問い合わせ</option>
                        <option value="other">その他のお問い合わせ</option>
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-xs italic">{errors.inquiryType}</p>}
                </div>

                <div className="mb-12">
                    <h4 className="text-accessible font-bold mb-2 inline-block mr-2">
                        ■ お問い合わせ内容
                    </h4>
                    <span className="bg-red-500 text-white p-1 rounded-md text-sm">必須</span>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="お問い合わせ内容をご記入ください"
                        className="mt-1 block w-full border-grey border-2 border-solid p-2 rounded-md h-32"
                    />
                    {errors.content && <p className="text-red-500 text-xs italic">{errors.content}</p>}
                </div>

                <div className="flex justify-center">
                    <button type='submit'>
                        <div className="border-secondary p-1 rounded-full inline-flex justify-center items-center group">
                            <div className="px-16 py-4 rounded-full justify-center items-center gap-8 inline-flex bg-white group-hover:bg-secondary transition-colors duration-300">
                                <div className="font-bold text-base">
                                    <span className="text-secondary group-hover:text-white transition-colors duration-300">送信する</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
}
