import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import VerticalBar from "../components/VerticalBar";
function Layout(){
    return(
        <>
            <NavBar/>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
                <VerticalBar/>
                <Outlet/>   
            </div>
        </>
        
    )
};
export default Layout;