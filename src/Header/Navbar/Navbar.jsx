import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import logo from "../../assets/logo.PNG"
import swal from 'sweetalert';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
  
    const navLinks = <>
        
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold">Home</li>
        </NavLink>

        <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold">Register</li>
            
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold">Contact Us</li>
            
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-700 underline" : ""
            }
        >   <li className="text-lg md:text-xl font-semibold"> About Us</li>
           
        </NavLink>
        
    </>
    const handleSignOut =() => {
        logout()
        .then(result => {
            
            swal('Sign Out Successful')
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
            // swal(error.message)
        })
    }
    return (
        <div className=" w-10/12 m-auto  lg:flex  text-center   bg-base-100 mt-12 items-center justify-between">

           
                {/* <img className="h-10 w-20 text-xl" src={logo} alt="gfdlvgfog" /> */}
                <a className="btn btn-ghost normal-case text-xl">social Events</a>
                    <ul className=" flex gap-3 md:gap-5 justify-center mt-1 mb-2 ">
           
                        {navLinks}
        
                    </ul>
                
               
         
            
            <div className="">
                {
                   user? <div className="flex justify-center items-center">
                      <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                      <p className="text-lg font-medium mr-3">{user.displayName}</p>
                      <button onClick={handleSignOut} className="btn bg-orange-700 text-base text-white">Sign Out</button>
                   </div>:
                    <Link to ="/login"> <button className="btn bg-orange-700 text-base text-white">Login</button></Link>
                }
               
                
            </div>
        </div>
        // <div className=" w-10/12 m-auto navbar bg-base-100 mt-12">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
        //                 {navLinks}
        
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl">social Events</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className=" flex gap-5 menu mr-3 menu-horizontal px-1">
        //         {navLinks}
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         {
        //            user? <>
        //               <p className="text-base font-medium mr-2">{user.displayName}</p>
        //               <button onClick={handleSignOut} className="btn bg-orange-700 text-base text-white">Sign Out</button>
        //            </>:
        //             <Link to ="/login"> <button className="btn bg-orange-700 text-base text-white">Login</button></Link>
        //         }
               
                
        //     </div>
        // </div>
    );
};

export default Navbar;