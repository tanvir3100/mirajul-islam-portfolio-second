import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Skills = () => {
    return (
        <Section>
            <TextTitle
                header='SKILLS' />
        </Section>
    );
};

export default Skills;