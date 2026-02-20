import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
            })

    };
    return (

        <div className='flex items-center justify-center'>


            {/* 2. Increased max-w to 'max-w-lg' for more width */}
            <main className='w-full max-w-lg mx-auto'>

                {/* 3. Removed h-screen from here and added flex properties to center internal content */}
                <div className="card bg-base-100 shadow-2xl min-h-[300px] flex flex-col justify-center">

                    {/* 4. Increased padding (p-10) to make the white area feel much larger */}
                    <div className="card-body p-10">

                        <h1 className='text-center font-bold text-3xl py-5'>Register your account</h1>

                        <hr className="my-4" />

                        <form onSubmit={handleRegister} className="fieldset gap-4">
                            {/* Name */}
                            <label className="label font-semibold">Name</label>
                            <input type="text" name='name' className="input input-bordered w-full" placeholder="Enter your Name" />
                            {/* Name */}

                            {/* photo */}
                            <label className="label font-semibold">Photo URL</label>
                            <input type="text" name='photo' className="input input-bordered w-full" placeholder="Place your Photo URL" />
                            {/* photo */}

                            {/* email */}
                            <label className="label font-semibold">Email</label>
                            <input type="email" name='email' className="input input-bordered w-full" placeholder="Email" />
                            {/* email */}

                            {/* password */}
                            <label className="label font-semibold">Password</label>
                            <input type="password" name='password' className="input input-bordered w-full" placeholder="Password" />
                            {/* password */}

                            <label className="label">
                                <input type="checkbox" className="checkbox" />
                                Accept <span className='font-bold'>Term & Conditions</span>
                            </label>

                            <button type='submit' className="btn btn-neutral mt-6 w-full">Register</button>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;