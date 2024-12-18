import axios from "axios";
import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import ProductCard from "../../../components/cards/ProductCard";
import Loading from "../../Loading";

const MyWishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [latestData, setLatestData] = useState(true);
    //latestData for bangla system refetch.

    const userData = useUserData();
    const token = localStorage.getItem('access-token');

    useEffect(() => {
        const fetchWishlist = async () => {
            await axios.get(`https://gadget-shop-server-beta.vercel.app/wishlist/${userData._id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    setWishlist(res.data);
                    setLoading(false);
                })
        }

        if (userData._id && token) {
            fetchWishlist();
        }

    }, [token, userData, latestData]);

    // latestData is used in dependency[] for refetching data(by toggle value) in every update of wishlist 

    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    (wishlist.length > 0) ?
                        <div className=" grid md:grid-cols-2 gap-5 p-7">
                            {wishlist.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                setLatestData={setLatestData}
                                isInWishlist>
                            </ProductCard>)}
                            {/* isInWishlist - this prop is working like a true/false token to exchange button for same card. */}
                        </div>
                        :
                        <div className=" flex justify-center items-center min-h-screen text-2xl">
                            <h1>No product in your Wishlist</h1>
                        </div>
            }
        </div >
    );
};

export default MyWishlist;