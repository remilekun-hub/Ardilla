import Access from "../components/Access";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Investment from "../components/Investment";
import Keen from "../components/Keen";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import zikoko from "../assets/zikoko (1).png";
import guardian from "../assets/guardian.png";
import tech from "../assets/tech crunch.png";
import Footer from "../components/Footer";
import frame2 from "../assets/Frame.png";
const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Keen />
      <Investment />
      <Access />
      <Testimonials />

      <section className="bg-[#F8FAFC] pt-[90px] py-[90px]">
        <div className="max-w-[1250px] mx-auto px-16">
          <div className="pb-[50px] lg:pb-[70px] mx-auto max-w-[600px] items-center flex flex-col gap-[30px] md:flex-row md:flex-wrap md:justify-center md:gap-[50px]">
            <img src={zikoko} alt="zikoko" className="w-[100px]" />
            <img src={tech} alt="tech crunch" className="w-[100px]" />
            <img src={guardian} alt="the guardian" className="w-[100px]" />
            <div className="lg:divide">
              <p className="text-33px font-extrabold text-[#3d0072]">
                Press Review
              </p>
            </div>
          </div>
        </div>
        <div className="available max-w-[966px] pt-[70px] rounded-[20px] mx-auto bg-[#F3F4F6]">
          <div className="">
            <h1 className="text-[#3D0072] font-bold lg:font-extrabold mb-4 lg:mb-5 mx-auto max-w-[500px] text-center text-[40px] md:text[55px] lg:text-[40px]">
              Also Available on the Web
            </h1>
            <p className="max-w-[450px] text-[#3D0072] mx-auto text-center mb-4 md:mb-9 font-medium">
              Increase your bread & butter on the app or on the web.The Ardilla
              app services are also available on the web.
            </p>
          </div>
          <div className="mx-auto max-w-[550px]">
            <img src={frame2} alt="frame" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-[#1B0132] pt-[80px] pb-[450px]">
        <div className="mx-auto max-w-[1250px] text-white px-4 effect">
          <div className="text-white text-center mb-7 md:mb-[80px] lg:mb-[100px]">
            <h1 className="text-[50px] mb-4 lg:text-[80px] font-medium lg:font-extrabold">
              Traction
            </h1>
            <p>Our products and investments grossed 1.1 billion in 2022</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
            <div className="h-full flex items-center justify-center text-center rounded-t-[70px] bg-[#D2FFDE] text-white rounded-bl-[70px] p-8">
              <div>
                <p className="text-left text-[#2a332c] text-[18px] font-medium">
                  Investment in{" "}
                  <span className="p-2 pl-2 pr-5 ml-2 bg-[#33593D] rounded-[2px] text-white">
                    2022
                  </span>
                </p>
                <h1 className="text-[50px] text-[#2a332c] font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 100 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 200 M
                </h1>

                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 300 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 900 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 1.1 B
                </h1>
              </div>
            </div>

            <div className="h-full flex items-center justify-center text-center rounded-t-[70px] bg-[#C8C1FD] text-white rounded-br-[70px] p-8">
              <div className="">
                <p className=" text-[#282733] text-left text-[18px] font-medium">
                  Risk
                  <span className="p-2  ml-2 bg-[#35298A] rounded-[2px] text-white pl-2 pr-5">
                    Management
                  </span>
                </p>
                <h1 className="text-[50px] text-[#2a332c] lg:text-[75px] lg:font-extrabold font-bold">
                  0% Risk
                </h1>
              </div>
            </div>

            <div className="h-full flex items-center justify-center text-center rounded-t-[70px] bg-[#FAF7C3] text-white rounded-bl-[70px] p-8">
              <div>
                <p className=" text-[#2a332c] text-[18px] font-medium">
                  Investment{" "}
                  <span className="p-2 pl-2 pr-5 ml-2 bg-[#9F9704] rounded-[2px] text-white">
                    Paid Back
                  </span>
                </p>
                <h1 className="text-[50px] text-[#2a332c] font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 100 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 200 M
                </h1>

                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 300 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 900 M
                </h1>
                <h1 className="text-[50px] text-[#2a332c] mb-2 font-bold lg:text-[75px] lg:font-extrabold">
                  ₦ 1.1 B
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
