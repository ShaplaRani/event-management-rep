import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
    return (
        <div className=" bg-yellow-100 py-24 ">
            <div className="w-10/12 lg:px-7 mx-auto flex justify-between" >
                <p className="uppercase font-bold text-2xl text-orange-500">The site of our campaigns</p>
                <div className="flex gap-4">
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a className="" href=""><BiLogoFacebook className="text-blue-500"></BiLogoFacebook></a>
                    </div>
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a href=""><FaGithub className="bg-white"></FaGithub></a>
                    </div>
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a href=""><FcGoogle></FcGoogle></a>
                    </div>



                </div>

            </div>
            <footer className=" footer grid justify-between text-black w-10/12 
             mx-auto  border p-10 ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div className="space-y-2">
                    <h3 className="uppercase font-bold text-xl text-orange-500">subscribe now</h3>
                    <div className="form-control">
                       
                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                            required />
                        <input type="submit" value="SEND" className="input text-white input-bordered mt-2 bg-slate-800" />  
                    </div>
                    

                </div>
            </footer>
        </div>
    );
};

export default Footer;