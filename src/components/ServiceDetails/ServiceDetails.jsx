import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData()
    const {id} = useParams();
    
    const service = services.find(service => service.id == id)
    console.log('details data',service,id);
    const {image, description,name} = service;
    return (
        <div className="w-10/12 m-auto p-7 border shadow-orange-50 rounded-xl my-20">
            <div>
                <img className="rounded-lg h-[70vh] w-full" src={image} alt="" />
                <h3 className="mt-5 mb-2 text-2xl font-bold ">{name}</h3>
                 <p className="text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;