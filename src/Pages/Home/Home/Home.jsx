import Banner from "../Banner/Banner";
import ExploreMore from "../ExploreMore/ExploreMore";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ShortFeatures from "../ShortFeatures/ShortFeatures";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShortFeatures></ShortFeatures>
            <FeaturedProducts></FeaturedProducts>
            <ExploreMore></ExploreMore>
        </div>
    );
};

export default Home;