import React from 'react';
import saad from '../../../assests/SaadHossain.jpg';
const Aboutme = () => {
    return (
        <div className='w-full lg:w-10/12 mx-auto lg:flex justify-between items-center gap-10 my-5 lg:my-20'>
            <div className='w-full lg:w-3/5'>
                <h1 className='text-5xl text-accent mb-5'>About Me_</h1>
                <p>
                    Hello! My name is Saddam Hossain and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I was in My Diploma Program — then I started to explore web technologies such as HTML, CSS and Bootstrap!<br/><br/>

                    Fast-forward to today, I acquired skills in HTML5, CSS3, Bootstrap, Tailwind CSS, DaisyUI, MambaUI, Flowbite, JavaScript, ES6, React, React Router, React Query, AXIOS, Firebase Authentication, React Icons, and other related tools and packages.
                    For BackEnd, I Have Expertise in MongoDB, Nodejs, Express Js, and JWT for Authorization.
                    I am comfortable using popular Development Tools like GitHub, Chrome Devtool, Vercel, Netlify, Stripe Payment, and Firebase.
                    I developed some functional, front-end, and Full Stack web apps with these hands-on skills.<br/><br/>

                    I also have Experties on WordPress Development. I have developed almost 25+ functional Websites using WordPress, Themes, Plguins and Page Builder.
                </p>
            </div>
            <div className='w-full lg:w-2/5 border-2 border-primary mt-20 lg:mt-0 p-3 rounded relative h-[450px]'>
                <img src={saad} alt='' className='rounded absolute right-5 bottom-5 duration-300 ease-in-out hover:right-4 hover:bottom-4 cursor-pointer' />
            </div>
        </div>
    );
};

export default Aboutme;