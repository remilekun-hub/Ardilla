import interest from "../assets/interest.png";
import { Link } from "react-router-dom";

function Keen() {
  return (
    <div className="bg-white py-[80px]">
      <div className="px-4 mx-auto max-w-[1250px] grid grid-cols-1 gap-y-[50px] lg:grid-cols-2 md:gap-x-[20px] lg:gap-y-0">
        <div className="flex flex-col gap-[20px] md:gap-[10px]">
          <h1 className="leading-[80px] text-[#3D0072] text-[35px] sm:text-[55px] md:text-[60px] lg:text-[80px] lg:font-extrabold font-bold lg:basis-[50%]">
            We’re Keen On <span className="text-[#e8356d]">Transparency</span>
          </h1>
          <p className="font-medium text-[16px] lg:text-[18px] text-[#3D0072]">
            {" "}
            Calculate your interests everytime you save on our platform
          </p>
          <Link
            to="/interest-calculator"
            className="hover:bg-[#6005AE] transition duration-300
            mt-[20px] rounded-full bg-[#8807f7] w-[172px] text-center text-white flex items-center justify-center
            h-[56px]"
          >
            Get Started
          </Link>
        </div>
        <div className="w-full lg:basis-[50%]">
          <img
            src={interest}
            alt="interest"
            className="object-cover w-full rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Keen;
