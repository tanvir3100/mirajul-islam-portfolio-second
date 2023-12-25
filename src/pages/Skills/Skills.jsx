import styled from "styled-components";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Skills = () => {
    return (
        <Section>
            <h2 className="text-3xl">this is skills section</h2>
        </Section>
    );
};

export default Skills;