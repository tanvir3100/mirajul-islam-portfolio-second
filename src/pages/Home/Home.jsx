import styled from "styled-components";

const Section = styled.div`
    scroll-snap-align: center;
`

const Home = () => {
    return (
        <Section id="home" className="px-4 md:px-6 lg:px-12 mx-auto">
            <div className="min-h-screen flex justify-center items-center">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Home;