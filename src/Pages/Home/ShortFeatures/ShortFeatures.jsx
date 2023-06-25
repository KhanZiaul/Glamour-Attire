import image1 from '../../../assets/img/features/f1.png'
import image2 from '../../../assets/img/features/f2.png'
import image3 from '../../../assets/img/features/f3.png'
import image4 from '../../../assets/img/features/f4.png'
import image5 from '../../../assets/img/features/f5.png'
import image6 from '../../../assets/img/features/f6.png'

const ShortFeatures = () => {
    const features = [
        { image: image1, name: 'Free Shipping' },
        { image: image2, name: 'Online Order' },
        { image: image3, name: 'Save Money' },
        { image: image4, name: 'Promotions' },
        { image: image5, name: 'Happy Sell' },
        { image: image6, name: 'F24/7 Support' }
    ]
    return (
        <div className='flex mx-auto w-[90%] justify-between my-8'>
            {
                features.map((feature, index) => {
                    return (
                        <div key={index} className='px-3 py-6 border-2 rounded-md shadow-xl'>
                            <img src={feature.image} alt="" />
                            <p className='text-center font-semibold mt-3 bg-[#164B60] shadow-xl text-white'>{feature.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ShortFeatures;