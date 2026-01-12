import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto py-5'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </section>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 z-10'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;