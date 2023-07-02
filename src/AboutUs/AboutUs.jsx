import bgImage from '../assets/img/banner/b2.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero h-[300px]" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">#readmore</h1>
                        <p className="mb-5">Read all case studies about our products!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;