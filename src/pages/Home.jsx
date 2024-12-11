import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Review from "../components/home/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className=" my-12">
                <h1 className=" mb-4 items-center text-center text-4xl font-bold">Featured Products</h1>
                <FeaturedProducts></FeaturedProducts>
            </div>

            <div className=" my-12">
                <h1 className=" mb-4 items-center text-center text-4xl font-bold">Customer Review</h1>
                <Review></Review>
            </div>

            <div className=" my-12">
                <h1 className=" mb-4 items-center text-center text-4xl font-bold">Frequently Aksed Question</h1>
                <Accordion></Accordion>
            </div>
        </div>
    );
};

export default Home;