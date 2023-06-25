import Banner from "../Banner/Banner";
import ExploreMore from "../ExploreMore/ExploreMore";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import LatestInformations from "../LatestInformations/LatestInformations";
import NewArrivals from "../NewArrivals/NewArrivals";
import ShortFeatures from "../ShortFeatures/ShortFeatures";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShortFeatures></ShortFeatures>
            <FeaturedProducts></FeaturedProducts>
            <ExploreMore></ExploreMore>
            <NewArrivals></NewArrivals>
            <LatestInformations></LatestInformations>
        </div>
    );
};

export default Home;