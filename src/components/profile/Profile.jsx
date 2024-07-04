import { FaLocationPinLock } from "react-icons/fa6";
import { RiFocus3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTypewriter, Typewriter } from 'react-simple-typewriter';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Profile = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div data-aos="fade-up"  className="bg-[#e0dfdb] lg:mt-[25px] mt-[5px]">
            <div  className=' lg:p-5 p-1'>
                <div className='flex gap-3 items-center'>
                    <img className='lg:h-[90px] h-[50px] lg:w-[90px] w-[50px] lg:border-[5px] border-[3px] border-black object-cover rounded-full' src="https://i.ibb.co/Y30rYqw/self.jpg" alt="" />
                    <p className='font-ob-600 lg:text-[50px] text-[20px]'>Harun Or Rashid <span className=' lg:border-[8px] border-[3px] border-gray-500 lg:rounded-2xl rounded-xl'>SAJIB</span></p>

                </div>                
                
                <div data-aos="zoom-out">
                <p  className='font-ob-900  lg:text-[100px] text-[50px] text-gradient inline'>WEB DEVELOPER</p>
                </div>
                <div className="flex items-center">
                    <p className='font-ob-900  lg:text-xl text-sm'>FRONT END</p><RiFocus3Line className="text-red-900 lg:text-4xl mx-1"/><p className="font-ob-900  lg:text-xl text-sm">FOCUS</p>
                </div>

            </div>

            <div data-aos="fade-left" className='border-t-2 border-white flex lg:items-center pl-5 p-3 h-16'>
                <FaLocationPinLock className="lg:text-3xl lg:mt-0 mt-[1px]"/>
                            
                            <p className='font-ob-600 lg:text-xl text-sm ml-2'>Dhaka, Bangladesh  /  <Typewriter
                                words={['I am open for remote jobs']}
                                loop={100}
                                cursor
                                cursorStyle=' >'
                                typeSpeed={100}
                                deleteSpeed={10}
                                delaySpeed={1000}
                            /></p>
            </div>

            <div className='lg:flex lg:border-t-[5px] border-t-[2px] border-white font-ob'>
                
                {/* web  */}
                <div className='lg:flex'>

                    <img className=' lg:h-[450px] h-[190px] bg-blue-100  border-r-[5px] border-white rounded-br-[100px]' src="https://i.ibb.co/1fxq3j3/website.gif" alt="" />
                    <div className="lg:p-10 p-5">
                        <p className="lg:text-2xl">I work on building beautiful websites for individuals and corporations with the help of future proof stacks like <span className="text-3xl font-ob-900">MERN</span>. Harnessing the power of modern technologies, I specialize in frontend development to deliver visually appealing and functional websites.</p>



                        <div className=" grid lg:grid-cols-5 grid-cols-2 gap-3 mt-5">
                            <div  className="h-[160px] w-[160px] ">
                                <div className=" border-black border  w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="https://i.ibb.co/6FNc9jr/ecom.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-blue-700 bg-white rounded-b-lg">E Commerce</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="https://i.ibb.co/1m5MHfc/blog.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-[#0893a8] bg-white rounded-b-lg">Blog</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="https://i.ibb.co/B4pDYbx/eduSite.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-[#701087] bg-white rounded-b-lg">E Learning</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="https://i.ibb.co/Fw4zcyG/news.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl bg-white rounded-b-lg">News</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="https://i.ibb.co/zZrz4MS/prtfolio.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-red-800 bg-white rounded-b-lg">Portfolio</p>
                                </div>
                            </div>
                         </div>
                         <div className="flex justify-end gap-2 mt-5 items-center">
                            <a href="/hrsajib_resume.pdf" download>
                                <button data-aos="zoom-in" className="bg-gradient-to-l from-red-800 to-black text-white hover:bg-blue-900 text-xl px-1 rounded-md">Download Resume</button>
                            </a> 
                            <Link to='/projects'><button data-aos="zoom-in" className="bg-black hover:bg-slate-700 px-2 text-xl text-white rounded-md">Check Projects <span className='arrow'>➔</span></button></Link>
                         </div>
                    </div>
                    

                </div>
            </div>

            
        </div>
    );
};

export default Profile;

