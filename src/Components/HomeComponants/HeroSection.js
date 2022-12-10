import React from 'react';
import './Hero.css';
const HeroSection = () => {
    return (
        <div className='min-h-screen py-32 herosection'>
            <div className='w-10/12 lg:w-lg mx-auto'>
                <h3 className='text-xl lg:text-2xl font-semibold text-primary font-chivo'>Hi, this is_</h3>
                <h1 className='text-4xl lg:text-8xl font-bold text-secondary mb-5 lg:my-10 font-caveat'>Saddam Hossain</h1>
                <h4 className='text-3xl lg:text-5xl font-semibold text-primary font-chivo'>Love to Code for Web</h4>
                <p className='lg:text-xl mt-3 lg:mt-10 text-white font-chivo'>
                    I am a enthusiastic developer with hands-on skills in Web development,<br />
                    specifically in JavaScript, React, Nodejs and MongoDB.<br />
                    I am always a sincere and dedicated person to deliver my highest ability and skills.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;