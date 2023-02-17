import React from 'react';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { path } from '../until/path';

const ButtonHome = () => {
    return (
        <Link
            to={path.home}
            className="h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,0.4)]
         text-white text-2xl p-4 fixed left-10 flex items-center justify-center top-[61px]"
        >
            <span>
                <HiHome />
            </span>
        </Link>
    );
};

export default ButtonHome;
