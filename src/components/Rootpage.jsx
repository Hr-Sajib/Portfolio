import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const Rootpage = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default Rootpage;