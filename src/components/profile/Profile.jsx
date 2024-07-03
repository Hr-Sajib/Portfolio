import { FaLocationPinLock } from "react-icons/fa6";

const Profile = () => {
    return (
        <div className="bg-[#e0dfdb] mt-[25px]">
            <div className=' p-5'>
                    {/* <img className='rounded-full h-[160px] w-[160px] object-cover border-[10px] border-black' src="/1716900304224.png"  alt="" /> */}
                <div className='flex gap-3 items-center'>
                    <img className='h-[90px] w-[90px] border-[5px] border-black object-cover rounded-full' src="/public/self.jpg" alt="" />
                    <p className='font-ob-600 text-[50px]'>Harun Or Rashid <span className=' border-[8px] border-gray-500 rounded-2xl'>SAJIB</span></p>

                </div>                
                
                <p className='font-ob-900  text-[100px] text-gradient inline'>WEB DEVELOPER</p>
                <p className='font-ob-900  text-xl  inline'>FRONT END</p>
                    {/* <img className='rounded-[60px]' src="/responsive-website-animations-copy.gif" alt="" /> */}

            </div>

            <div className='border-t-2 border-white flex items-center pl-5 p-3'>
                <FaLocationPinLock className="text-3xl"/> <p className='font-ob-600 text-xl ml-2'>Dhaka, Bangladesh  /  I am open for remote jobs</p>
            </div>

            <div className='flex border-t-[5px] border-white font-ob'>
                
                {/* web  */}
                <div className='flex'>

                    <img className=' h-[450px] bg-blue-100 border-r-[5px] border-white rounded-br-[100px]' src="/public/website.gif" alt="" />
                    <div className="p-10">
                        <p className="text-2xl">I work on building beautiful websites for individuals and corporations with the help of future proof stacks like <span className="text-3xl font-ob-900">MERN</span>. Harnessing the power of modern technologies, I specialize in frontend development to deliver visually appealing and functional websites.</p>
                        
                        <div className="flex gap-3 mt-5">
                            <div className="h-[160px] w-[160px] ">
                                <div className=" border-black border  w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="/public/types/ecom.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-blue-700 bg-white rounded-b-lg">E Commerce</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="/public/types/blog.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-[#0893a8] bg-white rounded-b-lg">Blog</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="/public/types/eduSite.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-[#701087] bg-white rounded-b-lg">E Learning</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="/public/types/news.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl bg-white rounded-b-lg">News</p>
                                </div>
                            </div>
                            <div className="h-[160px] w-[160px]">
                                <div className=" border-black border w-[160px] flex items-center justify-center rounded-t-lg bg-white">
                                    <img className="h-[110px] p-2" src="/public/types/prtfolio.png" alt="" />
                                </div>
                                <div className="border-black border text-center rounded-b-lg">
                                    <p className="text-xl text-red-800 bg-white rounded-b-lg">Portfolio</p>
                                </div>
                            </div>
                         </div>
                         <div className="flex justify-end">
                            <button className="bg-blue-950 hover:bg-slate-700 px-2 text-xl text-white rounded-md mt-5 mr-3">Download Resume</button>
                            <button className="bg-black hover:bg-slate-700 px-2 text-xl text-white rounded-md mt-5 mr-3">Check Projects <span className='arrow'>➔</span></button>
                         </div>
                    </div>
                    

                </div>
            </div>

            
        </div>
    );
};

export default Profile;

