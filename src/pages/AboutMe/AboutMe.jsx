// import styled from "styled-components";
// import video from '../../assets/network_-_27018 (Original).mp4'
// import { FaAngleDoubleUp } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";


// const Section = styled.div`
//     scroll-snap-align: center;
// `

const AboutMe = () => {
    return (
        <div id="about">
            <div className="lg:min-h-[96vh] px-4 sm:px-6 md:px-12 lg:px-32 mx-auto w-full flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row w-full h-4/5 mt-10 lg:mt-0">
                    <div className="flex-1">
                        <Fade direction="right">
                            <h1 className="animated-gradient-text mb-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight" style={{ fontFamily: '"Francois One", sans-serif', }}>1+ year OF</h1>
                        </Fade>
                        <Fade direction="left">
                            <h1 className="animated-gradient-text mb-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight block lg:relative left-8 sm:left-16 md:left-40 lg:left-48" style={{ fontFamily: '"Francois One", sans-serif', }}>experience</h1>
                        </Fade>
                        <Fade direction="up">
                            <p className="text-white w-4/6">
                                I craft stunning, responsive websites that
                                deliver outstanding user experiences.
                                Welcome to my portfolio!
                            </p>
                        </Fade>
                    </div>
                    <div className="h-4/5 flex-1">
                        <Fade direction="up" style={{ zIndex: 10 }}>
                            <div>
                                <img className="w-72 md:w-80 lg:w-96" src="https://i.ibb.co/1nBNrF8/bg-tanvir-2-1.png" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;