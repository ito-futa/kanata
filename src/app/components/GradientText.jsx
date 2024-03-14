import React from 'react';

const GradientText = ({ text }) => {
    return (
        <div className="bg-secondary inline-block rounded-md px-4">
            <div className="text-primary text-[64px] font-bold font-['Yu Gothic']">
                {text}
            </div>
        </div>
    );
};

export default GradientText;