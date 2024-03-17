// クライアント側の実行を指定
"use client"

import React, { useEffect } from 'react';
import Script from 'next/script';

const Xtimeline = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
            window.twttr.widgets.load();
        };
        document.body.appendChild(script);
    }, []);

    return (
        <a className="twitter-timeline" href="https://twitter.com/SaiunKanata?ref_src=twsrc%5Etfw">Tweets by SaiunKanata</a>
    );
};

export default Xtimeline;