/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
// import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../../Components/Navbar/Navbar'
import './Home'
// import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Sphere } from "@react-three/drei";
import { Fade } from "react-awesome-reveal";

// const Section = styled.div`
//     scroll-snap-align: center;
// `

const Home = () => {

    return (
        <div id="home" className="h-min lg:max-h-screen w-full flex justify-center items-center">
            <div>
                <div className="">
                    <Navbar />
                </div>
                <div className='absolute w-full h-60 right-[70px] sm:right-[200px] md:right-[200px] lg:right-[200px] flex items-center'>
                    <div className='w-32 sm:w-40 md:w-56 lg:w-96 h-32 sm:h-40 md:h-56 lg:h-96'>
                        <iframe className='w-full h-full' src="https://lottie.host/embed/48f2932c-03eb-4c0d-bb98-8b9e4bb2cc67/ky8ql3s3Xz.json"></iframe>
                    </div> 
                </div>
                <div className="h-[80vh] sm:h-[70vh] md:h-[90vh] lg:h-[90vh] w-full px-4 sm:px-6 md:px-12 lg:px-32 mx-auto flex justify-center items-center">
                    <div className=''>
                        <Fade direction="left">
                            <h1 className="text-white mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight" style={{ fontFamily: '"Boogaloo", sans-serif', }}>Hello. I a’m mirajul Islam</h1>
                        </Fade>
                        <Fade direction="right">
                            <h1 className="animated-gradient-text mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight" style={{ fontFamily: '"Francois One", sans-serif', }}>web developer &</h1>
                        </Fade>
                        <Fade direction="left">
                            <h1 className="animated-gradient-text leading-tight mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center" style={{ fontFamily: '"Francois One", sans-serif', }}>web designer</h1>
                        </Fade>
                        <div className='flex justify-between items-center w-full mt-4'>
                            <div className='w-2/6'>
                                <a href="dbfcb79d-2e46-4cc8-88df-efceac1f5f57.pdf" download={'dbfcb79d-2e46-4cc8-88df-efceac1f5f57.pdf'} class="relative inline-flex items-center px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 overflow-hidden text-sm sm:text-md md:text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gradient-to-r from-[#8A54F7] to-[#E3D6FD]">
                                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative">Resume</span>
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