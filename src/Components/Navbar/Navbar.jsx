import { FaHatCowboy } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";



const Navbar = () => {
    return (
        <div className="drawer lg:drawer-open fixed w-full mt-4 lg:mt-0 flex justify-start">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
                {/* Page content here */}
                <label htmlFor="my-drawer-2"><div className="border-2 border-black p-2 ml-5 lg:hidden"><TiThMenu className="text-black font-bold text-2xl" /></div></label>
            </div>
            <div className="drawer-side" id="drawer">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className={"menu p-4 w-44 lg:w-72 min-h-full bg-[#09101a] text-base-content rounded-none border-none"}>
                    <div className="h-20 lg:h-36 flex items-center p-2 lg:p-4 bg-[#09101a] mb-4 lg:mb-6">
                        <h1 className="text-white text-xl lg:text-4xl">MD.MIRAJUL <br />ISLAM</h1>
                    </div>
                    {/* Sidebar content here */}
                    <li><a href="/" className="border border-white lg:p-4 rounded-lg lg:text-lg"><IoHome className="text-xl" />Home</a></li>
                    <li><a href="#about" className="border border-white lg:p-4 rounded-lg lg:text-lg"><FaHatCowboy className="text-xl" />About Me</a></li>
                    <li><a href="#skills" className="border border-white lg:p-4 rounded-lg lg:text-lg">Skills</a></li>
                    <li><a href="#myProjects" className="border border-white lg:p-4 rounded-lg lg:text-lg">My Projects</a></li>
                    <li><a href="#blog" className="border border-white lg:p-4 rounded-lg lg:text-lg">Blog</a></li>
                    <li><a href="#contact" className="border border-white lg:p-4 rounded-lg lg:text-lg">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;