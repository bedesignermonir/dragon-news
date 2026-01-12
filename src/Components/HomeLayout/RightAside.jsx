import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import swimming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import PlayGround from '../../assets/playground.png'
import Bg from '../../assets/bg.png'

const RightAside = () => {
    return (
        <div className='sticky top-0'>
            <h1 className='font-bold text-2xl'>Login With</h1>
            <div className="social-login my-3">
                <button className='btn btn-outline text-blue-500 w-full my-2'> <FaGoogle className='text-2xl' /> Login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub className='text-2xl' /> Login with Github</button>
            </div>
            <div className="find-us">
                <h1 className='font-bold text-2xl my-3 mt-5'>Find Us On</h1>
                <div>
                    <button className='btn btn-outline w-full px-3 py-7  justify-start'><FaFacebook className='text-2xl' /> Facbook</button>
                    <button className='btn btn-outline w-full px-3 py-7  justify-start'><FaSquareXTwitter className='text-2xl' />Twitter</button>
                    <button className='btn btn-outline w-full px-3 py-7  justify-start'><FaSquareInstagram className='text-2xl' />Instagram</button>
                </div>
            </div>
            <div className="Qzone bg-base-200 p-5 mt-10 ">
                <h1 className='font-bold text-2xl'>Qzone</h1>
                <div className='space-y-5 '>
                    <img className='mx-auto' src={swimming} alt="" />
                    <img className='mx-auto' src={Class} alt="" />
                    <img className='mx-auto' src={PlayGround} alt="" />

                </div>

            </div>
            <img className='mt-7 mx-auto' src={Bg} alt="" />
        </div>
    );
};

export default RightAside;