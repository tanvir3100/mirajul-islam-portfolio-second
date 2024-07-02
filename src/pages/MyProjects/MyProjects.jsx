/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
// import TextTitle from "../../hooks/TextTitle";
import './MyProjects'


// const Section = styled.div`
//     height: 100vh;
//     scroll-snap-align: center;
// `


const MyProjects = () => {

    return (
        <div id="myProjects" className="px-4 md:px-6 lg:px-12 mx-auto lg:min-h-[96vh] w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-3 text-center pt-10" style={{ fontFamily: '"Boogaloo", sans-serif', }}>My Recent Work</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row w-full h-full">
                    <div id="bg" className="flex-1 w-full h-screen lg:h-[350px] lg:bg-top lg:hover:bg-bottom bg-cover border border-white lg:transition-all lg:ease-in-out lg:duration-700 lg:delay-700" style={{ backgroundImage: 'url(https://i.ibb.co/4T5PYTs/screencapture-localhost-5173-2024-01-19-16-17-52.png)' }}>
                        {/* <img src="https://i.ibb.co/4T5PYTs/screencapture-localhost-5173-2024-01-19-16-17-52.png" className="rounded-lg shadow-2xl w-full h-96 bg-cover" /> */}
                    </div>
                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl">House hold</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus ullam quam rerum sequi eveniet porro, natus mollitia non ab sint voluptas repellat similique facere ratione sunt quia aperiam labore cum minima animi accusantium. Fuga ipsa eius quisquam maxime aliquam et aut consectetur, quae mollitia. Nisi porro vitae delectus laboriosam doloremque, pariatur nesciunt facere neque, expedita necessitatibus beatae odit eveniet tempore aut deleniti ipsum inventore officia voluptates amet non? Laudantium reprehenderit porro, ipsam neque repellendus ea, fugit, ad consectetur praesentium rem obcaecati nobis animi aperiam labore adipisci amet deleniti! Quibusdam rerum quia reiciendis doloribus accusamus qui cum veritatis illo hic.</p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div id="bg" className="flex-1 w-full h-96 bg-top hover:bg-bottom bg-cover border border-white transition-all ease-in-out duration-700 delay-700" style={{ backgroundImage: 'url(https://i.ibb.co/VvJNy9t/screencapture-localhost-5173-2024-01-20-14-15-10.png)' }}>
                        {/* <img src="https://i.ibb.co/VvJNy9t/screencapture-localhost-5173-2024-01-20-14-15-10.png" className="rounded-lg shadow-2xl w-full h-96" /> */}
                    </div>
                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl">Fabric & Fit</h1>
                        <p>As a proficient developer, I have successfully crafted a dynamic and versatile website employing the MERN stack. This platform seamlessly integrates a user interface, ensuring a smooth and intuitive experience for visitors, alongside an admin interface designed for efficient management and control. The website's robust architecture and user-friendly interfaces reflect my commitment to delivering high-quality, comprehensive solutions. This project showcases my proficiency in web development and highlights my ability to create feature-rich applications with a focus on both user experience and administrative functionality. It stands as a testament to my skills in leveraging modern technologies to build impactful digital solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;