import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
    const { user, LogOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOut();
        navigate("/");
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
                <div className="avatar online">
                    <div className=" w-10 rounded-full">
                        <img src={`${user?.photoURL || "/profile.png"}`} />
                    </div>
                </div>
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-4 shadow space-y-2">
                <p className=" p-1 bg-slate-200 text-sm font-semibold text-center">User: {user?.displayName}</p>
                <li><NavLink to={'/dashboard/overview'}>Dashboard</NavLink></li>
                <li>
                    <button onClick={handleLogOut} className=" btn btn-primary btn-outline text-center">Log Out</button>
                </li>
            </ul>

        </div>
    );
};

export default UserDropdown;