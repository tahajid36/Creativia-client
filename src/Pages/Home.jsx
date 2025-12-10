import React from 'react';
import CreativePortfolio from '../Components/CreativePortfolio';
import HeroSection from '../Components/Herosection/HeroSection';

const Home = () => {
    return (
        <div className='mt-4'>
            <HeroSection></HeroSection>
            <CreativePortfolio></CreativePortfolio>
        </div>
    );
};

export default Home;
