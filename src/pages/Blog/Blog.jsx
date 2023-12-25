import styled from "styled-components";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Blog = () => {
    return (
        <Section>
            <h2 className="text-4xl">This is Blog section</h2>
        </Section>
    );
};

export default Blog;