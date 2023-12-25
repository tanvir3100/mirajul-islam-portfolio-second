import styled from "styled-components";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const AboutMe = () => {
    return (
        <Section id="#aboutMe">
            <h2 className="text-4xl">This is about me section</h2>
        </Section>
    );
};

export default AboutMe;