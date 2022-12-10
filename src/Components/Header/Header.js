import React from 'react';
import logo from '../../assests/Saad-Hossain.png';

const Header = () => {
    return (
        <div className='w-11/12 lg:w-xl py-2 mx-auto flex justify-between items-center text-white'>
            <div>
                <img src={logo} alt="Saad Hossain" className='w-10' />
            </div>
            <div>
                <ul className='lg:flex gap-3 items-center font-semibold'>
                    <li>About</li>
                    <li>Experiences</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Blogs</li>
                    <a href="../../assests/resume/Saddam Hossain's Resume.pdf"
                    download="Saddam Hossain's Resume.pdf"
                    >
                        <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Resume</button>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Header;