import bgImage from '../../assets/img/banner/b2.jpg'
import aboutUs from '../../assets/img/about/a6.jpg'
import b1 from '../../assets/img/US/b1.jpg'
import b2 from '../../assets/img/US/b2.jpg'
import g1 from '../../assets/img/US/g1.jpg'
import g2 from '../../assets/img/US/g2.jpg'
import g3 from '../../assets/img/US/g3.jpg'
import quality from '../../assets/img/Service/certificate.jpg'
import delivery from '../../assets/img/Service/deliver.jpg'
import order from '../../assets/img/Service/order.jpg'
const AboutUs = () => {
    return (
        <div className='pt-12 lg:pt-16 mb-10'>
            <div className="hero h-[300px] mb-8" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">#knowmoreaboutus</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-10 items-center mx-6'>
                <div>
                    <img className='w-[1000px] rounded-xl' src={aboutUs} alt="" />
                </div>

                <div className='space-y-3'>
                    <p className='text-4xl font-bold'>Who We Are ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus ratione beatae cumque a? Unde odit quod eligendi, delectus dolorum laborum vel ex nihil porro cum quas eius reprehenderit exercitationem?</p>
                </div>
            </div>

            <div className='mx-20'>
                <h2 className='text-3xl text-center my-16 font-bold'>Services</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={order} alt="" />
                        <h2 className='my-2 text-center text-xl font-semibold'>Easy To Order</h2>
                    </div>
                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={delivery} alt="" />
                        <h2 className='my-2 text-center text-xl font-semibold'>Fastest Delivery </h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                    <img className='w-full lg:w-[400px] lg:h-[500px] mb-10' src={quality} alt="" />
                    <h2 className='my-2 text-center text-xl font-semibold'>Best Quality</h2>
                </div>
            </div>

            <div className='mx-20'>
                <h2 className='text-3xl text-center my-16 font-bold'>Meet Our Team Members</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={b1} alt="" />
                        <h2 className='text-xl font-bold'>Jhonny Khalifa</h2>
                        <p className='font-bold'>Senior HR</p>
                    </div>

                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={g1} alt="" />
                        <h2 className='text-xl font-bold'>Sophia Perez</h2>
                        <p className='font-bold'>Head of Sales</p>
                    </div>

                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={g2} alt="" />
                        <h2 className='text-xl font-bold'>Aliah Lana</h2>
                        <p className='font-bold'>Jr. Sales Manager</p>
                    </div>

                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px] mb-10' src={g3} alt="" />
                        <h2 className='text-xl font-bold'>Natali Chirgi</h2>
                        <p className='font-bold'>Product Desinger</p>
                    </div>

                </div>
                <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                    <img className='w-full lg:w-[400px] lg:h-[500px] mb-10' src={b2} alt="" />
                    <h2 className='text-xl font-bold'>Loki Bright</h2>
                    <p className='font-bold'>Growth Manager</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;