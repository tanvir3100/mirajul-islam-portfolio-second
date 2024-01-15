import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Section = styled.div`
    scroll-snap-align: center;
`

const Skills = () => {
    return (
        <Section id="skills" className="px-4 md:px-6 lg:px-12 mx-auto max-w-full lg:min-h-screen flex justify-center items-center p-10">
            <div className="h-4/5 lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-5 text-white lg:p-10">
                <div className="bg-[#3d3085] h-full rounded-lg shadow-xl">
                    <Fade direction="right">
                        <div className="card-body">
                            <h2 className="card-title">Frontend!</h2>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/4mS67rT/html5-3384014-1920-removebg-preview-1.png" alt="" />
                                </div>
                                <div>
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/vXCqZbJ/CSS3-logo-and-wordmark-svg-removebg-preview.png" alt="" />
                                </div>
                                <div>
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/4dLYhL5/javascript-736400-1920.png" alt="" />
                                </div>
                                <div>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/VTXsp0z/download-removebg-preview.png" alt="" />
                                </div>
                                <div>
                                    <p>Tailwind CSS</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/RDDzdDC/favicon-192.webp" alt="" />
                                </div>
                                <div>
                                    <p>DaisyUI</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="shadow-xl bg-[#3d3085] h-full rounded-lg">
                    <div className="card-body">
                        <h2 className="card-title">Backend!</h2>
                        <div className="flex border border-white items-center gap-5 p-2">
                            <div className="h-10">
                                <img className='w-10 h-10' src="https://i.ibb.co/hcrq97n/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                <p>Express.js</p>
                            </div>
                        </div>
                        <div className="flex border border-white items-center gap-5 p-2">
                            <div className="w-20 h-10">
                                <img className='w-20 h-10' src="https://i.ibb.co/XDwrXRr/node-js-736399-1920-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                <p>Node.js</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl h-full">
                    <div className="card-body bg-[#3d3085] h-full rounded-lg">
                        <Fade direction="left">
                            <h2 className="card-title">Others!</h2>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/Mk7fnT7/mongodb-logo-removebg-preview.png" alt="" />
                                </div>
                                <div>
                                    <p>MongoDB</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/Mfz6JTF/json-web-tokens-jwt-io-logo-C003-DEC47-A-seeklogo-com.png" alt="" />
                                </div>
                                <div>
                                    <p>JWT</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/82PcjH5/0963a6051212c3268e25d640c0410583-removebg-preview.png" alt="" />
                                </div>
                                <div>
                                    <p>Firebase</p>
                                </div>
                            </div>
                            <div className="flex border border-white items-center gap-5 p-2">
                                <div className="w-10 h-10">
                                    <img className='w-10 h-10' src="https://i.ibb.co/P6kPhQp/github-6980894-1920.png" alt="" />
                                </div>
                                <div>
                                    <p>git & github</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;