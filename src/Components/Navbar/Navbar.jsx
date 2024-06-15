import { Link } from "react-scroll";
import '../../Components/Navbar.css'




const Navbar = () => {

    return (
        <div>
            <div>
                <div className="navbar fixed right-0 left-0 lg:max-h-screen w-full z-[50] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 w-52 z-50">
                                <li><Link className="hover:text-black" to="home">Home</Link></li>
                                <li><Link className="hover:text-black" to="about">About</Link></li>
                                <li><Link className="hover:text-black" to="skills">Skills</Link></li>
                                <li><Link className="hover:text-black" to="myProjects">My Projects</Link></li>
                                <li><Link className="hover:text-black" to="contact">Contact</Link></li>
                            </ul>
                        </div>
                        <Link to="home" className="btn btn-ghost text-xl text-white" id="logo">Mirajul Islam</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul tabIndex={0} className="menu menu-horizontal px-1 w-full text-white justify-end text-lg z-50">
                            <li><Link className="hover:text-black" to="home">Home</Link></li>
                            <li><Link className="hover:text-black" to="about">About</Link></li>
                            <li><Link className="hover:text-black" to="skills">Skills</Link></li>
                            <li><Link className="hover:text-black" to="myProjects">My Projects</Link></li>
                            <li><Link className="hover:text-black" to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



