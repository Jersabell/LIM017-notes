import { Navigate } from "react-router-dom";
import { useAuthContext } from '../contexts/authContext';
import Layout from "../Pages/Layout";

function PrivateRoutes() {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={'/login'} />

    } return (
        <div>
            <Layout />
        </div>
    )

};

export default PrivateRoutes;