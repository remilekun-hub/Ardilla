import play from "../assets/play.png";
import pexel1 from "../assets/pexel 1.jpg";
import pexel2 from "../assets/pexel 2.jpg";
import pexel3 from "../assets/pexel 3.jpg";

function Testimonials() {
  const people = [
    {
      id: 1,
      name: "MD - Miss Oyinye Dallas",
      subtitle: "What is Ardila and it benefits?",
      image: pexel1,
    },
    {
      id: 2,
      name: "MD - Miss Oyinye Dallas",
      subtitle: "What is Ardila and it benefits?",
      image: pexel2,
    },
    {
      id: 3,
      name: "MD - Miss Oyinye Dallas",
      subtitle: "What is Ardila and it benefits?",
      image: pexel3,
    },
  ];
  return (
    <section className="py-[75px] bg-[#F3F4F6]">
      <div className="testimonials__container mx-auto max-w-[1250px] px-4">
        <h1 className="text-[#3d0072] text-[45px] md:text-[60px] font-bold lg:font-extrabold lg:text-[75px]">
          Don’t Take Our <span className="text-[#E8356D]">Word</span> For It{" "}
        </h1>
        <p className=" text-[#3d0072] text-[16px] mt-[10px] font-medium">
          Listen to testimonials from Ardilla users building wealth{" "}
        </p>
        <div className="pt-[65px] pb-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
            {people.map((person) => (
              <div
                key={person.id}
                className={`lg:hover:scale-[1.15] overflow-hidden group relative rounded-[15px] cursor-pointer duration-500 `}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full object-cover object-center rounded-[15px] overflow-hidden"
                />
                <div className="absolute w-full flex justify-center items-center h-full inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500">
                  <img src={play} alt="playbtn" />
                </div>
                <div className="absolute bottom-6 left-8 text-white translate-y-[100px] duration-500 group-hover:translate-y-[-5px]">
                  <p className="text-[21.4px]">{person.name}</p>
                  <p className="text-[12.8px]">{person.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* {people.map((person) => (
            <div
              key={person.id}
              className=" inline-block group relative w-full cursor-pointer rounded-[15px] overflow-hidden group transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full object-cover h-full"
              />
              <div className="transition absolute h-full w-full inset-0 bg-black/10 opacity-0 group-hover:opacity-100">
                <div className="transition delay-1000 duration-300 flex w-full h-full justify-center items-center ">
                  <img src={play} alt="play btn" />
                </div>
                <div className="delay-500 absolute left-8 bottom-8 text-white bottom-0 translate-y-[20%]">
                  <p className="mb-1 font-bold">{person.name}</p>
                  <p className="text-12px">{person.subtitle}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
