

const Skills = () => {
    return (
        <div className="my-20 mb-28">
            <div  data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000">
            <h2 className="text-center text-2xl font-bold mb-4">Our Skills</h2>
              <div className="max-w-3xl m-auto text-center mb-16 text-base font-normal">
                  <p>We take pride in our extensive skill set that ensures your special occasions are nothing short of spectacular. Our team of dedicated professionals possesses a diverse range of talents and expertise to make your events truly memorable</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20"data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                {/* 1 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">Weddings</p>
                    <span className="text-xl font-semibold">72%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="72" max="100"></progress>
                </div>
                 {/* 2 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600">Birthday Parties</p>
                    <span className="text-xl font-semibold">95%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                </div>
                 {/* 3 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600">Anniversaries Parties</p>
                    <span className="text-xl font-semibold">80%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                </div>
                 {/* 4 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">Engagement Parties</p>
                    <span className="text-xl font-semibold">90%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="90" max="100"></progress>
                </div>
                 {/* 5 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">Retirement Parties</p>
                    <span className="text-xl font-semibold">65%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="65" max="100"></progress>
                </div>
                {/* 6 */}
                <div>
                     
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600"> Baby shower</p>
                    <span className="text-xl font-semibold">60%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;