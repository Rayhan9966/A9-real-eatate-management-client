import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {registerUser}=useContext(AuthContext)
   

    const handleRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
// console.log(name,photo,email,password)
registerUser(email,password)
       

    }
    return (
        <div>
                <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <h5 className="text-5xl font-bold">Welcome to EMAAR</h5>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input name='photo' type="text" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
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
          <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
           
            <a href="#" className="label-text-alt link link-hover">Already Register?</a>
            <Link to="/login"  className="label-text-alt link link-hover">Login Now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;