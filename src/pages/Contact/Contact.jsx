
import { BiMap } from 'react-icons/bi';
import { RiEditBoxLine } from 'react-icons/ri';
import {BsTelephone,BsClock } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className="w-10/12 m-auto my-20">
            <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <div className='lg:flex gap-7'>
            
            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="border p-5 ">
                <p className="text-center flex justify-center text-5xl"> <BiMap></BiMap></p>
                <div className='mt-3 text-center'>
                    <h3 className="text-xl font-medium">Postal Address</h3>
                    <p className="text-base mt-2 font-normal">Unica Event Agency 85 Fentiman Ave Ottawa, ON K1S 0T7</p>
                </div>
            </div>
            {/*  2*/}
            <div className="border p-5 ">
                <p className="text-center flex justify-center text-5xl"> <BsClock></BsClock></p>
                <div className='mt-3 text-center'>
                    <h3 className="text-xl font-medium">Open Hours</h3>
                    <p className="text-base mt-2 font-normal">Monday – Friday 8.00 am – 5.00 pm, Weekend Closed</p>
                </div>
            </div>
            {/* 3 */}
            <div className="border p-5 ">
                <p className="text-center flex justify-center text-5xl"> <BsTelephone></BsTelephone></p>
                <div className='mt-3 text-center'>
                    <h3 className="text-xl font-medium">Phone & E-mail</h3>
                   


                    <p className="text-base mt-2 font-normal"> Phone: 1-800-64-38</p>
                    <p className="text-base mt-2 font-normal"> Fax: 1-800-64-39</p>
                    <p className="text-base mt-2 font-normal"> E-mail: info@ancorathemes.com</p>
                </div>
            </div>
            {/* 4 */}
            <div className="border p-5 ">
                <p className="text-center flex justify-center text-5xl"> <RiEditBoxLine></RiEditBoxLine></p>
                <div className='mt-3 text-center'>
                    <h3 className="text-xl font-medium">Sessions</h3>
                    <p className="text-base mt-2 font-normal">
                    Mornings: 8 am to 12 am, Afternoons: 1 pm – 5 pm, Full Day: 8 am – 5 pm</p>
                </div>
            </div>
            </div>
             {/* second part */}
              <div className='flex-1 mt-10 md:mt-0'>
              <form  className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl 
                            font-semibold text-gray-800 mb-1 ">Full Name:</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name"
                         className="input input-bordered"
                         required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Email:</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold
                             text-gray-800 mb-1 ">Message:</span>
                        </label>
                       
                         <textarea className="input input-bordered h-20" name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                    </div>

                    
                    
                    <div className="form-control mt-6">
                        <button className="btn text-xl font-semibold bg-orange-600 text-white">Send</button>
                    </div>
                </form>

              </div>
        </div>
        </div>
    );
};

export default Contact;