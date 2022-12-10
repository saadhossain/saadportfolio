import React from 'react';
import html from '../../../assests/logos/html5.png'
import css from '../../../assests/logos/css3.png'
import tailwind from '../../../assests/logos/Tailwind.png'
import js from '../../../assests/logos/js.png'
import react from '../../../assests/logos/react-white.png'
import mongodb from '../../../assests/logos/mongodb.png'
import node from '../../../assests/logos/node.png'
import firebase from '../../../assests/logos/firebase.png'

const Skill = () => {
    return (
        <div className='lg:flex justify-between items-center mb-5' id="skills">
            <div className=''>
                <h1 className='text-5xl text-accent'>Skills I Own_</h1>
                <div className='my-5'>
                    <h3 className='text-primary text-3xl mb-5'>Experties_</h3>
                    <p>
                        HTML5 | CSS3 | JavaScript | BootStrap | TailwindCSS | React <br/>
                        React Router | React Query | Firebase | 
                    </p>
                </div>
                <div className='my-5'>
                    <h3 className='text-primary text-3xl mb-5'>Comfortable_</h3>
                    <p>
                        NodeJs | Express | MongoDB | JWT | Styled Components | AXIOS <br/>
                        Stripe | Node Mailer | Vercel | GitHub | DevTool | Netlify | IMGBB
                    </p>
                </div>
            </div>
            <div className=' flex flex-col gap-6'>
                <div className='flex gap-5'>
                    <img src={html} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={css} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={tailwind} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={js} alt='' className='w-20 rounded-full duration-500 animate-pulse'/>
                </div>
                <div className='flex gap-5'>
                    <img src={react} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={mongodb} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={node} alt='' className='w-20 duration-500 animate-pulse'/>
                    <img src={firebase} alt='' className='w-20 duration-500 animate-pulse'/>
                </div>
            </div>
        </div>
    );
};

export default Skill;