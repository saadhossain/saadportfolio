import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { userRegister, updateUser } = useContext(AuthContext)

    const handleRegisterUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;

        const profile = form.profile.files[0]
        const formData = new FormData()
        formData.append('image', profile)
        const key = '460277a64e943a5b0c6a7c361e13ac36'
        //Upload file to imgbb
        fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const profileImage = data.data.url;
                userRegister(email, password)
                    .then((result) => {
                        const user = result.user;
                        console.log(user);
                        updateUser(fullName, profileImage)
                        .then(() => {
                            toast.success('User Registration Successful...')
                            form.reset()
                        })
                        .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            })
    }
    return (
        <div className='flex justify-center min-h-screen py-32 herosection'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 font-chivo">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
                </div>
                <form onSubmit={handleRegisterUser} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="profile" className="text-sm">Profile Image</label>
                            <input type="file" name="profile" id="profile" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md border-2 border-primary hover:bg-primary text-white">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400">Already have an account yet?
                            <Link rel="noopener noreferrer" to='/login' className="hover:underline text-violet-400">Sign in</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;