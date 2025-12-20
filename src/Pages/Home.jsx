import React from 'react';
import CreativePortfolio from '../Components/CreativePortfolio';
import HeroSection from '../Components/Herosection/HeroSection';
import SortedCard from '../Components/SortedCard';
import RecentWinners from '../Components/RecentWinner';

const Home = () => {
    return (
        <div className='mt-4 '>
            <HeroSection></HeroSection>
           
            <SortedCard></SortedCard>
            <RecentWinners></RecentWinners>
        </div>
    );
};

export default Home;
