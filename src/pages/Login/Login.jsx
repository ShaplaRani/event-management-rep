import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';

   const Login = () => {

    const {signInUser,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    
    const handleLogin = e => {
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);

       signInUser(email,password)
       .then( result => {
        console.log(result.user);
        e.target.reset();
        navigate('/')
       
       })
       .catch(error => {
        swal(error.message)
       })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.error(error))
      }

    return (
        <div className="">
            <div>
                <h3 className="text-3xl my-10 text-center "> Login your account</h3>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered"
                         required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center my-4 font-bold text-xl">Do not Have An Account ? <Link to="/register"
                 className="text-red-400">Register</Link></p>
               <p className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
                </p>
            </div>
        </div>
    );
};

export default Login;

