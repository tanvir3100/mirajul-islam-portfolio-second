import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";



const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        if (window.scrollY > 300) {
            setShowScrollButton(true)
        } {
            setShowScrollButton(false)
        }
    }, [])

    const scrollToTop = () => {
        <Link to="home" />
    }

    return (
        <div className="h-10 w-10 border-black rounded-full cursor-pointer">
            {
                showScrollButton && (<FaAngleDoubleUp className="fixed bottom-4 right-5" onClick={scrollToTop} />)
            }
            <FaAngleDoubleUp onClick={(<Link to='home'/>)} className="fixed"/>
        </div>
    );
};

export default ScrollToTop;