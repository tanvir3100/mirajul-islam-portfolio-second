import styled from "styled-components";
import TextTitle from '../../hooks/TextTitle'


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section className="px-4 md:px-6 lg:px-12 mx-auto">
            <TextTitle 
            header='ABOUT ME'/>
        </Section>
    );
};

export default AboutMe;