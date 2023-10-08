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
            <h3 className="text-center">Our Services</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                 {
                    services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard> )
                 }
             </div>
        </div>
    );
};

export default Services;