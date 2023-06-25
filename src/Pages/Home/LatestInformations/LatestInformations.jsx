import image1 from '../../../assets/img/banner/b17.jpg'
import image2 from '../../../assets/img/banner/b10.jpg'
import image3 from '../../../assets/img/banner/b7.jpg'
import image4 from '../../../assets/img/banner/b4.jpg'
import image5 from '../../../assets/img/banner/b18.jpg'

const LatestInformations = () => {
    return (
        <div className='w-[90%] mx-auto my-16'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='relative'>
                    <img className='h-[400px]' src={image1} alt="" />
                    <div className='absolute top-28 left-10 space-y-2'>
                        <p className='text-xl text-white font-semibold'>crazy deals</p>
                        <h2 className='text-3xl font-bold text-white'>buy 1 get 1 free</h2>
                        <p className='text-white font-semibold'>The best classic is on sale at glamour attire</p>
                        <button className='btn text-white btn-outline hover:bg-[#176B87] hover:border-white border-white shadow-xl'>Learn More</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[400px]' src={image2} alt="" />
                    <div className='absolute top-28 left-10 space-y-2'>
                        <p className='text-xl text-white font-semibold'>spring/summer</p>
                        <h2 className='text-3xl font-bold text-white'>upcoming season</h2>
                        <p className='text-white font-semibold'>The best classic is on sale at glamour attire</p>
                        <button className='btn text-white btn-outline hover:bg-[#176B87] hover:border-white border-white shadow-xl'>Collection</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                <div className='relative'>
                    <img className='h-[350px]' src={image3} alt="" />
                    <div className='absolute bottom-20 left-7 space-y-2'>
                        <h2 className='text-3xl font-bold text-white'>SEASONAL SALE</h2>
                        <p className='font-semibold text-red-800'>Winter Collection - 50% off</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[350px]' src={image4} alt="" />
                    <div className='absolute bottom-12 left-7 space-y-2'>
                        <h2 className='text-3xl font-bold text-white'>NEW FOOTWEAR COLLECTION</h2>
                        <p className='font-semibold text-red-800'>Spring/Summer 2023</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[350px]' src={image5} alt="" />
                    <div className='absolute bottom-20 left-7 space-y-2'>
                        <h2 className='text-3xl font-bold text-white'>T-SHIRTS</h2>
                        <p className='font-semibold text-red-800'>New Trendy Prints</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestInformations;