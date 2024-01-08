/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
// import { useTypewriter } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../../Components/Navbar/Navbar'
import video from '../../assets/network_-_27018 (Original).mp4'
import './Home'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Home = () => {



    return (
        <Section id="home" className="">
            <div className="object-cover w-full relative">
                <video src={video} autoPlay loop muted />
                <div className="absolute w-[100%] top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.8)]">
                    <div className="fixed">
                        <Navbar />
                    </div>
                    <div className="min-h-screen flex justify-center items-center">
                        <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                            <div className="flex-1 flex justify-center items-center">
                                <div>
                                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
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
                </div>
            </div>
        </Section>
    );
};

export default Home;