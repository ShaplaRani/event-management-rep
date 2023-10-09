import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData()
    const {id} = useParams();
    
    const service = services.find(service => service.id == id)
    console.log('details data',service,id);
    const {image, description,name} = service;
    return (
        <div className="w-10/12 m-auto p-3 md:p-7  shadow-lg rounded-xl my-20">
            <div>
                 <div className="relative">
                    <img className="rounded-lg h-[70vh] w-full" src={image} alt="" />
                    <div style={{backgroundColor:"rgba(11, 11, 11, 0.50)"}} className=" p-10 absolute w-full bottom-0" >
                        <button className="btn btn-primary ">Booked</button>
                    </div>

                 </div>
                <h3 className="mt-5 mb-2 text-2xl font-bold ">{name}</h3>
                 <p className="text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;