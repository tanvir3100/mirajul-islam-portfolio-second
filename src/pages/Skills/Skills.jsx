import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Skills = () => {
    return (
        <Section className="px-4 md:px-6 lg:px-12 mx-auto" id="skills">
            <TextTitle
                header='SKILLS' />
        </Section>
    );
};

export default Skills;