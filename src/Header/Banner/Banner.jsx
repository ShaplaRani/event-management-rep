

const Banner = () => {
    return (
        <div className="">
            <div className="hero h-[80vh] mt-12 mb-24 w-full rounded-lg"
       style={{backgroundImage: 'url(https://i.ibb.co/0XgRGfN/prepared-wedding-hall.jpg)'}}>
     <div className="hero-overlay bg-opacity-60"></div>
    <div className=" text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-orange-600"data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">Welcome </h1>
      <h1 className="mb-10 text-5xl font-bold" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Out Social Event Service</h1>
      <p className="mb-5 max-w-2xl text-lg" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">Weddings, Birthday Parties, Anniversaries,Engagement Parties, 
      Retirement Parties and Baby shower celibate it in our  busy city is not so easy and it takes Skills(and time)
       to make if all look easy-going
      </p>

    </div>
      </div>
    </div>
            
        </div>
    );
};

export default Banner;