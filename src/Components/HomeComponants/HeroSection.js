import React from 'react';

const HeroSection = () => {
    return (
        <div className='min-h-[90vh] py-10'>
            <h3 className='text-xl lg:text-2xl font-semibold text-primary'>Hi, this is</h3>
            <h1 className='text-4xl lg:text-8xl font-bold text-typo my-5 lg:my-10'>Saddam Hossain</h1>
            <h4 className='text-3xl lg:text-6xl font-semibold text-accent'>Love to Code for Web</h4>
            <p className='lg:text-xl mt-3 lg:mt-10'>
            I am a enthusiastic developer with hands-on skills in Web development,<br/>
            specifically in JavaScript, React, Nodejs and MongoDB.<br/>
            I am always a sincere and dedicated person to deliver my highest ability and skills.
            </p>
        </div>
    );
};

export default HeroSection;