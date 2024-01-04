import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Blog = () => {
    return (
        <Section id="blog" className="px-4 md:px-6 lg:px-12 mx-auto">
            <TextTitle
            header='BLOG'/>
        </Section>
    );
};

export default Blog;


