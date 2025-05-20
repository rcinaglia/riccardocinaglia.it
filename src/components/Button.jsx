import React from 'react';

const Button = ({
    href,
    children,
    className = ''
}) => {
    return (
        <button
            className={`bg-white text-black p-2 px-4 rounded-[8px] mt-2 mb-2 flex text-center ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;