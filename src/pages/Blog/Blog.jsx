import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Blog = () => {
    return (
        <Section id="blog">
            <TextTitle
            header='BLOG'/>
        </Section>
    );
};

export default Blog;