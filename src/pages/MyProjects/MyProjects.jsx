import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`


const MyProjects = () => {
    return (
        <Section id="myProjects" className="px-4 md:px-6 lg:px-12 mx-auto">
            <TextTitle
            header='MY PROJECTS'/>
        </Section>
    );
};

export default MyProjects;