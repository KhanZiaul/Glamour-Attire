import contact from '../../assets/img/about/contact.jpg'

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
        </div>
    );
};

export default ContactUs;