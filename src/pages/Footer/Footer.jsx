const Footer = () => {
    return (
        <div className="w-full h-[38vh]">
            <div className="px-4 md:px-6 lg:px-12 mx-auto">
                <hr className="w-full bg-gradient-to-r from-[#C2FF3F] to-[#76D9FF] mx-auto" />
                <div className="flex justify-between items-center text-white my-0 py-0">
                    <p>copy right reserved</p>
                    <div className="flex justify-center items-center gap-2">
                        <img src="https://i.ibb.co/48dSdxP/email-icon.png" alt="" />
                        <a
                            href={`mailto:mirajulislam0046@gmail.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>mirajulislam0046gmail.com</p>
                        </a>
                    </div>
                </div>
                <div className="w-full h-full flex justify-between items-center">
                    <div>
                        <h1 className="text-9xl text-center text-white mb-0 pb-0 mt-0 pt-0" style={{ fontFamily: '"Koulen", sans-serif', margin: 0, padding: 0 }}>Mirajul Isalam</h1>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/2gDsp60/tnavirlogo-removebg-preview-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;