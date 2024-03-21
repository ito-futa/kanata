import React from 'react';
import Image from "next/image";

// Headingコンポーネントの定義
const Heading = ({ title, subtitle }) => {
  return (
    <div className=" h-32 flex flex-col justify-center items-start">
      <div className="flex items-center gap-2">
        <Image
          src="img/icon-star.svg"
          alt="Star"
          width={40}
          height={40} />
        <h2 className="text-[64px] font-semibold font-['Yu Gothic UI'] text-secondary">{title}</h2>
      </div>
      <div className="text-[32px] font-semibold font-['Yu Gothic UI'] relative -top-4 text-secondary">{subtitle}</div>
    </div>
  );
};

export default Heading;