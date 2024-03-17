import React from 'react';

const Button = ({ buttonText, link }) => {
    return (
        <div className="border-secondary p-1 rounded-full inline-flex justify-center items-center group">
            <a
                href={link}
                className="px-16 py-5 rounded-full justify-center items-center gap-8 inline-flex bg-white group-hover:bg-secondary transition-colors duration-300"
            >
                <div className="font-bold font-['Yu Gothic'] text-base">
                    <span className="text-secondary group-hover:text-white transition-colors duration-300">{buttonText}  ▶</span>
                </div>
            </a>
        </div>
    );
};

export default Button;