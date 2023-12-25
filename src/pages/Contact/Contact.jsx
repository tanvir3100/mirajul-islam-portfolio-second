import styled from "styled-components";
import Footer from "../Footer/Footer";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Contact = () => {
    return (
        <Section className="bg-red-700">
            <div className="h-[90vh]">
                <h2 className="text-4xl">This is contact section</h2>
            </div>
            <div className="h-[10vh]">
                <Footer />
            </div>
        </Section>
    );
};

export default Contact;