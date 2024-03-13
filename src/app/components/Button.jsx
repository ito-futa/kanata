import React from 'react';

const Button = ({ buttonText, link }) => {
    return (
        <div className="border-secondary p-1 rounded-full inline-flex justify-center items-center">
            <a href={link} className="hover:bg-secondary px-16 py-5 rounded-full justify-center items-center gap-8 inline-flex bg-white">
                <div className="text-secondary hover:text-white text-base font-bold font-['Yu Gothic']">{buttonText} ▶</div>
            </a>
        </div>
    );
};

export default Button;
