

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
        <div data-aos="fade-up" className="lg:p-10 p-2 bg-[#e0dfdb] lg:mt-5 mt-[2px]">
            <div className="bg-white p-5 rounded-lg shadow-md">
                <h1 className="lg:lg:text-3xl text-xl  font-bold mb-5">Harun Or Rashid Sajib</h1>
                <p className="lg:text-lg mb-5"><strong className="text-gray-500">Email:</strong> hrsajib001@gmail.com</p>

                <h2 className="lg:text-2xl font-bold mb-3">Professional Summary</h2>
                <p className="mb-5">
                    Passionate developer specializing in React, HTML, CSS, JavaScript, and Node.js. With a strong focus on front-end development, I am dedicated to creating dynamic and responsive web applications. I enjoy tackling challenging projects and continuously learning new technologies to enhance my skills. My goal is to develop innovative solutions that provide an excellent user experience.
                </p>

                <h2 className="lg:text-2xl font-bold mb-3">Skills</h2>
                <ul className="list-disc list-inside mb-5">
                    <li><strong className="text-gray-500">Front-End:</strong> React, HTML, CSS, JavaScript, Tailwind CSS</li>
                    <li><strong className="text-gray-500">Back-End:</strong> Node.js, Express.js</li>
                    <li><strong className="text-gray-500">Database:</strong> MongoDB, Firebase</li>
                    <li><strong className="text-gray-500">Tools:</strong> GitHub, Vercel, Firebase Hosting</li>
                </ul>

                <h2 className="lg:text-2xl font-bold mb-3">Projects</h2>
                <div className="mb-5">
                    <h3 className="lg:text-xl font-bold">Car Doctor Client</h3>
                    <p>An online platform for car repair services.</p>
                    <p><strong className="text-gray-500">Features:</strong> Service selection, detailed descriptions, pricing, appointment booking.</p>
                    <p><strong className="text-gray-500">Technologies Used:</strong> React, Tailwind CSS, MongoDB, Node.js, Firebase</p>
                </div>
                <div className="mb-5">
                    <h3 className="lg:text-xl font-bold">Snap News</h3>
                    <p>An innovative online news portal.</p>
                    <p><strong className="text-gray-500">Features:</strong> Browse/search/filter news, admin portal for managing content.</p>
                    <p><strong className="text-gray-500">Technologies Used:</strong> React, Tailwind CSS, MongoDB, Node.js, Firebase</p>
                </div>
                <div className="mb-5">
                    <h3 className="lg:text-xl font-bold">Brain Blogs</h3>
                    <p>A tech blog website for exploring the latest trends and insights.</p>
                    <p><strong className="text-gray-500">Features:</strong> User authentication, dynamic homepage, blog pages, wishlist, blog details, featured blogs.</p>
                    <p><strong className="text-gray-500">Technologies Used:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase</p>
                </div>

                <h2 className="lg:text-2xl font-bold mb-3">Education</h2>
                <ul className="list-disc list-inside mb-5">
                    <li><strong className="text-gray-500">BSc in CSE:</strong> Current CGPA 3.80</li>
                    <li><strong className="text-gray-500">HSC Science:</strong> GPA 5.00 (A+)</li>
                    <li><strong className="text-gray-500">SSC Science:</strong> GPA 5.00 (A+), Govt Scholarship</li>
                    <li><strong className="text-gray-500">JSC:</strong> GPA 5.00 (A+), Govt Scholarship</li>
                </ul>

                <h2 className="lg:text-2xl font-bold mb-3">Professional Experience</h2>
                <p className="mb-5">
                    <strong className="text-gray-500">Frontend Developer</strong>
                    <br />
                    Focus on creating dynamic and responsive web applications. Collaborated on various projects showcasing expertise in modern web development technologies.
                </p>

                <h2 className="lg:text-2xl font-bold mb-3">Certifications</h2>
                <ul className="list-disc list-inside mb-5">
                    <li>React Certification</li>
                    <li>JavaScript Certification</li>
                    <li>Node.js Certification</li>
                </ul>

                <h2 className="lg:text-2xl font-bold mb-3">Contact</h2>
                <div className="flex flex-col gap-2">
    <Link to="mailto:hrsajib001@gmail.com" className="flex items-center gap-2 w-[280px]">
        <MdEmail className="lg:text-3xl text-xl" /> <p className=" lg:text-2xl">hrsajib001@gmail.com</p>    
    </Link>

    <Link to="https://www.linkedin.com/in/hr-sajib/" className="flex items-center gap-2 w-[150px]">
        <FaLinkedin className="lg:text-3xl text-xl" /> <p className=" lg:text-2xl">LinkedIn</p>
    </Link>
    <Link to="https://www.facebook.com/HR.Sajib001/" className="flex items-center gap-2 w-[150px]">
        <FaFacebook className="lg:text-3xl text-xl" /> <p className=" lg:text-2xl">Facebook</p>
    </Link>
    <Link to="https://github.com/Hr-Sajib" className="flex items-center gap-2 w-[120px]">
        <FaGithub className="lg:text-3xl text-xl" /> <p className=" lg:text-2xl">GitHub</p>
    </Link>
</div>
            </div>

            <div className='flex justify-end mr-5 lg:mt-10 mt-2'>
            <a href={`${process.env.PUBLIC_URL}/hrsajib_resume.pdf`} download>
    <button className="bg-black text-white hover:bg-gray-700 text-2xl p-1 rounded-md">Download Resume</button>
</a>
           
            </div>
        </div>
    );
};

export default Resume;
