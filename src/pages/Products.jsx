import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/cards/ProductCard";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //search,sort,brand, category states are managed by state lifting.
  // state does the lifting, and props can't do this lifting, just distribute the lifted data from parent to child.
  // what is the difference between state and prop? >> prop's value can't change in children; but state can be change its value from children component by set variable(it's called state lifting).

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`https://gadget-shop-server-beta.vercel.app/all-porducts?title=${search}&page=${page}&limit=${9}&sort=${sort}&category=${category}&brand=${brand}`)
        .then(res => {
          console.log(res.data);
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts / 9));
          setLoading(false);
        })
    }
    fetch();
  }, [search, sort, category, brand, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = '';
  }

  const handleReload = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  }

  console.log({ search, sort, brand, category, uniqueBrand, uniqueCategory });

  // pagination 
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div>
      <h1 className=" text-2xl font-bold my-8 text-center">All Products</h1>

      <div>
        <div className=" flex justify-between">
          <SearchBar handleSearch={handleSearch}></SearchBar>
          <SortByPrice setSort={setSort} />
        </div>

        <div className=" grid md:grid-cols-12 gap-2">
          <div className="md:col-span-2">
            <FilterBar
              setBrand={setBrand}
              setCategory={setCategory}
              handleReload={handleReload}
              uniqueBrand={uniqueBrand}
              uniqueCategory={uniqueCategory}
            />
          </div>
          <div className="md:col-span-10">
            {
              loading ?
                <Loading />
                :
                <>
                  {
                    products.length === 0 ?
                      <div className=" flex justify-center items-center min-h-screen">
                        <h1 className=" text-2xl font-semibold">No product found!</h1>
                      </div>
                      :
                      <div className=" py-7 px-2 grid md:grid-cols-3 gap-4">
                        {
                          products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                      </div>
                  }
                </>
            }

            {/* pagination  */}
            <div className="pt-4 flex gap-7 justify-center items-center">
              <button
                onClick={() => handlePageChange(page - 1)}
                className=" btn btn-outline rounded-full border"
                disabled={page === 1}>
                <MdOutlineKeyboardArrowLeft />
              </button>

              <h1 className=" font-medium">page {page} of {totalPages}</h1>

              <button
                onClick={() => handlePageChange(page + 1)}
                className="btn btn-outline rounded-full border"
                disabled={page === totalPages}>
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
