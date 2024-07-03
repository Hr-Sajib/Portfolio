import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mt-5'>
            
            {/* project 1  */}
            <div className='bg-[#e0dfdb] p-5 flex gap-5'>
                <img className='border-2 border-black rounded-3xl w-[60%]' src="/public/projects/cardoctor.png" alt="" />
                <div className='p-10'>
                    <p className='font-ob-600 text-7xl'>Car Doctor</p>
                   
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob text-lg'>Car Doctor Client simplifies car repair services online. Users browse, select services, view descriptions, prices, book appointments, and manage them seamlessly.</p>
                   
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob text-lg'>Car Doctor Client offers a user-friendly interface to browse comprehensive car repair services with detailed descriptions and transparent pricing. Users can seamlessly book and manage appointments for hassle-free car maintenance and repairs.</p>
               
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob text-lg bg-white p-1 rounded-lg pl-3'>ReactJS Tailwind CSS NodeJS ExpressJS MongoDB Firebase</p>

                    <p className='font-ob-600 text-2xl text-red-900 mt-10 mb-2'>Have a look </p>
                    <Link to='https://car-doctor-f2b62.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-5 rounded-xl'>Live Website</p></Link>
                    <Link to='https://github.com/Hr-Sajib/car-doctor-client'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-5 rounded-xl mt-2'>GitHub Repository</p></Link>
                </div>
            </div>



            {/* project 1  */}
            <div className='bg-[#e0dfdb] p-5 flex gap-5 mt-2'>
                <img className='border-2 border-black rounded-3xl w-[60%]' src="/public/projects/aura.png" alt="" />
                <div className='p-10'>
                    <p className='font-ob-600 text-7xl'>Aura</p>
                   
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob text-lg'>Aura is an artwork based e commerce website which contains awesome features like enlisting artworks with artist credentials and allows visitor to order their liked ones associated with other features.</p>
                   
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob text-lg'></p>
               
                    <p className='font-ob-600 text-2xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob text-lg bg-white p-1 rounded-lg pl-3'>ReactJS Tailwind CSS NodeJS ExpressJS MongoDB Firebase</p>

                    <p className='font-ob-600 text-2xl text-red-900 mt-10 mb-2'>Have a look </p>
                    <Link to='https://aura-art-gallary.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-5 rounded-xl'>Live Website</p></Link>
                    <Link to='https://github.com/Hr-Sajib/Aura-client'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-5 rounded-xl mt-2'>GitHub Repository</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;