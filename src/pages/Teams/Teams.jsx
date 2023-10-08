import { useLoaderData } from "react-router-dom";
import Member from "../../components/Team/Member";



const Teams = () => {
    const teams = useLoaderData()
    console.log(teams);
    return (
        <div className="hero w-10/12 m-auto my-20 "
         style={{backgroundImage:
          'url(https://i.ibb.co/drXVLpN/social-event.jpg)'}}>
       <div className="hero-overlay bg-opacity-60"></div>
   <div className="py-20 text-center text-neutral-content">
    <div className="max-w-md m-auto">
      <h1 className="mb-14 text-3xl md:text-5xl font-bold">Meet Our Team</h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in.
       Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
        aut repudiandae et a id nisi.</p> */}
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {
        teams?.map(member => <Member key={member.id} member={member}></Member>)
    }
    </div>
  </div>
</div>
    );
};

export default Teams;