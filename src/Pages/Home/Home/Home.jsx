import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ShortFeatures from "../ShortFeatures/ShortFeatures";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShortFeatures></ShortFeatures>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;