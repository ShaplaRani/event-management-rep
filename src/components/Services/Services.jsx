import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then( res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div>
             <div  data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
             <h3 className="text-center text-2xl font-bold mb-2">Our Services</h3>
              <p className="max-w-3xl m-auto text-center mb-16 text-base font-normal">We specialize in turning ordinary moments into extraordinary memories. Our dedicated team offers a wide range of services to cater to your every event need.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                 {
                    services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard> )
                 }
             </div>
        </div>
    );
};

export default Services;