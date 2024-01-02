import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Router;