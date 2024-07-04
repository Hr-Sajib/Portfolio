import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Blogs = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-up" className="bg-[#e0dfdb] mt-5 py-10">
            <div className="grid grid-cols-2 gap-10 mx-10">
                
                {/* blog 1 */}
                <div data-aos="zoom-in" className="p-5 bg-white rounded-lg shadow-md">
                    <p className="font-ob-600 text-4xl">React 19 is Really Cool 😍</p>
                    <p className=" mt-5 text-xl">React 19 introduces exciting new features, including improved concurrency, better performance, and simplified state management. It aims to enhance developer productivity and create more responsive user interfaces. Dive into its updates and see how it can improve your projects! React 19 leverages new rendering techniques to minimize re-renders, providing a smoother experience for end-users. It also comes with new hooks and lifecycle methods that simplify complex state logic, making your code more readable and maintainable.</p>
                </div>

                {/* blog 2 */}
                <div data-aos="zoom-in" className="p-5 bg-white rounded-lg shadow-md">
                    <p className="font-ob-600 text-4xl">Understanding Tailwind CSS 🤔</p>
                    <p className=" mt-5 text-xl">Tailwind CSS is a utility-first CSS framework that allows you to build modern web interfaces without ever leaving your HTML. Its approach is efficient, offering a faster workflow and highly customizable design system. Explore its benefits and how to get started. Tailwind's utility classes eliminate the need for custom CSS, reducing the amount of code you write and maintain. Its design philosophy promotes rapid prototyping and consistent styling across your application, making it a favorite among developers.</p>
                </div>

                {/* blog 3 */}
                <div data-aos="zoom-in" className="p-5 bg-white rounded-lg shadow-md">
                    <p className="font-ob-600 text-4xl">Node.js 20: What's New? 💪</p>
                    <p className=" mt-5 text-xl">Node.js 20 brings several improvements and new features, including better module support, enhanced security features, and performance optimizations. Learn about these updates and how they can benefit your backend development efforts. With a focus on stability and performance, Node.js 20 ensures your applications run faster and more securely. Its enhanced module support simplifies dependency management, allowing for easier integration of third-party libraries.</p>
                </div>

                {/* blog 4 */}
                <div data-aos="zoom-in" className="p-5 bg-white rounded-lg shadow-md">
                    <p className="font-ob-600 text-4xl">Exploring MongoDB Atlas 👀</p>
                    <p className=" mt-5 text-xl">MongoDB Atlas is a cloud-based database service that simplifies deployment, operation, and scaling. With robust security features and advanced analytics, it’s perfect for modern applications. Discover its key features and why it's a great choice for your next project. MongoDB Atlas offers automated backups, real-time performance monitoring, and seamless scaling, ensuring your database remains available and performant. Its global cloud infrastructure allows you to deploy databases closer to your users, reducing latency and improving application performance.</p>
                </div>

                {/* blog 5 */}
                <div data-aos="zoom-in" className="p-5 bg-white rounded-lg shadow-md">
                    <p className="font-ob-600 text-4xl">I am Facing Problems With Firebase 🤷‍♂️</p>
                    <p className=" mt-5 text-xl">Hosting multiple projects on Firebase's free plan can be challenging due to resource limitations, such as storage and bandwidth caps. As your projects grow, these constraints can hinder performance and scalability. Explore alternative solutions and strategies for managing multiple deployments effectively. While Firebase provides an excellent platform for development and deployment, it's essential to consider the limitations and plan accordingly to ensure seamless operation and growth of your projects.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;
