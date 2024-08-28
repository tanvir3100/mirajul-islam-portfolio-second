/* eslint-disable react/no-unescaped-entities */
import './MyProjects';

const MyProjects = () => {
    return (
        <div id="myProjects" className="px-4 md:px-6 lg:px-12 mx-auto lg:min-h-[96vh] w-full">
            <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-3 text-center pt-10"
                style={{ fontFamily: '"Boogaloo", sans-serif' }}
            >
                My Recent Work
            </h1>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row w-full h-full">
                    <div
                        id="bg"
                        className="lg:flex-1 w-full h-screen sm:h-[300px] lg:h-[350px] lg:bg-top lg:hover:bg-bottom bg-cover border border-white lg:transition-all lg:ease-in-out lg:duration-700 lg:delay-700"
                        style={{ backgroundImage: 'url(https://i.ibb.co/WxRxLM0/screencapture-localhost-5173-2024-08-19-00-53-54.png)' }}
                    />

                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl mb-2">SipBite <span className='text-xl'>(MERN Stack Responsive Fast Food Website)</span></h1>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">Technology Stack : MERN (MongoDB, Express.js, React.js, Node.js)</li>
                            <li className="mb-2">Purpose : Modern, responsive Fast Food website designed for product management.</li>
                            <li className="mb-2">Key Features:</li>
                            <ul className="list-inside list-disc pl-5">
                                <li className="mb-2">Integrated Firebase for secure authentication and data handling.</li>
                                <li className="mb-2">Admin Panel for the owner to manage and update products.</li>
                                <li className="mb-2">Dashboard for streamlined product management and maintenance.</li>
                            </ul>
                            <li className="mb-2">Responsiveness : Optimized for seamless performance on any device.</li>
                            <li>User Experience : No user panel; focused solely on administrative functionality.</li>
                            <li>Live Link :<a href='https://sip-bite.web.app' className='text-[#C2FF3F] hover:underline'> SIP BITE !</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div
                        id="bg"
                        className="lg:flex-1 w-full h-96 bg-top hover:bg-bottom bg-cover border border-white transition-all ease-in-out duration-700 delay-700"
                        style={{ backgroundImage: 'url(https://i.ibb.co/VvJNy9t/screencapture-localhost-5173-2024-01-20-14-15-10.png)' }}
                    />

                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl">Fabric & Fit</h1>
                        <p>
                            As a proficient developer, I have successfully crafted a dynamic and versatile website employing the MERN stack. This platform seamlessly integrates a user interface, ensuring a smooth and intuitive experience for visitors, alongside an admin interface designed for efficient management and control. The website's robust architecture and user-friendly interfaces reflect my commitment to delivering high-quality, comprehensive solutions. This project showcases my proficiency in web development and highlights my ability to create feature-rich applications with a focus on both user experience and administrative functionality. It stands as a testament to my skills in leveraging modern technologies to build impactful digital solutions.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyProjects;
