import React, { useState } from 'react';
import logo from '../../assests/Saad-Hossain.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    const [expand, setExpand] = useState(false)
    return (
        <div className='w-11/12 lg:w-10/12 py-2 mx-auto -mb-20 flex justify-between items-center text-white font-chivo'>
            <div>
                <Link to='/'><img src={logo} alt="Saad Hossain" className='w-10' /></Link>
            </div>
            <div className='flex items-center gap-2'>
                <ul className={`lg:flex gap-3 items-center font-semibold bg-[#081A3B] lg:bg-transparent absolute lg:static duration-300 ease-in-out ${expand ? 'top-12 right-0': 'top-[-200px] right-0'} pr-5 pl-20 py-2 rounded`}>
                    <HashLink to='#skills' smooth><li>Skills</li></HashLink>
                    <HashLink to='#about' smooth><li>About</li></HashLink>
                    <HashLink to='#projects' smooth><li>Projects</li></HashLink>
                    <HashLink to="#contact" smooth>Contact</HashLink>
                    <Link><li>Blogs</li></Link>
                </ul>
                <a href="../../assests/resume/Saddam Hossain's Resume.pdf"
                    download="Saddam Hossain's Resume.pdf"
                    >
                        <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Resume</button>
                    </a>
                <div onClick={()=>setExpand(!expand)} className='lg:hidden'>
                    {
                        expand ? <AiOutlineClose className='w-6 h-6'></AiOutlineClose>:<AiOutlineMenu className='w-6 h-6'></AiOutlineMenu>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;