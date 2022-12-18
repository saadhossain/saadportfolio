import React from 'react';
import './Hero.css';
const HeroSection = () => {
    return (
        <div className='lg:min-h-screen min-h-[70vh] py-32 herosection'>
            <div className='w-10/12 lg:w-lg mx-auto'>
                <h3 className='text-xl lg:text-2xl font-semibold text-primary font-chivo'>Hi, this is_</h3>
                <h1 className='text-5xl lg:text-8xl font-bold text-secondary my-5 lg:my-10 font-bigshoulder'>Saddam Hossain</h1>
                <h4 className='text-2xl lg:text-5xl font-semibold text-primary font-chivo'>Love to Code for Web</h4>
                <p className='lg:text-xl mt-3 lg:mt-10 text-white font-chivo'>
                    I am an enthusiastic developer with hands-on skills in Web development,<br />
                    specifically in JavaScript, React, Nodejs, and MongoDB.<br />
                    I am always a sincere and dedicated person to deliver my highest ability and skills.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;