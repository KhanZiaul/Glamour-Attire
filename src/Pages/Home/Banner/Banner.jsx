import './Banner.css'
import buttonImage from '../../../assets/img/button.png'
const Banner = () => {
    return (
        <div className='bg-image'>
            <p>Trade-in-offer</p>
            <h2>Super Value Deals</h2>
            <h2>On all products</h2>
            <p>Save more with coupons & up to 70% off!</p>
            <div>
                <img src={buttonImage} alt="" />
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default Banner;