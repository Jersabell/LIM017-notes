import { Link } from "react-router-dom";
import style from './Notes.module.css';
import logo from '../Images/logo.png';

function Notes(){
    return(
        <div className={style.notesContainer}>
            <img className={style.notesImg} src={logo} alt="logo" />
            <p className={style.notesWellcome}>Welcome to Belle, this is a notes app aimed at beautiful and organized 
                women who need a secure, dynamic and special application to write a reminder 
                or take notes</p>
            <div className={style.notesButtons}>
                
                    <Link className={style.notesLink} to={'/login'}>Login</Link>
         
                    <Link className={style.notesLink} to={'/register'}>Register</Link>
         
            </div>
        </div>
    )
};
export default Notes;