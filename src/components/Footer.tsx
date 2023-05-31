const navigations = {
  product: [
    {
      name: "Savings",
      href: "",
    },
    {
      name: "Dilla",
      href: "",
    },
    {
      name: "financial coach",
      href: "",
    },
    {
      name: "Halal",
      href: "",
    },
    {
      name: (
        <div className="flex gap-3 items-center">
          Budgetting{" "}
          <span className="rounded-[100px] border border-white font-medium text-[7px] h-4 p-2 flex items-center justify-center">
            coming soon
          </span>
        </div>
      ),
      href: "",
    },
    {
      name: (
        <div className="flex gap-3 items-center">
          Investment{" "}
          <span className="rounded-[100px] border border-white font-medium text-[7px] h-4 p-2 flex items-center justify-center">
            coming soon
          </span>
        </div>
      ),
      href: "",
    },

    {
      name: (
        <div className="flex gap-3 items-center">
          Insurance{" "}
          <span className="rounded-[100px] border border-white font-medium text-[7px] h-4 p-2 flex items-center justify-center">
            coming soon
          </span>
        </div>
      ),
      href: "",
    },
  ],
  company: [
    {
      name: "About id",
      href: "",
    },
    {
      name: "Careers",
      href: "",
    },
    {
      name: "FAQS",
      href: "",
    },
    {
      name: "Press",
      href: "",
    },
  ],
  transparency: [
    {
      name: "Terms & conditions",
      href: "",
    },
    {
      name: "Information security policy",
      href: "",
    },
    {
      name: "Privacy policy",
      href: "",
    },
    {
      name: "Interest Tool",
      href: "",
    },
  ],
  developer: [
    {
      name: (
        <div className="flex gap-3 items-center">
          Connect API{" "}
          <span className="rounded-[100px] border border-white font-medium text-[7px] h-4 p-2 flex items-center justify-center">
            coming soon
          </span>
        </div>
      ),
    },
  ],
  address: [
    {
      name: "33B, Ogundana street, Allen, Ikeja.",
    },
  ],
  contact: [
    {
      name: "support@ardilla.africa",
      href: "",
    },
    {
      name: "(234)801 000 1234",
      href: "",
    },
  ],
  icons: [
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 15.0001C29.5 23.0083 23.0081 29.5001 15 29.5001C6.99187 29.5001 0.5 23.0083 0.5 15.0001C0.5 6.99199 6.99187 0.500122 15 0.500122C23.0081 0.500122 29.5 6.99199 29.5 15.0001Z"
            stroke="white"
          />
          <path
            d="M19.8767 4.60461H16.5539C14.582 4.60461 12.3886 5.43397 12.3886 8.29232C12.3983 9.28828 12.3886 10.2421 12.3886 11.3156H10.1074V14.9457H12.4592V25.3961H16.7808V14.8767H19.6332L19.8913 11.3054H16.7064C16.7064 11.3054 16.7135 9.71674 16.7064 9.25538C16.7064 8.12582 17.8817 8.19051 17.9524 8.19051C18.5117 8.19051 19.5992 8.19214 19.8784 8.19051V4.60461H19.8767Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 11.625C14.3325 11.625 13.68 11.8229 13.125 12.1938C12.5699 12.5646 12.1374 13.0917 11.8819 13.7084C11.6265 14.3251 11.5596 15.0037 11.6898 15.6584C11.8201 16.3131 12.1415 16.9145 12.6135 17.3865C13.0855 17.8585 13.6869 18.1799 14.3416 18.3102C14.9963 18.4404 15.6749 18.3735 16.2916 18.1181C16.9083 17.8626 17.4354 17.4301 17.8062 16.875C18.1771 16.32 18.375 15.6675 18.375 15C18.3741 14.1052 18.0182 13.2473 17.3855 12.6145C16.7527 11.9818 15.8948 11.6259 15 11.625ZM15 17.25C14.555 17.25 14.12 17.118 13.75 16.8708C13.38 16.6236 13.0916 16.2722 12.9213 15.861C12.751 15.4499 12.7064 14.9975 12.7932 14.561C12.88 14.1246 13.0943 13.7237 13.409 13.409C13.7237 13.0943 14.1246 12.88 14.561 12.7932C14.9975 12.7064 15.4499 12.751 15.861 12.9213C16.2722 13.0916 16.6236 13.38 16.8708 13.75C17.118 14.12 17.25 14.555 17.25 15C17.25 15.5967 17.0129 16.169 16.591 16.591C16.169 17.0129 15.5967 17.25 15 17.25ZM18.375 7.6875H11.625C10.5811 7.68862 9.58018 8.10382 8.842 8.842C8.10382 9.58018 7.68862 10.5811 7.6875 11.625V18.375C7.68862 19.4189 8.10382 20.4198 8.842 21.158C9.58018 21.8962 10.5811 22.3114 11.625 22.3125H18.375C19.4189 22.3114 20.4198 21.8962 21.158 21.158C21.8962 20.4198 22.3114 19.4189 22.3125 18.375V11.625C22.3114 10.5811 21.8962 9.58018 21.158 8.842C20.4198 8.10382 19.4189 7.68862 18.375 7.6875ZM21.1875 18.375C21.1875 19.1209 20.8912 19.8363 20.3637 20.3637C19.8363 20.8912 19.1209 21.1875 18.375 21.1875H11.625C10.8791 21.1875 10.1637 20.8912 9.63626 20.3637C9.10882 19.8363 8.8125 19.1209 8.8125 18.375V11.625C8.8125 10.8791 9.10882 10.1637 9.63626 9.63626C10.1637 9.10882 10.8791 8.8125 11.625 8.8125H18.375C19.1209 8.8125 19.8363 9.10882 20.3637 9.63626C20.8912 10.1637 21.1875 10.8791 21.1875 11.625V18.375ZM19.5 11.3438C19.5 11.5106 19.4505 11.6738 19.3578 11.8125C19.2651 11.9513 19.1333 12.0594 18.9791 12.1233C18.825 12.1871 18.6553 12.2038 18.4916 12.1713C18.328 12.1387 18.1776 12.0584 18.0596 11.9404C17.9416 11.8224 17.8613 11.672 17.8287 11.5084C17.7962 11.3447 17.8129 11.175 17.8767 11.0209C17.9406 10.8667 18.0487 10.7349 18.1875 10.6422C18.3262 10.5495 18.4894 10.5 18.6562 10.5C18.88 10.5 19.0946 10.5889 19.2529 10.7471C19.4111 10.9054 19.5 11.12 19.5 11.3438Z"
            fill="white"
          />
          <circle cx="15" cy="15" r="14.5" stroke="white" />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 15.0001C29.5 23.0083 23.0081 29.5001 15 29.5001C6.99187 29.5001 0.5 23.0083 0.5 15.0001C0.5 6.99199 6.99187 0.500122 15 0.500122C23.0081 0.500122 29.5 6.99199 29.5 15.0001Z"
            stroke="white"
          />
          <path
            d="M23.9629 16.207V22.3912H20.3775V16.6214C20.3775 15.1727 19.8599 14.1834 18.5617 14.1834C17.571 14.1834 16.9825 14.8494 16.7226 15.4944C16.6282 15.7249 16.6039 16.0449 16.6039 16.3682V22.3909H13.0182C13.0182 22.3909 13.0663 12.6189 13.0182 11.6073H16.6041V13.1355C16.5969 13.1475 16.5867 13.1593 16.5803 13.1708H16.6041V13.1355C17.0806 12.4023 17.9304 11.3541 19.8355 11.3541C22.1944 11.3541 23.9629 12.8954 23.9629 16.207ZM9.26723 6.4093C8.04072 6.4093 7.23828 7.21441 7.23828 8.2722C7.23828 9.30753 8.01745 10.1359 9.22017 10.1359H9.24343C10.494 10.1359 11.2716 9.30753 11.2716 8.2722C11.2478 7.21441 10.494 6.4093 9.26723 6.4093ZM7.45139 22.3912H11.0357V11.6073H7.45139V22.3912Z"
            fill="#F1F2F2"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 15.0001C29.5 23.0083 23.0081 29.5001 15 29.5001C6.99187 29.5001 0.5 23.0083 0.5 15.0001C0.5 6.99199 6.99187 0.500122 15 0.500122C23.0081 0.500122 29.5 6.99199 29.5 15.0001Z"
            stroke="white"
          />
          <path
            d="M24.187 10.7801C23.5442 11.0651 22.8527 11.2579 22.1275 11.344C22.8679 10.9004 23.4361 10.1985 23.7043 9.3608C23.0115 9.77177 22.2438 10.0699 21.4275 10.2306C20.7735 9.53407 19.8416 9.09875 18.8098 9.09875C16.83 9.09875 15.2243 10.7044 15.2243 12.6842C15.2243 12.9652 15.2562 13.2387 15.3177 13.5013C12.3379 13.3518 9.6958 11.9245 7.92729 9.75466C7.61872 10.2841 7.44171 10.9004 7.44171 11.5574C7.44171 12.801 8.07516 13.8989 9.03669 14.5417C8.44923 14.5233 7.89601 14.362 7.41283 14.0928C7.41257 14.108 7.41257 14.1233 7.41257 14.1382C7.41257 15.8755 8.64897 17.3245 10.2889 17.6536C9.98833 17.736 9.67094 17.7795 9.34445 17.7795C9.11289 17.7795 8.88856 17.7574 8.66983 17.7156C9.126 19.1398 10.4498 20.1764 12.0191 20.2056C10.7918 21.1674 9.24605 21.7404 7.56578 21.7404C7.277 21.7404 6.99089 21.7235 6.71094 21.6901C8.29682 22.7078 10.1819 23.3011 12.2066 23.3011C18.8015 23.3011 22.408 17.8378 22.408 13.0994C22.408 12.9441 22.4045 12.7893 22.3976 12.6358C23.0987 12.1304 23.7065 11.4991 24.187 10.7801Z"
            fill="#F1F2F2"
          />
        </svg>
      ),
    },
  ],
};
const Footer = () => {
  return (
    <footer className="bg-[#8807F7] px-4 ">
      <div className=" relative">
        <div className="bg-[url('/footer.png')] px-12 lg:px-20 pt-[74px] w-full max-w-[941px] rounded-2xl  bg-no-repeat bg-cover right-0 left-0 mx-auto top-[-20%] lg:top-[-30%] absolute">
          <div className="flex items-center flex-col gap-7 lg:flex-row">
            <div>
              <h1 className="font-bold lg:text-[32px] text-[20px] max-w-full lg:max-w-[323px] w-full text-white mb-[34px]">
                Download for free Start saving Today
              </h1>
              <button className="bg-white rounded-lg px-4 py-5 text-sm text-[#3c0071]">
                Download for free
              </button>
            </div>
            <div>
              <img src="/phoneImage.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>

        <div className="flex pt-[270px] justify-between gap-3 max-w-[1250px] mx-auto flex-col lg:flex-row">
          <div className="text-white">
            <h1 className="mb-8 font-bold text-[18px]">Products</h1>
            <div className="flex flex-col gap-[2px]">
              {navigations.product.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h1 className="mb-8 font-bold text-[18px]">Company</h1>
            <div className="flex flex-col gap-[2px]">
              {navigations.company.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h1 className="mb-8 font-bold text-[18px]">Transparency</h1>
            <div className="flex flex-col gap-[2px]">
              {navigations.transparency.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h1 className="mb-8 font-bold text-[18px]">Developer</h1>
            <div className="flex flex-col gap-[2px]">
              {navigations.developer.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h1 className="mb-8 font-bold text-[18px]">Address</h1>
            <div className="flex mb-2 flex-col gap-[2px]">
              {navigations.address.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
            <h1 className="mb-5 font-bold text-[18px]">Contact</h1>
            <div className="flex flex-col gap-[2px]">
              {navigations.contact.map((item, idx) => (
                <a className="text-[16px] font-normal mb-2" key={idx}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-10 text-white max-w-[1250px] mx-auto pt-[28px]">
          <hr className="border-[1px] border-[#d1d5db]" />
          <div className="mt-[23px] flex justify-between items-center">
            <p className=" font-medium text-[16px]">
              © 2022 Ardilla. All right reserved
            </p>

            <div className="flex max-w-[150px] w-full justify-between">
              {navigations.icons.map((item, idx) => (
                <a className="cursor-pointer" key={idx}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="text-[15px] mt-[15px]">
            Ardilla operates under the coorperative license of Ardilla
            Multipurpose Cooperative Society, LSC 18245, We provide Savings and
            Fixed deposit services to our users
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
