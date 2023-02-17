import React from 'react';
import { Outlet } from 'react-router-dom';
import { ButtonHome, Nabar } from '../component';

const Content = () => {
    return (
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <ButtonHome />
            <Outlet />
            <Nabar />
        </section>
    );
};

export default Content;
