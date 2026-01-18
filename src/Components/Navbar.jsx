import React from 'react';
import { Link, NavLink } from 'react-router';
import personImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <section></section>
            <section className='flex gap-5 text-neutral'>
                <NavLink to='/'>Homes</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </section>
            <section className='flex gap-2'>
                <img src={personImg} alt="" />
                <Link to="/auth/login" className='btn btn-secondary'>Login</Link>
            </section>
        </div>
    );
};

export default Navbar;