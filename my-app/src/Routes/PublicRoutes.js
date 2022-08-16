import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../contexts/authContext';

function PublicRoutes() {

    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={'/home'} />

    } return (
        <div className="containerHTMLPublicRoutes"> 
            <Outlet />
        </div>
    )

};

export default PublicRoutes;