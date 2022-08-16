import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser, singInGoogle } from "../FirebaseService/controllers";
import { useAuthContext } from "../contexts/authContext";
import style from './Login.module.css';
import logo from '../Images/logo.png';
import AlertDialogRegister from "../components/notes/ModalCheckEmail";

function Login() {

    let navigate = useNavigate();

    const { login } = useAuthContext();

    const [openModal, setOpenModal] = useState(false)

    const handleClose = () => {
        setOpenModal(false);
        navigate('/login')
    };

    // Form con react-hoock-form
    const { register, setError, formState: { errors }, handleSubmit } = useForm();

    function menssajeErrorApi(str) {
        const frase = str.slice(5).split('-').join(' ');
        const mayuscula = frase[0].toUpperCase();
        const result = frase.replace(frase[0], mayuscula)
        return result
    };

    const onSubmit = (data) => {

        const { email, password } = data

        // cuando le doy click a registrar tiene que resgistrar o sea traer de firebase
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem('USER_UID', user.uid);
                user.emailVerified ? login() : setOpenModal(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                error.code === 'auth/wrong-password' ?
                    setError('password', {
                        type: "server",
                        message: menssajeErrorApi(errorCode),
                    }
                    ) :
                    setError('email', {
                        type: "server",
                        message: menssajeErrorApi(errorCode),
                    }
                    )
            });
    }

    // loginGoogle
    function loginGoogle(e){

        e.preventDefault();

        return singInGoogle()
        .then((result) => {
            const user = result.user;
            localStorage.setItem('USER_UID', user.uid);
            login();
        })
        .catch((error) => new Error(error));
    }

    return (
        <div className={style.loginContainer}>
            <img className={style.loginImg} src={logo} alt="logo" />
            <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        style={{ border: errors.email ? '1px solid red' : '' }}
                        type="email"
                        placeholder="Enter yout email"
                        className="input-form-control"
                        name="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required',
                            }
                        })
                        }
                    />
                    <span>{errors.email?.message}</span>
                </div>

                <div>
                    <input
                        style={{ border: errors.password ? '1px solid red' : '' }}
                        type="password"
                        placeholder="Enter your password"
                        className="input-form-control"
                        name="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            maxLength: {
                                value: 50,
                                message: 'No more than 50 characteres'
                            },
                            minLength: {
                                value: 8,
                                message: 'At least 8 characteres'
                            }
                        })}
                    />
                    <span>{errors.password?.message}</span>
                </div>

                <input className={style.loginButton} type="submit" value={'Login'} />
            </form>

            <Link className={style.loginLink} to={'/register'}>Don’t have an account? Sign up</Link>
            <p>or connect with </p>
            <button onClick={(e) => loginGoogle(e)}>Google</button>
            <AlertDialogRegister open={openModal} handleClose={handleClose} />
        </div>
    )
};

export default Login;