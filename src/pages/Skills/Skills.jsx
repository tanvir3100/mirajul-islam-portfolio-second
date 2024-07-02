/* eslint-disable react/no-unknown-property */
// import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// const Section = styled.div`
//     scroll-snap-align: center;
// `

const Skills = () => {
    return (
        <div id="skills" className="max-w-full lg:min-h-screen flex justify-center items-center">
            <div>
                <div className='absolute w-full h-60 left-[300px] sm:left-[400px] md:left-[500px] lg:left-[788px] mt-36 flex items-center'>
                    {/* <div className='w-[500px] h-[500px]'>
                        <iframe className="w-full h-full" src="https://lottie.host/embed/8897ef8e-e683-4d97-bc56-d1975ef971b4/VxVSg5uaKD.json"></iframe>
                    </div> */}
                </div>
                <div className="mt-10 w-3/6 mx-auto">
                    <div>
                        <Fade direction="down">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-3 text-center" style={{ fontFamily: '"Boogaloo", sans-serif', }}>My Soft Skills </h1>
                            <p className="text-white text-justify">Hi, I am Mirajul Islam, a skilled Front-End Web Developer and Web Designer with a passion for creating beautiful and functional websites. With expertise in HTML, CSS, JavaScript, and frameworks like React, I bring both creativity and technical proficiency to my projects. I strive to build responsive, user-friendly sites that provide seamless experiences across all devices.</p>
                        </Fade>
                    </div>
                </div>
                <div className="w-4/5 h-4/6 flex justify-center items-center p-10 mt-0 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 text-white justify-center items-center">
                        <div className="bg-[#1E1E1E]s rounded-lg shadow-xl border border-[#8A54F7] h-full w-full">
                            <Fade direction="right">
                                <div className="p-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="border border-none rounded-full w-10 h-10 bg-gradient-to-r from-[#0F0715] to-[#1B0D29]">
                                            <img src="https://i.ibb.co/ggtjDq2/image-1.png" alt="" />
                                        </div>
                                        <h2 className="card-title text-3xl">React.js</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div>
                                        <p className="text-end">70%</p>
                                    </div>
                                    <div>
                                        <progress class="progress progress-accent w-full bg-black" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="bg-[#1E1E1E]s rounded-lg shadow-xl border border-[#8A54F7] h-full w-full">
                            <Fade direction="right">
                                <div className="p-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="border border-none rounded-full w-10 h-10 bg-gradient-to-r from-[#0F0715] to-[#1B0D29] flex justify-center items-center">
                                            <img className="w-3/4" src="https://i.ibb.co/gVTSd4k/image-5.png" alt="" />
                                        </div>
                                        <h2 className="card-title text-3xl">Wordpress</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div>
                                        <p className="text-end">70%</p>
                                    </div>
                                    <div>
                                        <progress class="progress progress-accent w-full bg-black" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="bg-[#1E1E1E]s rounded-lg shadow-xl border border-[#8A54F7] h-full w-full">
                            <Fade direction="right">
                                <div className="p-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="border border-none rounded-full w-10 h-10 bg-gradient-to-r from-[#0F0715] to-[#1B0D29] flex justify-center items-center">
                                            <img src="https://i.ibb.co/TDQz2kP/image-6.png" alt="" />
                                        </div>
                                        <h2 className="card-title text-3xl">figma</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div>
                                        <p className="text-end">70%</p>
                                    </div>
                                    <div>
                                        <progress class="progress progress-accent w-full bg-black" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="bg-[#1E1E1E]s rounded-lg shadow-xl border border-[#8A54F7] h-full w-full">
                            <Fade direction="right">
                                <div className="p-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="border border-none rounded-full w-10 h-10 bg-gradient-to-r from-[#0F0715] to-[#1B0D29] flex justify-center items-center">
                                            <img className="w-3/4" src="https://i.ibb.co/2M7xZHN/image-7.png" alt="" />
                                        </div>
                                        <h2 className="card-title text-3xl">Talwind</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div>
                                        <p className="text-end">70%</p>
                                    </div>
                                    <div>
                                        <progress class="progress progress-accent w-full bg-black" value="70" max="100"></progress>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;