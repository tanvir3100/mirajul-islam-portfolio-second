// import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import Map from '../../Components/Map/Map'
import './Contact.css'



// const Section = styled.div`
//     scroll-snap-align: center;
// `

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div id="contact" className="px-4 mx-auto h-full">
            <div className="lg:h-[90vh] flex flex-col lg:flex-row">
                <div className="flex-1 mt-10 lg:mt-0">
                    <div className="hero min-h-screen w-full">
                        <div className="hero-content w-full md:2/4 lg:w-3/4 flex-col lg:flex-row-reverse pl:pl-0 lg:pl-20">
                            <div className="card shrink-0 w-full rounded-none p-0 md:p-6 lg:p-0">
                                <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-xl text-white">CONTACT</h3>
                                    <div className="form-control">
                                        <input id="input" {...register("name")} type="name" placeholder="name" className="input input-bordered rounded-none transparent-background text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <input id="input"  {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-none text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea  {...register("message")} className="textarea textarea-bordered  rounded-none bg-transparent h-32 text-white" placeholder="Your Massage"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn bg-emerald-600 rounded-none" type="submit" />
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