import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser, sendMail, updateUserData } from '../FirebaseService/controllers'
import { useState } from "react";
import style from './Login.module.css';
import logo from '../Images/logo.png'
import AlertDialogRegister from '../components/notes/ModalCheckEmail'

function Register() {

  let navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    navigate('/login')
  };

  // Form con react-hoock-form
  const { register, setError, formState: { errors }, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    const { email, password, userName } = data

    // resgistrar usuarios con correo electrónico
    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendMail();
        setOpenModal(true);
        return user.uid
      })
      .then((uid) => updateUserData(userName))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError('email', {
          type: "server",
          message: 'Email already in use'
        })
      });

    return console.log(data);
  };

  return (
    <div className={style.loginContainer}>
      <img
        style={{ width: '165px' }}
        src={logo} alt="logo" />
      <form
        style={{ gap: '15px' }}
        className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            style={{ border: errors.userName ? '1px solid red' : '', height: '35px' }}
            type="text"
            placeholder="Enter your name"
            className="input-form-control"
            name="userName"
            {...register("userName", { required: true })}
          />
          <span>{errors.userName && "Name is required"}</span>
        </div>

        <div>
          <input
            style={{ border: errors.email ? '1px solid red' : '', height: '35px' }}
            type="email"
            placeholder="Enter yout email"
            className="input-form-control"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: 'Email is required'
              },
            })}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <input
            style={{ border: errors.password ? '1px solid red' : '', height: '35px' }}
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

        <div>
          <input
            style={{ border: errors.confirmpassword ? '1px solid red' : '', height: '35px' }}
            type="password"
            placeholder="Enter your password"
            className="input-form-control"
            name="confirmpassword"
            {...register("confirmpassword", {
              required: {
                value: true,
                message: 'Confirm password is required'
              },
              validate: (value) => {
                if (watch('password') !== value) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          <span>{errors.confirmpassword?.message}</span>
        </div>
        <input className={style.loginButton} type="submit" value={'Created account'} />
      </form>

      <Link className={style.loginLink} to={'/login'}>Do you have an account? Sign in</Link>
      <AlertDialogRegister open={openModal} handleClose={handleClose} />
    </div>
  )
};

export default Register;