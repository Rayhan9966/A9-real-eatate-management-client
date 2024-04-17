import React, { useContext, useEffect } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ProtectedRoute from '../routes/ProtectedRoute/ProtectedRoute';

const Login = () => {
const {loginUser,googleLogin,facebookLogin,setUser,user} =useContext(AuthContext)
const location= useLocation()
const navigate=useNavigate()
console.log(location);






    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
console.log(email,password)
loginUser(email,password)
       }

       const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>setUser(result))
       }
       const handleFacebookLogin=()=>{
        facebookLogin()
        .then(result=>setUser(result))
       }

       useEffect(()=>{
if(user){
  navigate(location.state)
}

       },[user])
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <h5 className="text-5xl font-bold">Welcome to EMAAR</h5>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  name='password'  type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
           
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <Link to="/register"  className="label-text-alt link link-hover">Registaer Now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
         <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin}>Google login</button>
      <button onClick={handleFacebookLogin}>Facebook login</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;