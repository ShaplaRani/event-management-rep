import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    const navLinks = <>
        
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Register
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
        <div className=" w-10/12 m-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">social Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                   user? <>
                      <p>{user.displayName}</p>
                      <button onClick={handleSignOut} className="btn">Sign Out</button>
                   </>:
                    <Link to ="/login"> <button className="btn">Login</button></Link>
                }
               
                
            </div>
        </div>
    );
};

export default Navbar;