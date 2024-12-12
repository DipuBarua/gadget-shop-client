import { useNavigate } from "react-router-dom";
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
                <li><a>Item</a></li>
                <li><a>Item 2</a></li>
                <li>
                    <button onClick={handleLogOut} className=" btn btn-primary btn-outline text-center">Log Out</button>
                </li>
            </ul>

        </div>
    );
};

export default UserDropdown;