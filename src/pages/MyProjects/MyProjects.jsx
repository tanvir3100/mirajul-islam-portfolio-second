import styled from "styled-components";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`


const MyProjects = () => {
    return (
        <Section>
            <h2 className="text-3xl">My projects section </h2>
        </Section>
    );
};

export default MyProjects;