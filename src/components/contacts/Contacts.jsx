import { FaLinkedin, FaFacebook,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Contacts = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div data-aos="fade-up" className="bg-[#e0dfdb] lg:mt-5 mt-[2px] lg:py-16 py-5">


                <div className="flex items-center lg:ml-48 ml-2 mb-1"><FaPhone className="lg:text-6xl text-2xl" /><p className="font-ob lg:text-3xl ">+8801734797889</p></div> <br />
                <div className="flex items-center lg:ml-48 ml-2 mb-1"><Link to="https://www.linkedin.com/in/hr-sajib/"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white lg:w-36 w-16">Visit</button></Link><FaLinkedin className="lg:text-7xl text-4xl" /><p className="font-ob lg:text-3xl ">LinkedIn / linkedin.com/in/hr-sajib</p></div>
                <div className="flex items-center lg:ml-48 ml-2 mb-1"><Link to="https://www.facebook.com/HR.Sajib001/"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white lg:w-36 w-16">Visit</button></Link><FaFacebook className="lg:text-7xl text-4xl" /><p className="font-ob lg:text-3xl ">Facebook / facebook.com/HR.Sajib001</p></div>
                <div className="flex items-center lg:ml-48 ml-2 mb-2"><Link to="https://github.com/Hr-Sajib"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white lg:w-36 w-16">Visit</button></Link><FaGithub className="lg:text-7xl text-4xl" /><p className="font-ob lg:text-3xl ">GitHub / github.com/Hr-Sajib</p></div>
                <div className="flex items-center lg:ml-48 ml-2 mb-1"><Link to="mailto:hrsajib001@gmail.com"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white lg:w-36 w-16">Email</button></Link><MdEmail className="lg:text-7xl text-4xl" /><p className="font-ob lg:text-3xl ">Email / hrsajib001@gmail.com</p></div>

        </div>
    );
};

export default Contacts;