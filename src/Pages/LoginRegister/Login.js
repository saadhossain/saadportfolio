import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUserLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Account Login Successful... Redirecting...')
            e.target.reset()
            navigate('/dashboard')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center min-h-screen py-32 herosection'>
            <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 font-chivo">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Login Your Account</h1>
                </div>
                <form onSubmit={handleUserLogin} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md border-2 border-primary hover:bg-primary text-white">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                            <Link rel="noopener noreferrer" to='/register' className="hover:underline text-violet-400">Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;