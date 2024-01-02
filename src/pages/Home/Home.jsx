import styled from "styled-components";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Home = () => {
    return (
        <Section className="px-4 md:px-6 lg:px-12 mx-auto" id="home">
        </Section>
    );
};

export default Home;