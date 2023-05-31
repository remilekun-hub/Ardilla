import frame from "../assets/Frame 2834.png";
import { useNavigate } from "react-router-dom";
function Investment() {
  const navigate = useNavigate();
  return (
    <section
      id="business"
      className="py-[80px] lg:py-[120px] bg-[#FFFDF2] investment__section"
    >
      <div className="mx-auto max-w-[1250px] px-4">
        <h1 className=" mb-2 md:mb-3 lg:mb-4 text-[#0d9488] font-extrabold text-[40px] md:text-[60px] lg:text-[80px] lg:leading-[100px]">
          <span className="text-[#3d0072]">Unlimited</span> Investment <br />{" "}
          Opportunities{" "}
        </h1>
        <p className="text-[16px] lg:text-[22px] max-w-[700px] text-[#3d0072] lg:font-medium lg:leading-[45px]">
          Plan towards your future by investing with ardilla, Grow your money
          confidently and securely with the available investment oppurtuinities
        </p>
        <button
          onClick={() => navigate("/career-page")}
          className="group  hover:bg-[#8807F7] transititon duration-300 hover:text-white mt-[24px] flex rounded-full items-center lg:mt-[30px] py-[15px] px-[20px] text-[15px] border-[1px] border-[#8807f7] text-[#8807f7]"
        >
          <span>Invest with ardilla (Coming Soon)</span>{" "}
          <span className="ml-3">
            <img src={frame} alt="frame" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Investment;
