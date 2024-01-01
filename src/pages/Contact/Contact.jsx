import styled from "styled-components";
import Footer from "../Footer/Footer";
import TextTitle from "../../hooks/TextTitle";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Contact = () => {
    return (
        <Section id="contact">
            <div className="h-[90vh]">
            <TextTitle
            header='CONTACT'/>
            </div>
            <div className="h-[10vh]">
                <Footer />
            </div>
        </Section>
    );
};

export default Contact;