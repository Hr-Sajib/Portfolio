import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Education = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div data-aos="zoom-in">
            <div className='lg:my-20 my-5 border border-black lg:w-[50%] lg:mx-0 mx-2 lg:ml-10 rounded-xl'>
                <div className='flex items-center gap-2 pl-3 py-2'>
                    <img className='h-10' src="/eduIcon.png" alt="" />
                    <p className='text-2xl font-bold'>Formal Education</p>
                </div>
                <ul className='font-rm text-xl mt-2 bg-gray-700 text-[#e0dfdb] rounded-b-xl p-2'>
                    <li><b>JSC</b> GPA 5.00(A+) (All Subjects) + Govt Scholarship</li>
                    <li><b>SSC</b> Science GPA 5.00(A+) (All Subjects) + Govt Scholarship</li>
                    <li><b>HSC</b> Science GPA 5.00(A+) (All Subjects)</li>
                    <li><b>BSc</b> in CSE CGPA 3.80(Current)</li>
                </ul>
            </div> 
        </div>
    );
};

export default Education;