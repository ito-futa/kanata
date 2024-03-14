import React from 'react';
import Script from 'next/script';

const Xtimeline = () => {
    return (
        <>
            <a className="twitter-timeline" href="https://twitter.com/SaiunKanata?ref_src=twsrc%5Etfw">Tweets by SaiunKanata</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </>
    );
};

export default Xtimeline;
