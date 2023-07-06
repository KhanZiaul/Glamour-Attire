import './Banner.css'
import buttonImage from '../../../assets/img/button.png'
const Banner = () => {
    return (
        <div className='bg-image'>
            <div className='absolute top-40 lg:top-80 left-4 lg:left-10 space-y-1'>
                <p className='lg:text-xl font-semibold'>Trade-in-offer</p>
                <h2 className='text-xl lg:text-5xl font-bold'>Super Value Deals</h2>
                <h2 className='text-xl lg:text-5xl font-bold text-[#4FC0D0]'>On all products</h2>
                <p className='hidden lg:block'>Save more with coupons & up to 70% off!</p>
                <small className='block lg:hidden'>Save more with coupons <br /> & up to 70% off!</small>
                <div className='relative'>
                    <img className=' absolute -left-4 lg:block' src={buttonImage} alt="" />
                    <p className='absolute text-[#1B6B93] top-2 font-bold left-10'>Shop Now</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;