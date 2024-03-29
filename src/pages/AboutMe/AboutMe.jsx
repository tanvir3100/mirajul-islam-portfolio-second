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
            <div className="lg:min-h-screen w-full flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row w-3/4 h-4/5 mt-10 lg:mt-0">
                    <div className="flex-1 flex justify-center items-center h-4/5 relative">
                        <Fade direction="up" style={{ zIndex: 10 }}>
                            <div className="mr-10 z-10">
                                <img src="https://i.ibb.co/3Y65jnT/rsz-11untitled-design.jpg" className="max-w-80 rounded-xl" />
                            </div>
                        </Fade>
                    </div>
                    <div className="flex-1 flex">
                        <div>
                            <Fade direction="down">
                                <h1 className="text-5xl text-white mb-3">About</h1>
                                <p className="text-white text-justify">I am MD. Mirjul Islam, a final-year honors student with a passion for crafting responsive and modern web applications.I am seeking a dynamic working environment where I can further my learning, explore new challenges, and elevate my development skills to the next level. In the last six months, I successfully completed an intensive web development course focused on the MERN stack (MongoDB, Express.js, React.js, and Node.js). This comprehensive training has equipped me with a solid foundation in full-stack development, enabling me to build scalable and efficient applications. I am excited to apply these skills in a real-world setting and contribute to innovative projects while continuing to expand my knowledge and expertise in web development.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;