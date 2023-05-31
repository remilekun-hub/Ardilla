import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqs = [
  {
    id: 1,
    question: "What are your interest rates?",
  },
  {
    id: 2,
    question: "What happens to my interest when i switch to Halal?",
  },
  {
    id: 3,
    question: "What is the minimum interest rate I am entitled to?",
  },
  {
    id: 4,
    question: "What is Ardilla",
  },
];
const InterestCalculator = () => {
  const [savingInput, setSavingsInput] = useState("2,000");
  const [lengthOfSaving, setLengthOfSaving] = useState("3");
  const handleSavingAmount = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");

    // Add a comma after every 3 digits
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setSavingsInput(formattedValue);
  };
  const handleSaveLength = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\D/g, "");
    setLengthOfSaving(value);
  };

  return (
    <main>
      <Header />
      <section className="bg-[#10001F] w-full">
        <div className="max-w-[1250px] mx-auto px-4 flex-col lg:flex-row flex justify-center gap-16 pt-[70px]">
          <div className="text-white lg:basis-[50%] w-full">
            <h1 className="font-bold text-[45px]">Calculate Your Interest</h1>
            <form className="flex flex-col gap-10 mt-10">
              <label className="flex flex-col text-base font-medium text-[#9CA3AF] gap-4">
                How often are you saving?
                <select
                  name=""
                  id=""
                  className="cursor-pointer border-white border text-sm pl-8 rounded-lg py-6 font-medium px-7 bg-transparent"
                >
                  <option className="">Monthly</option>
                  <option className="">Weekly</option>
                  <option className="">Yearly</option>
                </select>
              </label>
              <label className="flex flex-col text-base font-medium text-[#9CA3AF] gap-4">
                How much are you saving?
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-white text-3xl bg-transparent border-b-2 border-b-white outline-none"
                  value={savingInput}
                  onChange={handleSavingAmount}
                />
              </label>
              <label className="flex flex-col text-base font-medium text-[#9CA3AF] border-solid gap-4">
                How long are you saving for? (in months)
                <input
                  className="text-white text-3xl bg-transparent border-b-2 border-b-white outline-none"
                  type="text"
                  name=""
                  id=""
                  value={lengthOfSaving}
                  onChange={handleSaveLength}
                />
              </label>
            </form>
          </div>
          <div className="bg-[#F3F4F6] rounded-2xl max-w-full lg:basis-[50%] w-full rounded-br-none rounded-bl-none mt-14 min-h-[651px] py-12 pl-[30px] lg:pl-[77px] pr-[67px]">
            <div className="flex flex-col gap-7">
              <div className="">
                <p className="text-[#9ca3af] text-xs font-medium">
                  Total Balance
                </p>
                <p className="text-[#3D0072] text-2xl font-bold font-mono">
                  {Number(savingInput.replace(/,/g, "")) *
                    Number(lengthOfSaving) +
                    Number(savingInput.replace(/,/g, "")) *
                      0.02 *
                      Number(lengthOfSaving)}
                </p>
              </div>
              <p className="text-base text-[#6b7280]">
                Saving <span className="font-bold">₦{savingInput}</span> monthly
                for {lengthOfSaving} months will result in a balance of{" "}
                <span className="font-bold">
                  ₦
                  {Number(savingInput.replace(/,/g, "")) *
                    Number(lengthOfSaving) +
                    Number(savingInput.replace(/,/g, "")) *
                      0.02 *
                      Number(lengthOfSaving)}
                </span>{" "}
              </p>
              <div>
                <p className="text-[#9ca3af] text-xs font-medium">Interest</p>
                <div>
                  <span className="text-[#3D0072] font-mono text-2xl font-bold">
                    {Math.floor(
                      Number(savingInput.replace(/,/g, "")) *
                        0.02 *
                        Number(lengthOfSaving)
                    )}
                  </span>
                  <span className="font-medium text-[#3D0072] text-2xl">
                    (2%)
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[#9ca3af] text-xs font-medium">
                  Total Savings
                </p>
                <div>
                  <span className="text-[#3D0072] font-mono text-2xl font-bold">
                    N
                    {Number(lengthOfSaving) *
                      Number(Number(savingInput.replace(/,/g, "")))}
                  </span>
                  <span className="font-medium text-[#3D0072] text-2xl">
                    (2%)
                  </span>
                </div>
                <img src="/graph.png" alt="graph" />
              </div>
            </div>
            <button className="mt-[73px] rounded-[100px] bg-[#8807f7] py-3 px-6 text-white text-sm font-medium">
              Start Saving Now
            </button>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[80px]">
        <div className=" max-w-[1250px] px-4 w-full  flex mx-auto flex-col">
          <h1 className="mb-12 lg:mb-28 text-[#3d0072] text-4xl lg:text-6xl font-bold">
            Interest you can count on
          </h1>
          <div className="flex gap-20 flex-col md:flex-row">
            <div className="flex gap-6">
              <div className=" h-[320px] flex flex-col items-center">
                <div className="w-[20px] h-[20px]">
                  <img src="/ellipse.png" alt="" className="w-full h-full" />
                </div>
                <div className="w-[3px] h-[200px]">
                  <img src="/rec.png" alt="" className="w-full h-full" />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img src="/ellipse.png" alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="text-[#3d0072] flex flex-col gap-28 ">
                <div className="max-w-[429px]">
                  <h2 className="font-bold text-xl mb-5">More Interest</h2>
                  <p className="font-normal text-sm  leading-[30px]">
                    Enjoy better interest rates than the average bank account
                    when you save with any of the Ardilla savings plan.
                  </p>
                </div>
                <div className="max-w-[429px]">
                  <h2 className="font-bold text-xl mb-5">Transparency</h2>
                  <p className="font-normal text-sm leading-[30px]">
                    No hidden charges and no vague deductions. Save with Ardilla
                    and get your full interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="max-h-[240px] flex flex-col items-center">
                <div className="w-[20px] h-[20px]">
                  <img src="/ellipse.png" alt="" className="w-full h-full" />
                </div>
                <div className="w-[3px] h-[200px]">
                  <img src="/rec.png" alt="" className="w-full h-full" />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img src="/ellipse.png" alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="text-[#3d0072] flex flex-col gap-28 ">
                <div className="max-w-[429px]">
                  <h2 className="font-bold text-xl mb-5">Values</h2>
                  <p className="font-normal text-sm leading-[30px]">
                    Your values matter to us and we are 100% committed to
                    upholding those. Whether it is with Halal or the Ardilla
                    saving plans.
                  </p>
                </div>
                <div className="max-w-[429px]">
                  <h2 className="font-bold text-xl mb-5">Complete Withdraws</h2>
                  <p className="font-normal text-sm leading-[30px]">
                    Withdraw your entire savings+ interest upon maturity. No
                    minimum balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[200px] pb-[100px]">
            <h1 className=" text-[#3d0072] font-mono text-[50px] lg:text-[50px] font-bold mb-[61px] text-center lg:text-left">
              How It works
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px] lg:gap-[20px] justify-center">
              <div className="bg-[#fdedf2] rounded-2xl mx-auto max-w-[365px] lg:w-full lg:mx-0 pt-10 px-14">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-[22px] font-bold h-[32px] flex items-center justify-center text-white bg-[#e8356d] rounded-[100px]">
                    1
                  </div>
                  <h1 className="text-[14px] font-bold font-mono leading-[16px]">
                    CREATE A PLAN
                  </h1>
                </div>
                <div>
                  <img src="/createplan.png" alt="" />
                </div>
              </div>
              <div className="bg-[#FAF5FF] rounded-2xl mx-auto max-w-[365px] lg:w-full lg:mx-0 pt-10 px-14">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-[22px] h-[32px] font-bold flex items-center justify-center text-white bg-[#8807F7] rounded-[100px]">
                    2
                  </div>
                  <h1 className="text-[14px] font-bold font-mono leading-[16px]">
                    GET YOUR TARGET AMOUNT
                  </h1>
                </div>
                <div>
                  <img src="/target.png" alt="" />
                </div>
              </div>
              <div className="bg-[#F1F5FE] rounded-2xl mx-auto max-w-[365px] lg:w-full lg:mx-0 pt-10 px-14">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-[22px] h-[32px] font-bold flex items-center justify-center text-white bg-[#2563EB] rounded-[100px]">
                    3
                  </div>
                  <h1 className="text-[14px] font-bold font-mono leading-[16px]">
                    GET YOUR INTEREST
                  </h1>
                </div>
                <div>
                  <img src="/interest.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[348px]">
            <h1 className=" text-[#3d0072] text-[30px] md:text-[40px] font-bold mb-[80px]">
              Questions We Have Been Asked
            </h1>
            <div className="flex flex-col gap-8">
              {faqs.map((faq) => (
                <div
                  className="w-[98%] bg-[#f9fafb] flex justify-between items-center gap-3 px-[25px] ms:px-[47px] rounded-2xl py-8"
                  key={faq.id}
                >
                  <p className="text-[#8807f7] font-medium text-base">
                    {faq.question}
                  </p>
                  <p className="  font-medium text-base cursor-pointer">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z"
                        fill="#3D0072"
                      />
                    </svg>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default InterestCalculator;
