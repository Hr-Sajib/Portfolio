

import React, { useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
const Resume = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-up" className="p-10 bg-[#e0dfdb] mt-5">
            <div className="bg-white p-5 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-5">Harun Or Rashid Sajib</h1>
                <p className="text-lg mb-5"><strong>Email:</strong> hrsajib001@gmail.com</p>

                <h2 className="text-2xl font-bold mb-3">Professional Summary</h2>
                <p className="mb-5">
                    Passionate developer specializing in React, HTML, CSS, JavaScript, and Node.js. With a strong focus on front-end development, I am dedicated to creating dynamic and responsive web applications. I enjoy tackling challenging projects and continuously learning new technologies to enhance my skills. My goal is to develop innovative solutions that provide an excellent user experience.
                </p>

                <h2 className="text-2xl font-bold mb-3">Skills</h2>
                <ul className="list-disc list-inside mb-5">
                    <li><strong>Front-End:</strong> React, HTML, CSS, JavaScript, Tailwind CSS</li>
                    <li><strong>Back-End:</strong> Node.js, Express.js</li>
                    <li><strong>Database:</strong> MongoDB, Firebase</li>
                    <li><strong>Tools:</strong> GitHub, Vercel, Firebase Hosting</li>
                </ul>

                <h2 className="text-2xl font-bold mb-3">Projects</h2>
                <div className="mb-5">
                    <h3 className="text-xl font-bold">Car Doctor Client</h3>
                    <p>An online platform for car repair services.</p>
                    <p><strong>Features:</strong> Service selection, detailed descriptions, pricing, appointment booking.</p>
                    <p><strong>Technologies Used:</strong> React, Tailwind CSS, MongoDB, Node.js, Firebase</p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl font-bold">Snap News</h3>
                    <p>An innovative online news portal.</p>
                    <p><strong>Features:</strong> Browse/search/filter news, admin portal for managing content.</p>
                    <p><strong>Technologies Used:</strong> React, Tailwind CSS, MongoDB, Node.js, Firebase</p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl font-bold">Brain Blogs</h3>
                    <p>A tech blog website for exploring the latest trends and insights.</p>
                    <p><strong>Features:</strong> User authentication, dynamic homepage, blog pages, wishlist, blog details, featured blogs.</p>
                    <p><strong>Technologies Used:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase</p>
                </div>

                <h2 className="text-2xl font-bold mb-3">Education</h2>
                <ul className="list-disc list-inside mb-5">
                    <li><strong>BSc in CSE:</strong> Current CGPA 3.80</li>
                    <li><strong>HSC Science:</strong> GPA 5.00 (A+)</li>
                    <li><strong>SSC Science:</strong> GPA 5.00 (A+), Govt Scholarship</li>
                    <li><strong>JSC:</strong> GPA 5.00 (A+), Govt Scholarship</li>
                </ul>

                <h2 className="text-2xl font-bold mb-3">Professional Experience</h2>
                <p className="mb-5">
                    <strong>Frontend Developer</strong>
                    <br />
                    Focus on creating dynamic and responsive web applications. Collaborated on various projects showcasing expertise in modern web development technologies.
                </p>

                <h2 className="text-2xl font-bold mb-3">Certifications</h2>
                <ul className="list-disc list-inside mb-5">
                    <li>React Certification</li>
                    <li>JavaScript Certification</li>
                    <li>Node.js Certification</li>
                </ul>

                <h2 className="text-2xl font-bold mb-3">Contact</h2>
                <div className="flex flex-col gap-2">
    <Link to="mailto:hrsajib001@gmail.com" className="flex items-center gap-2 w-[280px]">
        <MdEmail className="text-3xl" /> <p className=" text-2xl">hrsajib001@gmail.com</p>    
    </Link>

    <Link to="https://www.linkedin.com/in/hr-sajib/" className="flex items-center gap-2 w-[150px]">
        <FaLinkedin className="text-3xl" /> <p className=" text-2xl">LinkedIn</p>
    </Link>
    <Link to="https://www.facebook.com/HR.Sajib001/" className="flex items-center gap-2 w-[150px]">
        <FaFacebook className="text-3xl" /> <p className=" text-2xl">Facebook</p>
    </Link>
    <Link to="https://github.com/Hr-Sajib" className="flex items-center gap-2 w-[120px]">
        <FaGithub className="text-3xl" /> <p className=" text-2xl">GitHub</p>
    </Link>
</div>
            </div>

            <div className='flex justify-end mr-5 mt-10'>
                <a href="/hrsajib_resume.pdf" download>
                    <button className="bg-black text-white hover:bg-gray-700 text-2xl p-1 rounded-md">Download Resume</button>
                </a>            
            </div>
        </div>
    );
};

export default Resume;
