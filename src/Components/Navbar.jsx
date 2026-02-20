import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import personImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { alert("Tumi Bairaiah Gela") })
            .catch((error) => { console.log(error); })
    }
    return (
        <div className='flex justify-between'>
            <section>{user && user.email}</section>
            <section className='flex gap-5 text-neutral'>
                <NavLink to='/'>Homes</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </section>
            <section className='flex gap-2'>
                <img src={personImg} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-secondary'>Logout</button> : <Link to="/auth/login" className='btn btn-secondary'>Login</Link>
                }

            </section>
        </div>
    );
};

export default Navbar;