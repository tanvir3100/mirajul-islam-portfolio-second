import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import './Contact.css'



const Section = styled.div`
    scroll-snap-align: center;
`

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Section id="contact" className="px-4 md:px-6 lg:px-12 mx-auto lg:h-[100vh]">
            <div className="lg:h-[90vh]">
                <div>
                    <div className="hero min-h-screen w-full">
                        <div className="hero-content w-full md:2/4 lg:w-2/4 flex-col lg:flex-row-reverse">
                            <div className="card shrink-0 w-full rounded-none p-0 md:p-6 lg:p-20">
                                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input id="input" {...register("name")} type="name" placeholder="name" className="input input-bordered rounded-none transparent-background" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input id="input"  {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-none" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Your Message</span>
                                        </label>
                                        <textarea  {...register("message")} className="textarea textarea-bordered  rounded-none bg-transparent" placeholder="Your Massage"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn bg-emerald-600 rounded-none" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-[10vh]">
                <Footer />
            </div>
        </Section>
    );
};

export default Contact;