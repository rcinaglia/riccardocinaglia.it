import React from 'react';

const Button = ({
    href,
    children,
    className = ''
}) => {
    return (
        <button
            className={`bg-white text-black p-2 px-4 rounded-[8px] mt-2 mb-2 flex ${className}`}
        >
            <a href={href}>{children}</a>
        </button>
    );
};

export default Button;