import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { FaEyeSlash,FaEye,FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

   const Login = () => {

    const {signInUser,signInWithGoogle,signInWithGithub} = useContext(AuthContext)
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login location',location);
    const handleLogin = e => {
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);

       signInUser(email,password)
       .then( result => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state? location.state:'/')
       
       })
       .catch(error => {
        swal(error.message)
       })
    }
   //google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(location?.state? location.state:'/')
        })
        .catch(error => {
            console.error(error)
        })

      }
    //github
      const handleGithubSignIn =() => {
        signInWithGithub()
        .then(result => {
            console.log(result.user);
            navigate(location?.state? location.state:'/')
        })
        .then( error => {
            console.log(error);
        })
      }

    return (
        <div className="">

            <div className="w-5/6 lg:w-2/5 bg-white rounded-lg shadow-md py-20 m-auto mt-24 mb-40">
                <h3 className=" text-2xl md:text-3xl  text-center font-semibold text-gray-800 "> Login your account</h3>
                  <div className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto my-12">
                  <hr />
                  </div>
                <form onSubmit={handleLogin} className=" w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">Email:</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Password:</span>
                        </label>
                        
                         <input type={showPassword? "text": "password"}
                          placeholder="password" 
                          name="password"
                         className="input input-bordered"
                         required />
                         <span onClick={() => setShowPassword(!showPassword)} 
                         className="absolute right-0 bottom-0 mb-4 mr-4 text-gray-600">
                           {
                            showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                           }
                         </span>
                        
                        
                    </div>
                     
                    <div className="form-control mt-6">
                         <button className="btn text-xl font-semibold bg-orange-600 text-white">
                            Login</button>
                    </div>
                </form>
                 <div className="lg:w-3/4 mx-auto text-center mt-5 text-xl font-semibold ">
                       
                      <p>Login With</p>
                      
                 </div>
                 <div className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto mt-6 md:flex gap-4">
                    <div className="bg-gray-50 rounded-xl flex-1 shadow-md text-center flex justify-center py-4 ">
        <button onClick={handleGoogleSignIn} className="flex justify-center gap-2  items-center">
                         <FcGoogle></FcGoogle>   Google</button>
                    </div>
                    <div className="bg-gray-50 rounded-xl flex-1 shadow-md text-center flex justify-center mt-4 md:mt-0 py-4"> 
                      <button onClick={handleGithubSignIn} className="flex justify-center gap-2  items-center">
                      <FaGithub></FaGithub>  github</button>
                    </div>
                 </div>
                <p className=" w-4/5 md:w-3/4 lg:w-3/4 mx-auto text-center mt-9 text-base font-semibold "> 
                Do not Have An Account ? Please <Link to="/register"
                 className="text-orange-600"> Register</Link></p>
            </div>

         </div>
    );
};

export default Login;

