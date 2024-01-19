// import styled from "styled-components";
import TextTitle from "../../hooks/TextTitle";


// const Section = styled.div`
//     height: 100vh;
//     scroll-snap-align: center;
// `


const MyProjects = () => {

    return (
        <div id="myProjects" className="px-4 md:px-6 lg:px-12 mx-auto">
            <TextTitle
                header='MY PROJECTS' />
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="flex-1 w-full h-[350px] bg-top hover:bg-bottom bg-cover border border-white transition-all ease-in-out duration-700 delay-700" style={{backgroundImage: 'url(https://i.ibb.co/4T5PYTs/screencapture-localhost-5173-2024-01-19-16-17-52.png)'}}>
                        {/* <img src="https://i.ibb.co/4T5PYTs/screencapture-localhost-5173-2024-01-19-16-17-52.png" className="rounded-lg shadow-2xl w-full h-96 bg-cover" /> */}
                    </div>
                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl">Projects:Projects Name</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus ullam quam rerum sequi eveniet porro, natus mollitia non ab sint voluptas repellat similique facere ratione sunt quia aperiam labore cum minima animi accusantium. Fuga ipsa eius quisquam maxime aliquam et aut consectetur, quae mollitia. Nisi porro vitae delectus laboriosam doloremque, pariatur nesciunt facere neque, expedita necessitatibus beatae odit eveniet tempore aut deleniti ipsum inventore officia voluptates amet non? Laudantium reprehenderit porro, ipsam neque repellendus ea, fugit, ad consectetur praesentium rem obcaecati nobis animi aperiam labore adipisci amet deleniti! Quibusdam rerum quia reiciendis doloribus accusamus qui cum veritatis illo hic.</p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="flex-1 w-full">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-lg shadow-2xl w-full h-96" />
                    </div>
                    <div className="flex-1 w-full text-white">
                        <h1 className="text-3xl">Projects:Projects Name</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus ullam quam rerum sequi eveniet porro, natus mollitia non ab sint voluptas repellat similique facere ratione sunt quia aperiam labore cum minima animi accusantium. Fuga ipsa eius quisquam maxime aliquam et aut consectetur, quae mollitia. Nisi porro vitae delectus laboriosam doloremque, pariatur nesciunt facere neque, expedita necessitatibus beatae odit eveniet tempore aut deleniti ipsum inventore officia voluptates amet non? Laudantium reprehenderit porro, ipsam neque repellendus ea, fugit, ad consectetur praesentium rem obcaecati nobis animi aperiam labore adipisci amet deleniti! Quibusdam rerum quia reiciendis doloribus accusamus qui cum veritatis illo hic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;