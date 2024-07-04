import React from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skills = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (

        <div data-aos="fade-up" className='flex justify-between gap-2'>
            {/* front end  */}
            <div data-aos="fade-right" className='w-[33%] mt-[25px]'>
                <div className='    bg-[#e0dfdb] p-10'>
                    <p className='font-ob-600 text-4xl'>Front-End</p>
                    {/* cards  */}
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/WxW5Kd3/html.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>HTML</b> structures web content semantically, supports multimedia, and ensures cross-browser compatibility, well-structured web documents.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/zJyPxhs/css.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>CSS</b> styles web pages with layout control, responsive design, animations, and visual consistency across devices, enhancing user experience and design flexibility.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/kDRxJCW/js.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>JavaScript</b> enables dynamic content, client-side interactivity, asynchronous operations, and supports frameworks and libraries, making it essential for modern web development.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/W6Pr3Sx/tailwind.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>Tailwind</b> accelerates UI development with utility-first classes, customizability, and minimal CSS, perfect for efficient and consistent design implementation.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/YyW1WLv/react.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>React.js</b> component-based architecture, virtual DOM, reusable components, and efficient state management make React.js ideal for building dynamic, scalable UIs.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
            {/* back end  */}
            <div  className='w-[33%] mt-[25px]'>
                <div className='    bg-[#e0dfdb] p-10'>
                    <p className='font-ob-600 text-4xl'>Back-End</p>
                    {/* cards  */}
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/yVbWfbM/node.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>Node.js</b> non-blocking I/O, real-time capabilities, vast npm ecosystem, and efficient concurrency make Node.js perfect for scalable server-side applications.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/4mVhXv2/express.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>Express.js</b> a minimalist web framework for Node.js, offering robust routing, middleware support, and easy API creation, ideal for building scalable web applications and APIs.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/8Ng38pt/mongo.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>MongoDB</b> offers flexible schema design, horizontal scalability, high performance, powerful query language, and easy integration with modern applications.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
            {/* others  */}
            <div data-aos="fade-left" className=' mt-[25px] w-[33%]'>
                <div className='    bg-[#e0dfdb] p-10'>
                    <p className='font-ob-600 text-4xl'>Others</p>
                    {/* cards  */}
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/3Rqb236/firebase.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>Firebase</b> simplifies app development with real-time database, authentication, hosting, and cloud functions, ideal for scalable mobile and web applications.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/nC3c37G/github.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>GitHub</b> a platform for version control, collaboration, and code hosting, facilitating distributed development teams and open-source contributions worldwide. <br /> <br /></p>
                            </div>
                        </div>
                        <div>
                            <Link to="https://github.com/Hr-Sajib"><button className='bg-black text-white font-ob p-2 hover:bg-red-800 rounded-full relative bottom-5 left-[200px]'>See GitHub Profile</button></Link>
                        </div>
                    </div>

                    
                    <div className='mt-5'>
                        <div className='flex  gap-2 bg-white rounded-xl   items-center'>
                            <img className='h-36   border-r-[2px] border-black rounded-l-xl' src="https://i.ibb.co/10t7WRn/vercel.png" alt="" />
                            <div className='p-2'>
                                <p className='font-ob'><b className='text-2xl'>Vercel</b> hosts static sites, servers, serverless functions, and full server-side applications, integrating with Git for seamless deployments and scalability.</p>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </div>
            
        </div>
        
    );
};

export default Skills;