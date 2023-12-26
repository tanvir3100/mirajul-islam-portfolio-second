import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`


const MyProjects = () => {
    return (
        <Section>
            <TextTitle
            header='MY PROJECTS'/>
        </Section>
    );
};

export default MyProjects;