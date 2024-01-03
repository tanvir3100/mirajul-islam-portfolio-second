import { Link } from "react-scroll";
import '../../Components/Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed right-0 left-0 w-full max-w-screen-xl mx-auto opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link activeClass="active" className="nav-link" to="home">Home</Link></li>
                            <li><Link activeClass="active" className="nav-link" to="about">About</Link></li>
                            <li><Link activeClass="active" className="nav-link" to="skills">Skills</Link></li>
                            <li><Link activeClass="active" className="nav-link" to="myProjects">My Projects</Link></li>
                            <li><Link activeClass="active" className="nav-link" to="blog">Blogs</Link></li>
                            <li><Link activeClass="active" className="nav-link" to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 w-full text-white justify-end">
                        <li><Link activeClass="active" className="nav-link" to="home">Home</Link></li>
                        <li><Link activeClass="active" className="nav-link" to="about">About</Link></li>
                        <li><Link activeClass="active" className="nav-link" to="skills">Skills</Link></li>
                        <li><Link activeClass="active" className="nav-link" to="myProjects">My Projects</Link></li>
                        <li><Link activeClass="active" className="nav-link" to="blog">Blogs</Link></li>
                        <li><Link activeClass="active" className="nav-link" to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;