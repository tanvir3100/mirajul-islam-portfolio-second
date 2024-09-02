/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../Components/Navbar/Navbar';
import './Home';
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div id="home" className="h-min lg:max-h-screen w-full flex justify-center items-center">
            <div>
                <div className="">
                    <Navbar />
                </div>
                <div className="h-[80vh] sm:h-[70vh] md:h-[90vh] lg:h-[90vh] w-full px-4 sm:px-6 md:px-12 lg:px-32 mx-auto flex justify-center items-center">
                    <div className=''>
                        <Fade direction="left">
                            <h1 className="text-white mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight" style={{ fontFamily: '"Boogaloo", sans-serif' }}>Hello. I a’m Mirajul Islam</h1>
                        </Fade>
                        <Fade direction="right">
                            <h1 className="animated-gradient-text mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight" style={{ fontFamily: '"Francois One", sans-serif' }}>web developer &</h1>
                        </Fade>
                        <Fade direction="left">
                            <h1 className="animated-gradient-text leading-tight mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center" style={{ fontFamily: '"Francois One", sans-serif' }}>web designer</h1>
                        </Fade>
                        <div className='flex justify-between items-center w-full mt-4'>
                            <div className='w-2/6'>
                                <a
                                    href="\Gold Minimalist Professional Work Data Analyst Resume (2).pdf"
                                    download="Mirajul_Islam_Resume.pdf"
                                    className="relative inline-flex items-center px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 overflow-hidden text-sm sm:text-md md:text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gradient-to-r from-[#8A54F7] to-[#E3D6FD]"
                                >
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">Resume</span>
                                </a>
                            </div>
                            <div className='w-3/6 md:w-2/6'>
                                <Fade direction="up">
                                    <p className='text-white text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-normal sm:leading-relaxed md:leading-loose'>
                                        I craft stunning, responsive websites
                                        that deliver outstanding user experiences.
                                        Welcome to my portfolio!
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
