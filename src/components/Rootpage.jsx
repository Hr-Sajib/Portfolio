import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';

const Rootpage = () => {
    return (
        <div>
            <Navbar/>
            <div className=''>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Rootpage;