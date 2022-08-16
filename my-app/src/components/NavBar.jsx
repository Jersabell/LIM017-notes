import style from './NavBar.module.css';
import logo from '../Images/logo.png';
import { useAuthContext } from "../contexts/authContext";

function NavBar() {

    const { logout } = useAuthContext();

    const logoutUser = () =>{
        localStorage.removeItem('USER_UID');
        return logout();
    }

    return (
        <div className={style.NavBarContainer}>
            <i>[=]</i>
            <img src={logo} alt="logo" />
            <h2>Belle Notes</h2>
            <button onClick={(e) => logoutUser(e)}>cerrar sesión</button>
        </div>
    )
};
export default NavBar;