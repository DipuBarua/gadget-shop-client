import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loading from "../../pages/Loading";


const BuyerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if (loading || !userData.role) {
        return <Loading></Loading>
    }
    if (user && userData.role === 'buyer') {
        return children;
    }

    return (<Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
};

export default BuyerRoute;