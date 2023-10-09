import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";

import PropTypes from 'prop-types';

const Member = ({ member }) => {
    const { image, name, title } = member;
    return (
        <div data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <img className="w-50 h-50 rounded-full m-auto " src={image} alt="" />
            <h3 className="text-2xl font-bold mt-7 mb-2">{name}</h3>
            <p className="text-base font-medium mb-2">{title}</p>
            <div className="flex gap-4 justify-center">
                <div className="w-7 h-7 items-center rounded-full flex justify-center bg-orange-400">
                    <a className="" href=""><BiLogoFacebook className="text-white text-xl"></BiLogoFacebook></a>
                </div>
                <div className="w-7 h-7 items-center rounded-full flex justify-center bg-orange-400">
                    <a href=""><AiOutlineTwitter className="text-xl"></AiOutlineTwitter></a>
                </div>
                <div className="w-7 h-7 items-center rounded-full flex justify-center bg-orange-400">
                    <a href=""><BiLogoLinkedin></BiLogoLinkedin></a>
                </div>
            </div>
        </div>
    );
};
Member.propTypes = {
    member: PropTypes.object
}
export default Member;