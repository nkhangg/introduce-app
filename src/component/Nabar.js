import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { menu } from '../until/menu';
import { NavLink } from 'react-router-dom';

const Nabar = () => {
    const active =
        'text-2xl p-3 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)]';

    const notActive = 'text-2xl p-3 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.4)]';

    return (
        <nav
            className="fixed bg-[rgba(255,255,255,0.1)] px-6 py-4 rounded-full 
            flex bottom-20 right-2/4 translate-x-[50%] gap-4 shadow-lg"
        >
            {menu.map((item) => {
                return (
                    <Tippy key={item.id} content={item.name}>
                        <NavLink
                            to={`/guide/${item.link}`}
                            className={({ isActive }) => (isActive ? active : notActive)}
                        >
                            {item.icon}
                        </NavLink>
                    </Tippy>
                );
            })}
        </nav>
    );
};

export default Nabar;
