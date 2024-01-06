/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
// import { useTypewriter } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'

const Section = styled.div`
    scroll-snap-align: center;
`




const Home = () => {


    // const { text } = useTypewriter({
    //     words: ['MERN-STACK WEB DEVELOPER', 'junior-web developer'],
    //     loop: {},
    //     typeSpeed: 120,
    //     deleteSpeed: 80,
    // })


    return (
        <Section id="home" className="px-4 md:px-6 lg:px-12 mx-auto">
            <div className="min-h-screen flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 flex">
                        <div>
                            <h1 className="text-4xl font-bold text-white"><span className="text-2xl">Hello! I'M</span> <br />
                                MIRAJUL ISLAM</h1>
                            <h1 className="text-xl text-white">
                                <span className="text-emerald-500 font-bold">
                                    <Typewriter words={['FONT-END DEVELOPER', 'MERN-STACK DEVELOPER', 'REACT DEVELOPER']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000} />
                                </span>
                            </h1>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Home;