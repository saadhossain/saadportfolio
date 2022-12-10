import React from 'react';
import Aboutme from '../../Components/HomeComponants/AboutMe/Aboutme';
import Contact from '../../Components/HomeComponants/Contact/Contact';
import HeroSection from '../../Components/HomeComponants/HeroSection';
import Projects from '../../Components/HomeComponants/Projects/Projects';
import Skill from '../../Components/HomeComponants/Skills/Skill';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <div className='w-10/12 lg:w-lg mx-auto'>
                <Skill></Skill>
                <Aboutme></Aboutme>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;