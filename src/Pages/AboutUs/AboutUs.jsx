import bgImage from '../../assets/img/banner/b2.jpg'
import about from '../../assets/img/about/about.jpg'
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

            <div>
                <div className='lg:w-[80%] mx-auto w-full'>
                    <img className='w-full h-[520px] mx-auto' src={about} alt="" />
                </div>
                <div className='space-y-3 text-justify mx-10'>
                    <h2 className='font-bold text-2xl text-center my-10 uppercase'> Our Vision and Values</h2>
                    <p> Welcome to GlamourAttire, your ultimate destination for all things glamorous in the world of fashion. We are an online e-commerce platform dedicated to providing you with the trendiest and most stylish attire for any occasion. At GlamourAttire, we believe that fashion is a form of self-expression, and we strive to empower individuals to embrace their unique style and feel confident in what they wear. Our curated collection features a wide range of clothing, accessories, and footwear carefully selected to cater to diverse tastes and preferences.</p>

                    <p>What sets us apart is our commitment to offering high-quality products from renowned fashion brands and emerging designers. We work closely with our partners to ensure that every piece in our collection meets the highest standards of craftsmanship and design excellence.At GlamourAttire, we believe that fashion is a form of self-expression, and we strive to empower individuals to embrace their unique style and feel confident in what they wear. Our curated collection features a wide range of clothing, accessories, and footwear carefully selected to cater to diverse tastes and preferences.</p>

                    <p>Our website offers a user-friendly and enjoyable shopping experience. Browse through our carefully categorized sections, where you will find the latest trends in dresses, tops, bottoms, outerwear, and more. Discover the perfect outfit for a special event, update your everyday wardrobe essentials, or explore statement pieces to express your individuality. We understand the importance of convenience and satisfaction in online shopping. That is why we offer secure payment options, fast and reliable shipping, and a hassle-free return policy. Our dedicated customer support team is always ready to assist you with any inquiries or concerns you may have.</p>
                </div>
            </div>

            <div className='mx-20'>
                <h2 className='text-3xl text-center my-16 font-bold'>Services</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px' src={order} alt="" />
                        <h2 className='my-4 text-center font-semibold'>Easy To Order</h2>
                    </div>
                    <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                        <img className='w-full lg:w-[400px] lg:h-[450px' src={delivery} alt="" />
                        <h2 className='my-4 text-center font-semibold'>Fastest Delivery </h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className='space-y-2 mb-10 flex flex-col items-center justify-center'>
                    <img className='w-full lg:w-[400px] lg:h-[500px]' src={quality} alt="" />
                    <h2 className='my-4 text-center font-semibold'>Best Quality</h2>
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