import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";
// import Navbar from "../../Components/Navbar/Navbar";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Home = () => {
    return (
        <Section>
            <TextTitle
                header='HOME SECTION' />
        </Section>
    );
};

export default Home;