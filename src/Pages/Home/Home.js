import React from 'react';
import Aboutme from '../../Components/HomeComponants/AboutMe/Aboutme';
import HeroSection from '../../Components/HomeComponants/HeroSection';
import Projects from '../../Components/HomeComponants/Projects/Projects';
import Skill from '../../Components/HomeComponants/Skills/Skill';

const Home = () => {
    return (
        <div className='w-10/12 lg:w-lg mx-auto'>
            <HeroSection></HeroSection>
            <Skill></Skill>
            <Aboutme></Aboutme>
            <Projects></Projects>
        </div>
    );
};

export default Home;