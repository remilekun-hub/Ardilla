import send from "../assets/send-2.png";
import { accessData } from "../AccessData";

function Access() {
  return (
    <section id="learn" className="bg-[#1B0132] pt-[80px] overflow-hidden">
      <div className="mx-auto max-w-[1250px] px-4 ">
        <div className="max-w-[1093px]">
          <h1 className="text-[40px] mb-2 md:text-[50px] lg:text-[80px] text-white lg:leading-[100px] font-semibold lg:font-extrabold">
            Access More With Your Money
          </h1>
          <p className="access__subtitle max-w-[836px]  lg:font-medium text-[16px] text-white">
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>
          <button className=" duration-300 hover:bg-[#29014b] px-[22px] py-[15px] mt-[30px] flex justify-center items-center border-[1px] border-white transition gap-[18px] rounded-full text-white">
            <span>Learn more about savings </span>
            <span className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-white trasition">
              <img src={send} alt="send" />
            </span>
          </button>
        </div>
        <div className="access__bottom mt-[100px] mx-auto rouned-[4px] border-[2px] border-[#240053] bg-[#29014b]">
          <div className=" max-w-[900px] pt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:gap-[90px] pb-[50px] mx-auto gap-y-[70px]">
            {accessData.map((d) => (
              <div
                className="access__card p-[24px] mx-auto md:w-[360px] text-left rounded-[24px] text-white cursor-pointer transition hover:bg-[#3d0072]"
                key={d.name}
              >
                <div>
                  <img
                    src={d.image}
                    alt={d.name}
                    className="ml-[-60px]  object-cover"
                  />
                </div>

                <h3 className=" font-bold mb-[20px] text-[26px] mt-[-15px] ">
                  {d.name}
                </h3>
                <p className=" mb-[29px] font-normal">{d.text}</p>
                <p>Learn More</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Access;
