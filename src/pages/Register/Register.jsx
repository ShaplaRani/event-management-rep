import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
    // const [registerSuccess , setRegisterSuccess] = useState('');
    // const [registerError,setRegisterError] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    
    const {createUser,logout} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get ('password');
        const accepted= e.target.terms.checked
        console.log(name,photo,email,password,accepted);
       
        if(password.length < 6){
            
            swal('password should be a least 6 characters or larger')
            return;
        }
        if(!/[A-Z]/.test(password)){
            
            swal('Your password should have at least one capital letter')
            return;
        }
        if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            
            swal('Your password should have at least one special character')
            return;
        }
        if(!accepted){
            swal('Please accept our terms and condition')
            return;
        }
        //create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            //logout 
            logout()
            .then()
            .catch(error => console.error(error))
            // update profile
            updateProfile(result.user,{
              displayName:name,
              photoURL:photo  
            })
            .then(() => {console.log("profile update")})
            .catch( error => console.error(error))
            swal('User Created Successfully')
        })
        .catch(error => {
            console.error(error)
            
            swal(error.message)
        })
    }
    return (
        <div className="">
            <div className="w-5/6 lg:w-2/5 bg-white rounded-lg shadow-md py-20 m-auto mt-24 mb-40">
                <h3 className="text-2xl md:text-3xl  text-center font-medium md:font-semibold text-gray-800 "> Register your account</h3>
                  <div className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto my-12">
                  <hr />
                  </div>
                <form onSubmit={handleRegister} className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mb-1 ">Your Name:</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name"
                         className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Photo URL:</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Email:</span>
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
                     <div className="mt-5 text-base  font-normal text-gray-600">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2 " htmlFor="terms"> <a href="">Accept Term & Conditions</a></label>
                     </div>
                    <div className="form-control mt-6">
                        <button className="btn text-xl font-semibold bg-orange-600 text-white">Register</button>
                    </div>
                </form>
                <p className=" w-4/5 md:w-3/4 lg:w-3/4 m-auto
                 text-center my-7 text-base font-semibold "> Already have an account ? Please <Link to="/login"
                 className="text-orange-600"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;