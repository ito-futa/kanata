import React from 'react';

// Headingコンポーネントの定義
const Heading = ({ title, subtitle }) => {
  return (
    <div className=" h-32 flex flex-col justify-center items-start">
      <div className="flex items-center gap-2">
        <img src="/img/icon-star.svg" />
        <h2 className="text-[64px] font-bold font-['Yu Gothic UI'] text-secondary">{title}</h2>
      </div>
      <div className="text-[32px] font-bold font-['Yu Gothic UI'] relative -top-4 text-secondary">{subtitle}</div>
    </div>
  );
};

export default Heading;