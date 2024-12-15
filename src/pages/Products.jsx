import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/cards/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-porducts`)
        .then(res => {
          console.log(res.data);
          setProducts(res.data);
          setLoading(false);
        })
    }
    fetch();
  }, []);

  return (
    <div>
      <h1 className=" text-2xl font-bold my-8 text-center">All Products</h1>

      <div>
        <div className=" flex justify-between">
          <SearchBar></SearchBar>
          <SortByPrice />
        </div>

        <div className=" grid grid-cols-12">
          <div className=" col-span-2">
            <FilterBar />
          </div>
          <div className=" col-span-10">
            {
              loading ?
                <Loading />
                :
                <>
                  {
                    products.length === 0 ?
                      <div className=" flex justify-center items-center">
                        <h1 className=" text-2xl font-semibold">No product found!</h1>
                      </div>
                      :
                      <div className=" py-7 px-2 grid grid-cols-3 gap-4">
                        {
                          products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                      </div>
                  }
                </>
            }

          </div>
        </div>
      </div>

    </div>
  );
}

export default Products;
