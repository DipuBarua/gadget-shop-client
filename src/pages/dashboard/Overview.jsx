
import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const { user } = useAuth();

    return (
        <div className=" min-h-screen flex justify-center items-center divide-x-4 gap-5">
            <div className=" w-10 rounded-full">
                <img src={`${user?.photoURL || "/profile.png"}`} />
            </div>

            <div className=" p-5">
                <h1 className=" text-xl font-bold">{user?.displayName}</h1>
                <h1 className=" text-xl font-bold italic">{user.email}</h1>
            </div>
        </div>
    );
};

export default Overview;