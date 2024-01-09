/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../../Components/Navbar/Navbar'
import './Home'
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const Section = styled.div`
    scroll-snap-align: center;
`

const Home = () => {

    return (
        <Section id="home" className="h-full">
            <div className="fixed">
                <Navbar />
            </div>
            <div className="lg:min-h-screen w-full flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4 h-4/5 mt-10 lg:mt-0">
                    <div className="flex-1 flex justify-center items-center h-4/5 relative">
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
                    </div>
                    <div className="flex-1 flex">
                        <div>
                            <h1 className="text-white mb-2"><span className="text-4xl" id="font">Hello! I'M</span> <br />
                                <span className="text-5xl">MD.MIRAJUL ISLAM</span></h1>
                            <h1 className="text-xl text-white mt-3">
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
                            </h1>
                            <button className="btn btn-primary mt-5">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Home;