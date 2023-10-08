

const Skills = () => {
    return (
        <div className="my-8">
            <h2 className="text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                {/* 1 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">PHP</p>
                    <span className="text-xl font-semibold">50%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                </div>
                 {/* 2 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600">javascript</p>
                    <span className="text-xl font-semibold">80%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                </div>
                 {/* 3 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600">HTML/CSS</p>
                    <span className="text-xl font-semibold">90%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="90" max="100"></progress>
                </div>
                 {/* 4 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">Tailwind CSS</p>
                    <span className="text-xl font-semibold">95%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                </div>
                 {/* 5 */}
                <div>
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-orange-600">Firebase</p>
                    <span className="text-xl font-semibold">40%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="40" max="100"></progress>
                </div>
                {/* 6 */}
                <div>
                     
                 <div className="flex justify-between">
                    <p className="text-xl font-semibold text-blue-600">React Router</p>
                    <span className="text-xl font-semibold">80%</span>
                 </div>
                <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;