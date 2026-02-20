import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { logIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })

        navigate(`${location.state ? location.state : "/"}`)



    }

    return (

        <div className='flex items-center justify-center'>

            {/* 2. Increased max-w to 'max-w-lg' for more width */}
            <main className='w-full max-w-lg mx-auto'>

                {/* 3. Removed h-screen from here and added flex properties to center internal content */}
                <div className="card bg-base-100 shadow-2xl min-h-[300px] flex flex-col justify-center">

                    {/* 4. Increased padding (p-10) to make the white area feel much larger */}
                    <div className="card-body p-10">

                        <h1 className='text-center font-bold text-3xl py-5'>Login Your Account</h1>

                        <hr className="my-4" />

                        <form onSubmit={handleLogIn} className="fieldset gap-4">
                            <label className="label font-semibold">Email</label>
                            <input name='email' type="email" className="input input-bordered w-full" placeholder="Email" />

                            <label className="label font-semibold">Password</label>
                            <input name='password' type="password" className="input input-bordered w-full" placeholder="Password" />



                            <button type='submit' className="btn btn-neutral mt-6 w-full">Login</button>

                            <p className='text-center font-bold'>Dont’t Have An Account ?<Link to='/auth/register' className='text-red-400'> Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;