import './Banner.css'
import buttonImage from '../../../assets/img/button.png'
const Banner = () => {
    return (
        <div className='bg-image'>
            <div className='absolute bottom-0 left-10 space-y-1'>
                <p className='text-xl font-semibold'>Trade-in-offer</p>
                <h2 className='text-5xl font-bold'>Super Value Deals</h2>
                <h2 className='text-5xl font-bold text-[#4FC0D0]'>On all products</h2>
                <p>Save more with coupons & up to 70% off!</p>
                <div className='relative'>
                    <img src={buttonImage} alt="" />
                    <p className='absolute text-[#1B6B93] top-2 font-bold left-20'>Shop Now</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;