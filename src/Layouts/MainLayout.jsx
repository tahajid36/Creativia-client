import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=' bg-[#112117] bg-[radial-gradient(circle_at_15%_50%,rgba(54,226,123,0.08),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(54,100,226,0.05),transparent_25%)]'>
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            </div>
            
        </div>
    );
};

export default MainLayout;