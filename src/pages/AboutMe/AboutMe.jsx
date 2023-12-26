import styled from "styled-components";
import TextTitle from '../../hooks/TextTitle'


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section id="#aboutMe">
            <TextTitle 
            header='ABOUT ME'/>
        </Section>
    );
};

export default AboutMe;