import styled from "styled-components";
import TextTitle from '../../hooks/TextTitle'
// import { FaAngleDoubleUp } from "react-icons/fa";
// import { Link } from "react-scroll";


const Section = styled.div`
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section id="about" className="px-4 md:px-6 lg:px-12 mx-auto relative">
            <TextTitle
                header='ABOUT ME' />
            {/* <div className="w-10 h-10 border border-white rounded-full absolute">
                <Link to="home">
                    <div className="flex justify-center items-center pt-3">
                        <FaAngleDoubleUp className="text-white text-xl" />
                    </div>
                </Link>
            </div> */}
        </Section>
    );
};

export default AboutMe;