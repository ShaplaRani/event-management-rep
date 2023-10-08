import { BsCheckLg } from "react-icons/bs";
import social  from '../../assets/socialImage.jpg'
const Future = () => {
    return (
        <div className="lg:flex justify-center items-center">
            <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold mb-8">A partial list of our services includes:</h3>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Scouting a venue</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Developing a theme</p>

                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Coordinating paper goods with a stationery vendor</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Organizing a tasting with up to three caterers</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Recommending up to three florists (if necessary)</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Recommending up to three photographers (if necessary)</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Managing your guest list</p>
                <p className="flex items-center gap-2 text-xl text-gray-500 font-semibold">
                    <BsCheckLg className="text-orange-500 text-xl font-bold"></BsCheckLg>
                    Assisting with rentals</p>
                


              </div>
            <div className="flex-1">
                 <img src={social} alt="" />
            </div>
        </div>
    );
};

export default Future;