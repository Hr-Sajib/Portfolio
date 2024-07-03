
const Education = () => {
    return (
        <div>
            <div className='my-20 border border-black w-[50%] ml-10 rounded-xl'>
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