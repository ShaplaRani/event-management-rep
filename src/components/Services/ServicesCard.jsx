
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ServicesCard = ({service}) => {
    const {id, name,image,price,description} = service
    console.log('one', service);
    return (
    <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className='h-80 w-full'
      src={image}

      alt="ui/ux review check"  data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    />
  </div>
  <div className="p-6 ">
    <h4 className="block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
       {name}
    </h4>
    <h4 className="block mt-4  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Price: {price}
    </h4>
     <div className=''>
        {
             description.length > 160 ?<p className="mt-3 block  text-lg font-normal  text-gray-700 antialiased">
                {description.slice(0,160)}..... 
             </p>:
              <p>{description}</p>
        }
     </div>
      <div className='mt-9'>

        <Link to={`/service/${id}`}> <button className='bg-orange-500 text-white w-full py-2
         rounded-lg '>Details </button></Link>
      </div>
  </div>
 
    </div>
    );
};
ServicesCard.propTypes ={
    service:PropTypes.object
}
export default ServicesCard;