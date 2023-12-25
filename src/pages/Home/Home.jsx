import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Home = () => {
    return (
        <Section>
            <Navbar />
            <h2 className="text-4xl">This is home section</h2>
        </Section>
    );
};

export default Home;