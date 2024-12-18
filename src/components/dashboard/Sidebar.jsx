import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { MdAddCard } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/myproducts",
        title: "My Products",
        icon: <MdOutlineInventory2 />
    },
    {
        id: 2,
        route: "/dashboard/addproduct",
        title: "Add Product",
        icon: <MdAddCard />
    }
]

const buyerRoutes = [
    {
        id: 1,
        route: "/dashboard/mywishlist",
        title: "My Wishlist",
        icon: <FaCartPlus />
    },

]

const Sidebar = () => {
    const userData = useUserData();
    const { LogOut } = useAuth();
    console.log(userData);

    const handleLogOut = () => {
        LogOut();
    };

    return (
        <div className=" bg-slate-200 border-r-2 border-slate-500 min-h-full">
            <h1 className=" text-center text-2xl font-bold text-slate-900 p-4 mb-2">Gadget Shop</h1>
            <ul className=" flex flex-col gap-4 p-4">
                <li className=" btn rounded-none px-2 border border-black">
                    <GrOverview />
                    <NavLink to={'/dashboard/overview'}>Overview</NavLink>
                </li>

                {
                    userData.role === 'seller' && sellerRoutes.map(route => <li
                        key={route.id}
                        className=" btn rounded-none px-2 border border-black">
                        <NavLink to={route.route} className='flex gap-2'>
                            {route.icon}
                            {route.title}
                        </NavLink>
                    </li>)

                }

                {
                    userData.role === 'buyer' && buyerRoutes.map(route => <li
                        key={route.id}
                        className=" btn rounded-none px-2 border border-black">
                        <NavLink to={route.route} className='flex gap-2'>
                            {route.icon}
                            {route.title}
                        </NavLink>
                    </li>)

                }

                <li className=" btn rounded-none px-2 border border-black">
                    <NavLink to={'/'} className='flex gap-2'>
                        <FaHome />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => handleLogOut()}>
                        <button className=" btn btn-outline rounded-none text-white w-full bg-slate-500">
                            <CiLogout></CiLogout>
                            Log Out</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;