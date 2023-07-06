import bgImage from '../assets/img/banner/b2.jpg'
import aboutUs from '../assets/img/about/a6.jpg'

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
        </div>
    );
};

export default AboutUs;