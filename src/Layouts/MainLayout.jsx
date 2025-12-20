import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        
              <div className="relative min-h-screen w-full bg-base-300 font-['Inter',sans-serif]">
                
                <div 
                  className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_15%_50%,rgba(54,226,123,0.08),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(54,100,226,0.05),transparent_25%)]"
                ></div>
          
                <div className="relative z-10 container mx-auto px-4 md:px-0">
                  <Navbar />
                  
                  <div className="min-h-[calc(100vh-200px)]">
                    <Outlet />
                  </div>
          
                  <Footer />
                </div>
              </div>
        
        )
};

export default MainLayout;