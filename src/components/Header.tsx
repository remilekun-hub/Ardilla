import logo from "../assets/logo.png";
import frame from "../assets/Frame 237.png";
import { useLocation } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  interface PageColours {
    background: string;
    button: string;
    buttonHover: string;
  }
  const pageColours: Record<string, PageColours> = {
    "/": {
      background: "bg-[#240053]",
      button: "bg-[#8807f7]",
      buttonHover: "hover:bg-[#6005AE]",
    },
    "/interest-calculator": {
      background: "bg-[#10001F]",
      button: "bg-white text-[#3D0072]",
      buttonHover: "hover:bg-[#8807F7] hover:text-white",
    },
    "/career-page": {
      background: "bg-[#8807F7]",
      button: "bg-white text-[#8807F7]",
      buttonHover: "hover:bg-[#6005AE] hover:text-white",
    },
  };

  const { background, button, buttonHover } = pageColours[location.pathname];

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        setShowMenu(false);
      })
    );
  }, []);
  console.log({ viewWidth });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewWidth(window.innerWidth);
    });
  }, []);

  return (
    <header
      className={`${background} sticky top-0 z-10 h-[100px] text-white flex items-center`}
    >
      <nav className="max-w-[1250px] w-full mx-auto px-4 h-[50.07px] flex items-center justify-between">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="ardilla" />
          </a>

          <div className=" ml-[120px] hidden lg:flex space-x-[47px] w-[458.7px]">
            <a href="#products" className="text-14px">
              Products
            </a>
            <a href="#business">
              Business{" "}
              <span className="ml-[4px] border-[1px] px-[1px] rounded-[3px] text-[13px]">
                Beta
              </span>
            </a>
            <a href="#company" className="text-[14px]">
              Company
            </a>
            <a href="#learn" className="text-[14px]">
              Learn
            </a>
          </div>
        </div>
        <div className="lg:flex  hidden items-center h-full gap-[20px]">
          <div className="flex items-center gap-[30px]">
            <span className="mr text-[14px]">Sign In</span>
            <button
              className={`w-[176px] h-[50px] transition duration-300 ${buttonHover} ${button} rounded-[79px]`}
            >
              Create Account
            </button>
          </div>
          <div className="h-[50px] w-[50px]">
            <img src={frame} alt="" className="w-full" />
          </div>
        </div>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={hamburger} alt="menu" />
        </div>
      </nav>
      <div
        className={`lg:hidden fixed top-[100px] pl-[5px] right-0 w-screen transition-all  duration-[400] h-screen ${background} text-white ${
          showMenu ? "right-0" : " right-[-120%]"
        }`}
      >
        <div className="flex justify-center w-full items-center">
          <div className="flex flex-col pt-[30px] gap-4 w-full justify-center items-center ">
            <div className="flex flex-col gap-7">
              <a href="#products" className="text-14px text-center nav-link">
                Products
              </a>
              <a href="#business" className="text-14px text-center nav-link">
                Business{" "}
                <span className="ml-[4px] border-[1px] px-[1px] rounded-[3px] text-[13px]">
                  Beta
                </span>
              </a>
              <a
                href="/"
                className="text-[14px] text-14px text-center nav-link"
              >
                Company
              </a>
              <a
                href="#learn"
                className="text-[14px] text-14px text-center nav-link"
              >
                Learn
              </a>
            </div>
            <div>
              <div className="flex items-center h-full gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  <span className=" text-[14px]">Sign In</span>
                  <button
                    className={`w-[176px] h-[50px] transition duration-300 ${buttonHover} ${button} rounded-[79px]`}
                  >
                    Create Account
                  </button>
                </div>
                <div className="h-[50px] w-[50px]">
                  <img src={frame} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
