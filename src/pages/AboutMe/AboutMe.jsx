import styled from "styled-components";
import TextTitle from '../../hooks/TextTitle'
// import video from '../../assets/network_-_27018 (Original).mp4'
// import { FaAngleDoubleUp } from "react-icons/fa";
// import { Link } from "react-scroll";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section id="about" className="">
            <TextTitle
                header='about' />

        </Section>
    );
};

export default AboutMe;