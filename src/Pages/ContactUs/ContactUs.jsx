import contact from '../../assets/img/about/contact.jpg'
import talk from '../../assets/img/about/talk.jpg'

const ContactUs = () => {
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
                <div className='lg:w-[80%]'>
                    <img className='rounded-xl' src={talk} alt="" />
                </div>

                <div className='space-y-3'>
                    <h2 className='font-bold text-3xl uppercase'> Contact Us</h2>
                    <p>
                        We would love to hear from you! If you have any questions, comments, or feedback about our site, please do not hesitate to get in touch. Here are a few ways to reach us:</p>

                    <p> Email: <span className='text-blue-500 underline cursor-pointer'>info@glamour_attire.com</span> <br />
                        Phone: 1-800-123-4567 <br />
                        Address: Road # 01, Sadek Khan Rd, Dhaka 1207 <br />
                        Bangladesh</p>

                    <p>Our customer service team is available 24/7 to assist you with any issues you may have. You can also connect with us on social media:</p>

                    <p className=' font-normal'>
                        facebook: <span className='text-blue-500 underline cursor-pointer'>@GlamourAttire.facebook.com</span><br />
                        twitter: <span className='text-blue-500 underline cursor-pointer' >@GlamourAttire.twitter.com</span><br />
                        instagram: <span className='text-blue-500 underline cursor-pointer'>@GlamourAttire.instagram.com</span><br />
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;