import property1 from "../assets/property1.png";
import property2 from "../assets/property2.png";
import property3 from "../assets/property3.png";
import property4 from "../assets/property4.png";
import property5 from "../assets/property5.png";

function Products() {
  return (
    <section className="bg-[#240053] " id="products">
      <div className="bg-[#FFFDF2] rounded-t-[18px] md:rounded-t-[24px] lg:rouned-t-[32px] py-[50px] md:py-[70px] lg:py-[90px]">
        <div className=" mx-auto px-4 max-w-[1250px]">
          <div className="">
            <h2 className="mb-[30px] font-extrabold text-[#3d0072] text-[35px] sm:text-[50px] md:text-[60px] lg:text-[80px]">
              Products
            </h2>
            <div className="overflow-x-scroll pb-8 scrollbar-thin scrollbar-thumb-[#8807f7] scrollbar-track-gray-200">
              <div className="mx-auto">
                <div className="flex mx-auto max-w-[1000px] space-x-6">
                  <img src={property1} alt="property 1" className="w-full" />
                  <img src={property2} alt="property 2" className="w-full" />
                  <img src={property3} alt="property 3" className="w-full" />
                  <img src={property4} alt="property 4" className="w-full" />
                  <img src={property5} alt="property 5" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
