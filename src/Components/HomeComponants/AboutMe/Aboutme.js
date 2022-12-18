import React from 'react';
import saad from '../../../assests/SaadHossain.jpg';
const Aboutme = () => {
    return (
        <div className='w-full lg:w-11/12 mx-auto lg:flex justify-between items-center gap-10 my-5 lg:my-20' id='about'>
            <div className='w-full lg:w-3/5'>
                <h1 className='text-3xl lg:text-5xl font-semibold text-secondary mb-5 font-bigshoulder'>About Me<span className='text-primary font-mono'>_</span></h1>
                <p className='text-white font-chivo'>
                    Hello! My name is Saddam Hossain and I enjoy creating things that live on the internet. First Time in 2018 during My Diploma Program, I realized that I feel energetic and happy while coding! I understood Web Development is my passion — then I started to explore web technologies such as HTML, CSS, and Bootstrap!<br /><br />

                    Fast-forward to today, I acquired skills in HTML5, CSS3, Bootstrap, Tailwind CSS, DaisyUI, MambaUI, Flowbite, JavaScript, ES6, React, React Router, React Query, AXIOS, Firebase Authentication, React Icons, and other related tools and packages.
                    For BackEnd, I Have Expertise in MongoDB, Nodejs, Express Js, and JWT for Authorization.
                    I am comfortable using popular Development Tools like GitHub, Chrome Devtool, Vercel, Netlify, Stripe Payment, and Firebase.
                    I developed some functional, front-end, and Full Stack web apps with these hands-on skills.<br /><br />

                    I also have Expertise in WordPress Development. I have developed almost 25+ functional Websites using WordPress, Themes, Plugins, and Page Builder.
                </p>
            </div>
            <div className='w-full lg:w-2/5 border-2 border-primary mt-20 lg:mt-0 p-3 rounded relative h-[450px]'>
                <img src={saad} alt='' className='rounded absolute right-5 bottom-5 duration-300 ease-in-out hover:right-4 hover:bottom-4 cursor-pointer' />
            </div>
        </div>
    );
};

export default Aboutme;