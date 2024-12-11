import ProductCard from "../cards/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className=" lg:flex space-x-3 justify-center items-center">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    );
};

export default FeaturedProducts;
