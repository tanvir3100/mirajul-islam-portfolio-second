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
        <div id="home" className="h-full">
            <div className="">
                <Navbar />
            </div>
            <div className="lg:min-h-[110vh] w-full flex justify-center items-center">
                <div className='w-4/6 h-5/6 mx-auto'>
                    <Fade direction="left">
                        <h1 className="text-white mb-2 text-3xl" style={{ fontFamily: '"Boogaloo", sans-serif', }}>Hello. I a’m mirajul Islam</h1>
                    </Fade>
                    <Fade direction="right">
                        <h1 className="animated-gradient-text mb-2 text-[120px] text-center p-0 m-0 leading-tight" style={{ fontFamily: '"Francois One", sans-serif', }}>web developer &</h1>
                    </Fade>
                    <Fade direction="left">
                        <h1 className="animated-gradient-text leading-tight mb-2 text-[120px] text-center" style={{ fontFamily: '"Francois One", sans-serif', }}>web designer</h1>
                    </Fade>
                    {/* <h1 className="text-xl text-white my-3">
                        <span className="text-emerald-500 text-3xl">
                            <Typewriter words={['FONT END DEVELOPER', 'MERN STACK DEVELOPER', 'REACT DEVELOPER']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </span>
                        <br />
                        <span className="text-3xl"></span>
                    </h1> */}
                    <div className='flex justify-between items-center'>
                        <div className='w-2/6'>
                            <a href="dbfcb79d-2e46-4cc8-88df-efceac1f5f57.pdf" download={'dbfcb79d-2e46-4cc8-88df-efceac1f5f57.pdf'} class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gradient-to-r from-[#8A54F7] to-[#E3D6FD]">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative">Resume</span>
                            </a>
                        </div>
                        <div className='w-2/6'>
                            <Fade direction="up">
                                <p className='text-white'>
                                    I craft stunning, responsive websites
                                    that deliver outstanding user experiences.
                                    Welcome to my portfolio!
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero-content flex-col lg:flex-row-reverse w-3/4 h-4/5 mt-10 lg:mt-0">
                        {/* <div className="flex-1 hidden lg:flex lg:justify-center lg:items-center h-4/5 relative">
                        <Canvas style={{ height: '400px' }}>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.5}>
                                <MeshDistortMaterial
                                    color={'#3d3085'}
                                    attach='material'
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Canvas>
                        <div className="z-50 absolute mr-10">
                            <img src="https://i.ibb.co/tZHWnC1/1700749319053.png" className="max-w-sm" />
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;