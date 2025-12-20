import React from 'react';
import { NavLink } from 'react-router';
import personImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <section></section>
            <section className='flex gap-5 text-neutral'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='#'>About</NavLink>
                <NavLink to='#'>Career</NavLink>
            </section>
            <section className='flex gap-2'>
                <img src={personImg} alt="" />
                <button className='btn btn-secondary'>Login</button>
            </section>
        </div>
    );
};

export default Navbar;