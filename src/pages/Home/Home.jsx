import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
// import TextTitle from "../../hooks/TextTitle";
// import Navbar from "../../Components/Navbar/Navbar";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Home = () => {
    return (
        <Section>
            <Navbar />
            <p>home section</p>
        </Section>
    );
};

export default Home;