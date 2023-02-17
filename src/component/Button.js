import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-slate-900 hover:bg-slate-700 text-white 
            font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center 
            sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        >
            {children}
        </button>
    );
};

export default Button;
