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
        <div data-aos="fade-up" className="bg-[#e0dfdb] mt-5 py-16">


                <div className="flex items-center ml-48"><FaPhone className="text-6xl" /><p className="font-ob text-3xl">+8801734797889</p></div> <br />
                <div className="flex items-center ml-48"><Link to="https://www.linkedin.com/in/hr-sajib/"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white w-36">Visit</button></Link><FaLinkedin className="text-7xl" /><p className="font-ob text-3xl">LinkedIn / linkedin.com/in/hr-sajib</p></div>
                <div className="flex items-center ml-48"><Link to="https://www.facebook.com/HR.Sajib001/"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white w-36">Visit</button></Link><FaFacebook className="text-7xl" /><p className="font-ob text-3xl">Facebook / facebook.com/HR.Sajib001</p></div>
                <div className="flex items-center ml-48"><Link to="https://github.com/Hr-Sajib"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white w-36">Visit</button></Link><FaGithub className="text-7xl" /><p className="font-ob text-3xl">GitHub / github.com/Hr-Sajib</p></div>
                <div className="flex items-center ml-48"><Link to="mailto:hrsajib001@gmail.com"><button className="bg-blue-900 hover:bg-blue-600 text-2xl p-1 rounded-lg text-white w-36">Email</button></Link><MdEmail className="text-7xl" /><p className="font-ob text-3xl">Email / hrsajib001@gmail.com</p></div>

        </div>
    );
};

export default Contacts;