import React from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Projects = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div data-aos="fade-up" className='mt-5'>

{/* https://i.ibb.co/HKWmNBv/brainblogs.png
https://i.ibb.co/gTCpfLr/snapnews.png
https://i.ibb.co/BC9tWQH/cardoctor.png
https://i.ibb.co/MB9QYXq/aura.png
 */}

            {/* project 1  */}
            <div  className='bg-[#e0dfdb] p-5 flex gap-5'>
                <img data-aos="zoom-in"  className='border-2 border-red-800 rounded-3xl  w-[1000px]' src="https://i.ibb.co/BC9tWQH/cardoctor.png" alt="" />
                <div data-aos="zoom-in"  className='px-10 py-5'>
                    <p className='font-ob-600 text-5xl'>Car Doctor</p>
                   
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob '>Car Doctor Client simplifies car repair services online. Users browse, select services, view descriptions, prices, book appointments, and manage them seamlessly.</p>
                   
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob '>Car Doctor Client offers a user-friendly interface to browse comprehensive car repair services with detailed descriptions and transparent pricing. Users can seamlessly book and manage appointments for hassle-free car maintenance and repairs.</p>
               
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob  bg-white p-1 rounded-lg pl-3'>ReactJS Tailwind CSS NodeJS ExpressJS MongoDB Firebase</p>

                    <div className='relative bottom-5'>
                        <p className='font-ob-600 text-xl text-red-900 mt-10 '>Have a look </p>
                        <Link to='https://car-doctor-f2b62.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-4 rounded-xl'>Live Website</p></Link>
                        <Link to='https://github.com/Hr-Sajib/car-doctor-client'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-4 rounded-xl mt-2'>GitHub Repository</p></Link>
                    </div>
                    
                    
                </div>
            </div>






            {/* project 2 */}
            <div  className='bg-[#e0dfdb] p-5 flex gap-5 mt-2'>
                <img data-aos="zoom-in"   className='border-2 border-red-800 rounded-3xl  w-[1000px]' src="https://i.ibb.co/gTCpfLr/snapnews.png" alt="" />
                <div data-aos="zoom-in"  className='px-10 py-5'>
                    <p className='font-ob-600 text-5xl'>Snap News</p>
                
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob'>Snap News is an innovative online news portal providing easy access to the latest news articles. Users can browse, search, and filter news articles based on their preferences, with categories like sports, politics, and technology.</p>
                
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob'>Browse and search news articles, filter by categories, and manage news content via the admin portal with options to add, edit, and delete articles.</p>
            
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob bg-white p-1 rounded-lg pl-3'>React Tailwind CSS MongoDB Node.js Firebase</p>

                    <div className='relative bottom-5'>
                        <p className='font-ob-600 text-2xl text-red-900 mt-10'>Have a look</p>
                        <Link to='https://snapnews-ecc6b.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-4 rounded-xl'>Live Website</p></Link>
                        <Link to='https://github.com/Hr-Sajib/Snap-News'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-4 rounded-xl mt-2'>GitHub Repository</p></Link>
                    </div>
                </div>
            </div>





            {/* project 3 */}
            <div  className='bg-[#e0dfdb] p-5 flex gap-5 mt-2'>
                <img data-aos="zoom-in"  className='border-2 border-red-800 rounded-3xl  w-[1000px]' src="https://i.ibb.co/HKWmNBv/brainblogs.png" alt="" />
                <div data-aos="zoom-in"  className='px-10 py-5'>
                    <p className='font-ob-600 text-5xl'>Brain Blogs</p>
                
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob'>Brain Blogs is a tech blog platform where enthusiasts can explore trends, share blogs, comment, and discover valuable content.</p>
                
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob'>User authentication, dynamic homepage, browse and filter blogs, wishlist, detailed blog pages, comments, and featured blogs section.</p>
            
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob bg-white p-1 rounded-lg pl-3'>React HTML CSS Tailwind Node.js Express.js MongoDB Firebase JWT Vercel</p>

                    <div className='relative bottom-5'>
                        <p className='font-ob-600 text-2xl text-red-900 mt-10'>Have a look</p>
                        <Link to='https://brain-blogs.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-4 rounded-xl'>Live Website</p></Link>
                        <Link to='https://github.com/Hr-Sajib/Brain-Blogs'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-4 rounded-xl mt-2'>GitHub Repository</p></Link>
                    </div>
                </div>
            </div>





            {/* project 4  */}
            <div  className='bg-[#e0dfdb] p-5 flex gap-5 mt-2'>
                <img data-aos="zoom-in"  className='border-2 border-red-800 rounded-3xl w-[1000px]' src="https://i.ibb.co/MB9QYXq/aura.png" alt="" />
                <div data-aos="zoom-in" className='px-10 py-5'>
                    <p className='font-ob-600 text-5xl'>Aura</p>
                   
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Overview</p>
                    <p className='font-ob'>Aura is an artwork based e commerce website which contains awesome features like enlisting artworks with artist credentials and allows visitor to order their liked ones associated with other features.</p>
                   
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Features</p>
                    <p className='font-ob'>Users can add art, browse collections, see details, add to cart, cost calculate and proceed to payment, admin pannel available.</p>
               
                    <p className='font-ob-600 text-xl text-red-900 mt-5'>Tech Used</p>
                    <p className='font-ob bg-white p-1 rounded-lg pl-3'>ReactJS Tailwind CSS NodeJS ExpressJS MongoDB Firebase</p>

                    <div className='relative bottom-5'>
                        <p className='font-ob-600 text-2xl text-red-900 mt-10'>Have a look </p>
                        <Link to='https://aura-art-gallary.web.app/'><p className='w-[50%] font-ob-600 hover:bg-red-700 bg-red-900 text-white p-4 rounded-xl'>Live Website</p></Link>
                        <Link to='https://github.com/Hr-Sajib/Aura-client'><p className='w-[50%] hover:bg-red-700 font-ob-600 bg-red-900 text-white p-4 rounded-xl mt-2'>GitHub Repository</p></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;