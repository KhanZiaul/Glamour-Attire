import contact from '../../assets/img/about/contact.jpg'
import talk from '../../assets/img/about/talk.jpg'
import { BsSend } from 'react-icons/bs';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactUs = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mengp27', 'template_ksqs4zg', form.current, '6D1J9Owz6JOrhtOxw')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Message was sent',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='pt-12 lg:pt-16 mb-10'>
            <div className="hero h-[300px] mb-8" style={{ backgroundImage: `url(${contact})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">#letstalk</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center mx-6 gap-8'>
                <div className='lg:w-[80%] w-full'>
                    <img src={talk} alt="" />
                </div>

                <div className='space-y-3'>
                    <h2 className='font-bold text-3xl uppercase'> Contact Us</h2>
                    <p>
                        We would love to hear from you! If you have any questions, comments, or feedback about our site, please do not hesitate to get in touch. Here are a few ways to reach us:</p>

                    <p> Email : <span className='text-blue-500 underline cursor-pointer'>info@glamour_attire.com</span> <br />
                        Phone : 1-800-123-4567 <br />
                        Address : Road # 01, Sadek Khan Rd, Dhaka 1207 <br />
                        Bangladesh</p>

                    <p>Our customer service team is available 24/7 to assist you with any issues you may have. You can also connect with us on social media:</p>

                    <p className=' font-normal'>
                        facebook : <span className='text-blue-500 underline cursor-pointer'>@GlamourAttire.facebook.com</span><br />
                        twitter : <span className='text-blue-500 underline cursor-pointer' >@GlamourAttire.twitter.com</span><br />
                        instagram : <span className='text-blue-500 underline cursor-pointer'>@GlamourAttire.instagram.com</span><br />
                    </p>
                </div>
            </div>

            
                <div className='mt-28 flex gap-10 '>
                    <div className='w-[80%] mx-auto border-2 p-10 rounded-xl shadow-2xl'>
                        <h2 className='text-2xl font-bold text-center'>Still have any questions ?</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <div className="flex items-center border-b border-slate-700 py-2 mb-4 pt-10">
                                    <input className="shadow-2xl appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your full name" name="user_name" aria-label="Full name" required />
                                </div>

                                <div className='mb-8'>
                                    <div className="flex items-center border-b  border-slate-700 py-2">
                                        <input className="shadow-2xl appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name="user_email" placeholder="Enter your email" aria-label="Full name" />
                                    </div>
                                </div>

                                <textarea name="message" placeholder="Message" className=" textarea shadow-2xl textarea-bordered textarea-lg w-full appearance-none bg-transparent border-nonetext-gray-700 mr-3 py-3 px-5 leading-tight focus:outline-none" aria-label="Full name">
                                </textarea>

                                <div className="form-control mt-6">
                                    <div >
                                        <button className="bg-[#68d372] hover:bg-[#3abc47] duration-200 px-5 py-3 rounded-md flex items-center justify-center gap-2"><BsSend className='w-6 h-6'></BsSend> Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default ContactUs;