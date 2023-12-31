import { Link } from 'react-router-dom';
import './ExploreMore.css'

const ExploreMore = () => {
    return (
        <div className="explore-banner-image my-16 text-white">
            <div className='pt-20 text-center space-y-4'>
                <p className='text-xl font-semibold'>Repair Services</p>
                <h2 className='text-4xl font-bold'>Up to <span className='text-red-600'>70% off</span> - All T-shirt & Accessories</h2>
                <Link to='/shop'><button className='btn text-white bg-[#176B87] btn-outline hover:bg-[#176B87] hover:border-white border-white shadow-md'>Explore More</button></Link>
            </div>
        </div>
    );
};

export default ExploreMore;