// クライアント側の実行を指定
"use client"

import React from 'react';
import Script from 'next/script';

const Xtimeline = () => {
    return (
        <>
            <a className="twitter-timeline" href="https://twitter.com/SaiunKanata?ref_src=twsrc%5Etfw">Tweets by SaiunKanata</a>
            {/* Scriptコンポーネントを使用して外部スクリプトを読み込む */}
            <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        </>
    );
};

export default Xtimeline;
