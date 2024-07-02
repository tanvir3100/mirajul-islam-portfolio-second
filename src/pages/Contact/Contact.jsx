/* eslint-disable no-unused-vars */
// import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import Map from '../../Components/Map/Map'
import './Contact.css'
import Marquee from "react-fast-marquee";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div id="contact" className="px-4 mx-auto h-full pt-10 pb-20 overflow-hidden"> {/* Added pb-20 and overflow-hidden */}
            <div className="h-[50vh] flex justify-center items-center">
                <div className="">
                    <Marquee pauseOnHover className="h-full m-0 p-0 overflow-hidden">
                        <p className="animated-gradient-marquee-text border-text text-8xl tracking-wide">WEB DEVELOPER & WEB DESIGNER*</p>
                    </Marquee>
                    <Marquee pauseOnHover className="h-full m-0 p-0 overflow-hidden" direction="right">
                        <p className="animated-gradient-marquee-text text-8xl tracking-wide text-white">WEB DEVELOPER & WEB DESIGNER*</p>
                    </Marquee>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 mt-10 lg:mt-0">
                    <div className="hero w-full">
                        <div className="hero-content w-full md:w-2/4 lg:w-3/4 flex-col lg:flex-row-reverse pl:pl-0 lg:pl-20">
                            <div className="card shrink-0 w-full rounded-none p-0 md:p-6 lg:p-0">
                                <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-4xl text-white">CONTACT</h3>
                                    <div className="form-control">
                                        <input id="input" {...register("name")} type="name" placeholder="name" className="input input-bordered transparent-background rounded-full bg-gradient-to-r from-[#0F0715] to-[#1B0D29] border-[#8A54F7] text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <input id="input"  {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-full bg-gradient-to-r from-[#0F0715] to-[#1B0D29] border-[#8A54F7] text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea  {...register("message")} className="textarea textarea-bordered  rounded-2xl bg-gradient-to-r from-[#0F0715] to-[#1B0D29] border-[#8A54F7] bg-transparent h-32 text-white" placeholder="Your Massage"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn bg-gradient-to-r from-[#B795FA] to-[#8A54F7] rounded-full" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 hidden lg:block">
                    <Map />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;