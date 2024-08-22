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
            {/* <div className='absolute w-full h-60 left-[300px] sm:left-[400px] md:left-[500px] lg:left-[788px] mt-36 flex items-center'>
                <div className='w-96 h-96'>
                    <iframe className='w-full h-full' src="https://lottie.host/embed/cb5403ca-c661-4792-98d7-75269357121b/xzZh3oJHqN.json"></iframe>
                </div>
            </div> */}
            <div className='absolute w-full h-60 right-[10px] pt-[50px] flex items-center'>
                <div className='w-44 h-w-44'>
                    <iframe className="w-2/4 h-2/4" src="https://lottie.host/embed/03f0357c-d02d-48ed-9565-3e8e4443dc8b/xw7l7buBFw.json"></iframe>
                </div>
            </div>
            <div className='absolute w-full h-60 right-[50px] mb-10  flex items-center'>
                <div className='w-96 h-96'>
                <iframe className="w-3/4 h-3/4" src="https://lottie.host/embed/0fa1b150-145e-4854-8e43-df5e11f93d47/myNy3A8ejd.json"></iframe>
                </div>
            </div>
            <div className="lg:min-h-[96vh] px-4 sm:px-6 md:px-12 lg:px-32 mx-auto w-full flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row w-full h-4/5 mt-10 lg:mt-0">
                    <div className="flex-1">
                        <Fade direction="right">
                            <h1 className="animated-gradient-text mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight" style={{ fontFamily: '"Francois One", sans-serif', }}>1+ year OF</h1>
                        </Fade>
                        <Fade direction="left">
                            <h1 className="animated-gradient-text mb-2 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center p-0 m-0 leading-tight relative left-8 sm:left-16 md:left-40 lg:left-48" style={{ fontFamily: '"Francois One", sans-serif', }}>experience</h1>
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
                                <img className="w-" src="https://i.ibb.co/TTprbj9/no-bg.png" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;