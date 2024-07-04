import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="footer bg-base-300 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Projects</h6>
                    <a className="link link-hover">Aura</a>
                    <a className="link link-hover">Car Doctor</a>
                    <a className="link link-hover">Snap News</a>
                    <a className="link link-hover">Brain Blogs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">About Me</h6>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover">Education</a>
                    <a className="link link-hover">Skills</a>
                    <a className="link link-hover">Experience</a>
                </nav>
                <nav className=''>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <a href="mailto:hrsajib001@gmail.com" className="flex items-center gap-2">
                                <MdEmail className="text-2xl" />
                                <p className=" text-xl">Email</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/hr-sajib/" className="flex items-center gap-2">
                                <FaLinkedin className="text-2xl" />
                                <p className=" text-xl">LinkedIn</p>
                            </a> 
                        </div>
                        <div>
                            <a href="https://www.facebook.com/HR.Sajib001/" className="flex items-center gap-2">
                                <FaFacebook className="text-2xl" />
                                <p className=" text-xl">Facebook</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Hr-Sajib" className="flex items-center gap-2">
                                <FaGithub className="text-2xl" />
                                <p className=" text-xl">GitHub</p>
                            </a>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
