// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Notes from './Pages/Notes';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import Profile from './Pages/Profile';
import { AuthContextProvider } from './contexts/authContext';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<PublicRoutes/>}>
          <Route index element={<Notes />} />
          <Route path="login" element={<Login handleLogin />} />
          <Route path="register" element={<Register />} />
        </Route>
        
        <Route path='home' element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />}/>
        </Route>

        <Route path="*" element={<Notfound />}/>
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
