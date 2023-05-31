import phone from "../assets/phone.png";
function Hero() {
  return (
    <section className="bg-[#240053]">
      <div className="max-w-[1002px] mx-auto relative h-screen overflow-y-hidden">
        <div className="pt-[40px] h-full flex justify-center text-center md:pt-[50px] lg:pt-[60px]">
          <div className="bg__image w-[900px] px-4 relative ">
            <h1 className="hero__title text-[50px] mb-[10px] md:text-[65px] lg:text-[90px] font-extrabold">
              Your Access To More
            </h1>
            <p className="max-w-[500px] lg:max-w-[700px] mx-auto text-[15px] text-white">
              Ardilla helps you save and invest in achieving your financial
              goals, we have the most flexible and seamless way to grow your
              funds
            </p>

            <button className="z-[10] transition duration-300 hover:bg-[#8807F7] hover:text-white mt-[17px] bg-white font-semibold rounded-full text-[#3d0072] h-[53px] w-[169px]">
              Get Started
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 md:translate-y-[50px] md:left-[50%] md:w-[700px] md:translate-x-[-50%] lg:w-[900px]">
          <img src={phone} alt="group" className="mx-auto w-[100%]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
