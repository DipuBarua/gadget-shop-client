import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    const { user } = useAuth();

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src="https://img.freepik.com/free-vector/electronic-gadgets-collection_1284-40723.jpg?t=st=1733927361~exp=1733930961~hmac=fc525908965454d63f2d0e337cc5bc0c83fc10b7b83b3805292dfc209f18709c&w=740" alt="" width={64} height={64} className=" rounded-full" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end flex gap-2">

                {
                    user ? <UserDropdown></UserDropdown>
                        :
                        <div>
                            <Link to={'/login'}>
                                <button className=" btn btn-outline rounded-md px-2">
                                    Log In
                                </button>
                            </Link>

                            <Link to={'/signup'}>
                                <button className=" btn btn-outline rounded-md px-2">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                }

            </div>
        </div>
    );
}
export default Navbar;