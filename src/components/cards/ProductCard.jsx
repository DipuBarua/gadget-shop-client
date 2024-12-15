
const ProductCard = ({ product }) => {
    return (
        <div className=" bg-slate-100">
            <figure>
                <img
                    src={product.image}
                    alt={product.title}
                    className="" />
            </figure>
            <div className=" p-4 space-y-1">
                <h2 className=" text-xl font-semibold flex justify-between">
                    {product.title}
                    <div className="badge badge-secondary">stock:{product.stock}</div>
                </h2>
                <h2 className=" font-medium">Price: $<span className=" text-orange-500">{product.price}</span></h2>
                <div className=" flex gap-4 font-medium">
                    <h2>Category: {product.category}</h2>
                    <h2>Brand: {product.brand}</h2>
                </div>

                <h2 className=" text-sm italic">Description: {product.description}</h2>
                <div className="card-actions justify-end">
                    <div className="btn btn-outline">Add to wishlist</div>
                    <div className="btn btn-outline">Buy</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;