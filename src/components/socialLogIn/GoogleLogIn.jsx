import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogIn = () => {
    const { GoogleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        GoogleSignIn()
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className=" divider">
                OR,
            </div>
            <button onClick={handleGoogleLogIn} className=" btn btn-outline m-2 w-full">
                <FcGoogle size={24}></FcGoogle>
                <span>Google</span>
            </button>
        </div>
    );
};

export default GoogleLogIn;