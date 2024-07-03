import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const location = useLocation().pathname;
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
    }

    useEffect(() => {
        Aos.init();
    }, []);

    const defaultImage = "https://i.ibb.co/HP0qqbq/MrBean.png"; 

    return (
        <div id='navbar' className='bg-[#bebdbc]'>
            <div className='lg:border-0 border h-20 flex justify-between items-center lg:px-40 px-4 font-ob lg:mr-2'>
                {/* Icon Div */}
                <div className='flex items-center gap-1'>
                    {/* Options Icon */}
                    <div onClick={() => setDropDown(!dropDown)}>
                        {
                            dropDown ?
                                <img className='lg:hidden h-8' src="https://i.ibb.co/Dzgdh1N/cross.png" alt="" />
                                :
                                <img className='lg:hidden h-8' src="https://i.ibb.co/JjnzjFs/opt.png" alt="" />

                        }
                    </div>

                    <Link to="/">
                        <div className='flex items-center'>
                            {/* <img className='lg:h-10 hidden lg:flex h-12 lg:border-0 border-2 border-red-800 rounded-xl lg:p-0 p-1' src="https://i.ibb.co/GCG87PR/181806.png" alt="" /> */}
                            <p className='text-3xl bg-gray-200 px-1 rounded-lg'>PORTFOLIO|Me</p>
                        </div>
                    </Link>
                </div>

                {/* Navlinks Div */}
                <div>
                    <ul className='lg:flex hidden justify-center gap-16 border h-10 pt-1 rounded-full px-5 text-xl'>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/">Profile</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/skills">Skills</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/projects">Projects</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/blogs">Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/contacts">Contacts</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/resume">Resume</NavLink></li>
                    </ul>
                </div>

                
            </div>
            {
                dropDown ?
                    <div data-aos="fade-right" className='bg-red-200 w-[130px] ml-3 -mt-3 rounded-xl fixed py-5'>
                        <ul className='flex flex-col gap-5 pl-2'>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/">Profile</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/skills">Skills</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/projects">Projects</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/contacts">Contacts</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-red-900 underline-animation' : "underline-animation"} to="/resume">Resume</NavLink></li>

                        </ul>
                    </div>
                    :
                    null
            }

        </div>
    );
};

export default Navbar;
