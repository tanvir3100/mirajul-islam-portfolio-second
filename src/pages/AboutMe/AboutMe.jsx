import styled from "styled-components";
import TextTitle from '../../hooks/TextTitle'
// import { FaAngleDoubleUp } from "react-icons/fa";
// import { Link } from "react-scroll";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section id="about" className="px-4 md:px-6 lg:px-12 mx-auto">
            <TextTitle
                header='about' />
        </Section>
    );
};

export default AboutMe;