import { hiringProcess, openPostions } from "../AccessData";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CareerPage = () => {
  return (
    <main>
      <Header />
      <section className="bg-[#8807F7] pt-[70px] pb-[90px] mb:py-[100px] lg:pt-[80px] lg:pb-[130px]">
        <div className="max-w-[1250px] px-4 mx-auto h-full">
          <div className="flex flex-col justify-center max-w-[1035px] mx-auto">
            <div className="bg-[#F59E0B] font-sans rounded-md text-white font-medium lg:text-[80px] text-[30px] md:text-[55px] w-full max-w-[841px] pt-[50px]">
              Join us in shaping...
            </div>
            <div className="bg-[#E8356D] rounded-md font-sans text-white font-medium lg:text-[80px] text-[30px] md:text-[55px] w-full max-w-[612px] self-end pt-[50px]">
              The Future..
            </div>

            <div className="mt-[-10px] bg-[#0D9488] self-start rounded-md text-white font-medium lg:text-[80px] text-[30px] md:text-[55px] w-full max-w-[613px] pt-[50px]">
              Of Finance...
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mt-[80px]">
          <h1 className="font-mono text-[#3d0072] mx-auto max-w-[1250px] text-[40px] pl-4  font-bold md:text-[50px] mb-[60px] lg:mb-[80px] lg:text-[60px] text-left">
            The Ardilla Culture
          </h1>

          <div className="grid  grid-cols-8 grid-rows-4 h-full sm:h-400px sm:grid-rows-2 gap-3">
            <div className="col-span-full row-start-1 row-end-2 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3 ">
              <img
                src="/anna.png"
                className="w-full rounded-lg object-cover h-full"
                alt=""
              />
            </div>
            <div className="col-span-full row-start-2 row-end-3 sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-2">
              <img
                src="/tarzine.png"
                className="w-full object-cover  rounded-lg h-full"
                alt=""
              />
            </div>

            <div className="col-span-full row-start-4 row-end-5 sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-3">
              <img
                src="/vierra.png"
                className="w-full rounded-lg object-cover h-full"
                alt=""
              />
            </div>

            <div className="col-span-full row-start-3 row-end-4 sm:col-start-6 sm:col-end-9 sm:row-start-1 sm:row-end-3">
              <img
                src="/cotton.png"
                className="w-full rounded-lg object-cover h-full"
                alt=""
              />
            </div>
          </div>

          <div className="flex mt-[60px] py-[40px]  max-w-[1250px] mx-auto px-4 justify-center lg:justify-between flex-wrap">
            <div className="max-w-[541px] mb-[40px]">
              <h1 className="text-[#3D0072] font-bold text-[30px] mb-[30px] ">
                Experienced professionals
              </h1>
              <p className="text-[#3d0072] text-sm mb-6 leading-8 ">
                Experienced financial analysts and coaches. Who have been vetted
                and have a wealth of experience. They will guide you through
                your wealth-building journey.
              </p>
              <p className="text-[#3d0072] text-sm leading-8">
                We have a great team of diverse and talented professionals who
                share the values of the company. Because of the size of our
                dream, we need more hands on deck and you are always welcome to
                apply.
              </p>
            </div>
            <div className="max-w-[541px]">
              <h1 className="text-[#413150] font-bold text-[30px] mb-[30px] ">
                We give the best
              </h1>
              <p className="text-[#3d0072] text-sm mb-6 leading-8">
                We know work can be quite dreadful, so we try to make it fun, as
                much as we can. We also offer competitive salaries as well as
                great packages.
              </p>
              <p className="text-[#3d0072] text-sm leading-8">
                At Ardilla, dedication and excellence are always rewarded. No
                politics and no funny business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] pt-[60px] pb-[40px]">
        <div className="max-w-[1250px] mx-auto px-4 ">
          <h1 className="text-[#3d0072] font-bold text-[45px]  md:text-[55px] lg:text-[60px] mb-8">
            Our Values
          </h1>
          <p className="text-[#3d0072] text-[15px] leading-[32px] font-normal max-w-[640px]">
            At Ardilla, our mission is to help people across the continent build
            wealth and achieve well thought out financial goals. However, we
            cannot do it alone.
          </p>
          <div className="flex mb-[40px] justify-center lg:justify-between flex-wrap gap-5 mt-8 ">
            <div className="bg-[url(/redBack.png)] max-w-[278px]  rounded-r-md rounded-bl-[80px] rounded-br-none h-[600px] bg-contain w-full ">
              <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px] ">
                  Excellence
                </h1>
                <p className="leading-8">
                  We always bring our A game to work, putting our best foot
                  forward.
                </p>
              </div>
            </div>
            <div className="bg-[url(/blueBack.png)]  rounded-r-md rounded-bl-[80px] rounded-br-none flex flex-col max-w-[278px] w-full bg-contain h-[657px]justify-center text-white">
              <div className="pb-[50px] lg:pt-[135px] flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px] ">
                  Dedication
                </h1>
                <p className="leading-8">
                  Consistency is the code to turning dreams to reality and at
                  Ardilla, we have a lot of dreams to transform.
                </p>
              </div>
            </div>
            <div className="bg-[url(/yellowBack.png)] bg-contain  rounded-r-md rounded-bl-[80px] rounded-br-none h-[657px] flex flex-col max-w-[278px] w-full justify-center text-white">
              <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white ">
                <h1 className="text-[3d0072] font-bold text-[30px] mb-[66px]">
                  Team Work
                </h1>
                <p className="leading-8">
                  No one ever built anything alone. Strength in numbers is all
                  good but more importantly is strength in working together.
                </p>
              </div>
            </div>
            <div className="bg-[url(/greenBack.png)]  rounded-r-md rounded-bl-[80px] rounded-br-none flex bg-contain flex-col max-w-[278px] h-[600px] w-full  text-white">
              <div className="flex flex-col  justify-center max-w-[204px] mt-[111px] mx-auto text-white">
                <h1 className="text-[3d0072] font-bold  text-[30px] mb-[66px] ">
                  Positivity
                </h1>
                <p className="leading-8">
                  Great attitude to work always wins and at Ardilla we are
                  always big on positivity and a can do mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[55px] pb-0">
        <div className="text-black px-4 mx-auto max-w-[1250px]">
          <h1 className="text-[#3D0072] font-semibold  text-[40px] md:text-[60px] mb-[80px] mb:mb-[100px] lg:mb-[120px]">
            People are what matters
          </h1>
          <div className="flex flex-wrap justify-between gap-8 md:grid md:grid-cols-2">
            <div className="flex gap-5 max-w-full lg:max-w-[600px] w-full flex-col lg:flex-row">
              <div className="bg-[url(/whatMatters.png)] lg:w-[281px] bg-center w-full h-[255px] bg-cover rounded-xl"></div>
              <p className="mt-10 lg:w-[273px] w-full text-[#9CA3Af] leading-8 ">
                Working with Ardilla has exposed me to innovative ideas and
                advanced technology.
              </p>
            </div>
            <div className="flex gap-5 max-w-full lg:max-w-[600px] w-full flex-col lg:flex-row">
              <div className="bg-[url(/whatMatters.png)] lg:w-[281px] bg-center w-full h-[255px] bg-cover rounded-xl"></div>
              <p className="mt-10 lg:w-[273px] w-full text-[#9CA3Af] leading-8 ">
                Ardilla places a premium on team work and collaboration which
                has helped me gain better insights and become better at my job
              </p>
            </div>
            <div className="flex gap-5 max-w-full lg:max-w-[600px] w-full flex-col lg:flex-row">
              <div className="bg-[url(/whatMatters.png)] lg:w-[281px] bg-center w-full h-[255px] bg-cover rounded-xl"></div>
              <p className="mt-10 lg:w-[273px] w-full text-[#9CA3Af] leading-8 ">
                At Ardilla, I get to work in an environment that is constantly
                pushing me to learn, develop, and be better.
              </p>
            </div>
            <div className="flex gap-5 max-w-full lg:max-w-[600px] w-full flex-col lg:flex-row">
              <div className="bg-[url(/whatMatters.png)] lg:w-[281px] w-full h-[255px] bg-cover bg-no-repeat bg-center rounded-xl"></div>
              <p className="mt-10 text-[#9CA3Af] lg:w-[273px] w-full leading-8">
                Although Ardilla is challenging, it is the type of challenge
                that gets you motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#21003D] relative px-4 ">
        <div className="max-w-[1250] mt-[153px] mx-auto relative">
          <div className="text-white max-w-[873px] text-center leading-[50px] md:leading-[80px]  mx-auto pt-[153px] text-[30px] md:text-[35px] lg:text-[40px] lg:mb-[25px]">
            Beyond a competitive salary, we offer so much more in support and
            necessary tools needed to get the best results.
          </div>
          <h1 className="font-bold text-center text-[30px] lg:text-[50px] skew-y-6 text-white">
            Perks
          </h1>

          <div className="lg:hidden pb-[70px] text-white mt-[50px]  gap-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            <div className="w-full text-white">
              <div className="w-[30px] h-[30px]">
                <img src="/vibe.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">It's a vibe</p>
              <p className="text-sm text-white leading-2">
                Our work culture is a vibe and more
              </p>
            </div>
            <div className="w-full">
              <div className="w-[30px] h-[30px]">
                <img src="/gadget.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">Cool gadget</p>
              <p className="text-sm text-white leading-2">
                You get to work with cool new gadgets
              </p>
            </div>
            <div className="w-full">
              <div className="w-[30px] h-[30px]">
                <img src="/health.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">
                Health benefits
              </p>
              <p className="text-sm text-white leading-2">
                We know health is important. So we provided easy access and
                affordable health benefits
              </p>
            </div>
            <div className="w-full">
              <div className="w-[30px] h-[30px]">
                <img src="/team.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">Team Bounding</p>
              <p className="text-sm text-white leading-2">
                We always make out time for fun and getting to know your team
                mates better.
              </p>
            </div>
            <div className="w-full">
              <div className="w-[30px] h-[30px]">
                <img src="/diversity.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">Diversity</p>
              <p className="text-sm text-white leading-2">
                We promote diversity of ideas and people. Anyone from anywhere
                is welcome.
              </p>
            </div>
            <div className=" w-full">
              <div className="w-[30px] h-[30px]">
                <img src="/education.png" className="w-full h-full" alt="" />
              </div>
              <p className="text-white text-xl font-bold my-3">
                Education and career progression
              </p>
              <p className="text-sm text-white leading-2">
                We offer you opportunity to grow and learn and advance in your
                career.
              </p>
            </div>
          </div>
          <svg
            className="max-w-[1450px] mx-auto hidden lg:block"
            viewBox="0 0 1342 569"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M102.77 43.8157L1.00621 761.621C-3.23492 791.536 19.8218 818.349 50.0349 818.637L1290.74 830.455C1321.03 830.743 1344.62 804.244 1340.82 774.191L1262.94 157.593C1260.04 134.586 1241.69 116.597 1218.63 114.14L157.571 1.11536C130.784 -1.73805 106.551 17.1435 102.77 43.8157Z"
              fill="#F6EBFE"
            />
            <foreignObject
              xmlns="http://www.w3.org/2000/svg"
              width={"100%"}
              height={"100%"}
              className="h-[900px]"
            >
              <div className=" px-[200px] mt-[200px] gap-10 left-3 grid grid-cols-2 lg:grid-cols-3 justify-center">
                <div className="w-full">
                  <div className="w-[30px] h-[30px]">
                    <img src="/vibe.png" className="w-full h-full" alt="" />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    It's a vibe
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    Our work culture is a vibe and more
                  </p>
                </div>
                <div className="w-full">
                  <div className="w-[30px] h-[30px]">
                    <img src="/gadget.png" className="w-full h-full" alt="" />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    Cool gadget
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    You get to work with cool new gadgets
                  </p>
                </div>
                <div className="w-full">
                  <div className="w-[30px] h-[30px]">
                    <img src="/health.png" className="w-full h-full" alt="" />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    Health benefits
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    We know health is important. So we provided easy access and
                    affordable health benefits
                  </p>
                </div>
                <div className="w-full">
                  <div className="w-[30px] h-[30px]">
                    <img src="/team.png" className="w-full h-full" alt="" />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    Team Bounding
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    We always make out time for fun and getting to know your
                    team mates better.
                  </p>
                </div>
                <div className="w-full">
                  <div className="w-[30px] h-[30px]">
                    <img
                      src="/diversity.png"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    Diversity
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    We promote diversity of ideas and people. Anyone from
                    anywhere is welcome.
                  </p>
                </div>
                <div className="max-w-[295px] w-full">
                  <div className="w-[30px] h-[30px]">
                    <img
                      src="/education.png"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <p className="text-[#3d0072] text-xl font-bold my-3">
                    Education and career progression
                  </p>
                  <p className="text-sm text-[#3d0072] leading-2">
                    We offer you opportunity to grow and learn and advance in
                    your career.
                  </p>
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </section>
      <section className="py-[80px] pb-[110px]">
        <div className="px-4 max-w-[1250px] mx-auto">
          <h1 className="text-brand-purple font-bold text-4xl lg:text-6xl  ">
            Open Positions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[30px] lg:gap-[80px] mt-[90px] ">
            {openPostions.map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} bg-cover flex flex-col gap-10 rounded-2xl bg-no-repeat p-12`}
              >
                <h1 className=" text-3xl font-bold">{item.position}</h1>
                <p className=" leading-8 text-sm">{item.desc}</p>
                <p className="font-bold">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f3f4f6]  pb-[140px]">
        <div className="max-w-[1250px] mx-auto px-4">
          <h1 className="font-bold py-[120px]  text-brand-purple text-3xl text-[40px] lg:text-[60px]">
            How We Hire
          </h1>
          <div className="grid lg:justify-center md:grid-cols-2 gap-[30px] lg:gap-[50px] lg:grid-cols-3">
            {hiringProcess.map((item, idx) => (
              <div
                className="flex w-full justify-between  flex-col gap-5"
                key={idx}
              >
                <div className="w-[28px] h-[28]">
                  <img
                    src={item.image}
                    className="w-full h-full"
                    alt={item.name}
                  />
                </div>
                <h1 className="text-brand-purple text-2xl font-bold ">
                  {item.name}
                </h1>
                <p className="text-brand-purple leading-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-3 lg:px-9">
        <div className="max-w-[1450px] flex flex-col md:flex-row mx-auto mt-[140px] pb-[303px]">
          <div>
            <img src="/dellon.png" alt="" className="object-contain" />
          </div>
          <div>
            <img src="/starnes.png" className=" object-contain" alt="" />
          </div>

          <div>
            <img src="/mizuno.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CareerPage;
