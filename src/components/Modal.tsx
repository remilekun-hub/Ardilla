import { Dispatch, SetStateAction } from "react";
import cap from "../assets/cap.png";
import verified from "../assets/verified.png";

type ModalProp = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
function Modal({ setOpenModal }: ModalProp) {
  return (
    <div className="fixed top-0 bottom-0 px-2 h-screen w-screen z-[300] overflow-clip bg-black/70 flex items-center justify-center">
      <div className="flex justify-center items-center py-[50px] w-full rounded-[20px] bg-white mx-auto max-w-[688px]">
        <div className="px-4">
          <button
            className="lg:ml-[-50px] font-serif text-[#4B5563] text-[12px] leading-[12px] flex items-center gap-[10px]"
            onClick={() => setOpenModal(false)}
          >
            <span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.11182 0.512272C4.06687 0.467211 4.01348 0.43146 3.95469 0.407067C3.89591 0.382673 3.83288 0.370117 3.76924 0.370117C3.70559 0.370117 3.64257 0.382673 3.58379 0.407067C3.525 0.43146 3.47161 0.467211 3.42666 0.512272L0.209884 3.72905C0.173999 3.76486 0.145529 3.8074 0.126104 3.85422C0.106678 3.90105 0.0966797 3.95125 0.0966797 4.00195C0.0966797 4.05265 0.106678 4.10285 0.126104 4.14968C0.145529 4.1965 0.173999 4.23904 0.209884 4.27485L3.42666 7.49163C3.61634 7.68131 3.92214 7.68131 4.11182 7.49163C4.3015 7.30195 4.3015 6.99614 4.11182 6.80647L1.30924 4.00001L4.11569 1.19356C4.3015 1.00776 4.3015 0.698079 4.11182 0.512272Z"
                  fill="#4B5563"
                />
              </svg>
            </span>
            <p>Go Back</p>
          </button>

          <img src={verified} alt="verified" className="mx-auto" />
          <div className="flex items-center justify-center w-full text-center gap-[5px] mt-[35px] mb-[30px]">
            <img src={cap} alt="confetti" className="mt-[5px]" />
            <h3 className="text-[#22C55E] font-semibold text-[30px] font-serif leading-[31px] text-center">
              Great!! You’re on the waitlist{" "}
            </h3>
          </div>

          <p className="text-[#9CA3AF] font-medium text-[14px] text-center font-serif max-w-[217px] mx-auto mb-[40px]">
            An email would be sent to you in regards, Thank You
          </p>

          <div className="space-x-3 flex justify-center">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#F0FDF4]">
              <svg
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.40921 12.0721V6.83493H6.16714L6.43033 4.7939H4.40921V3.49077C4.40921 2.89986 4.57332 2.49712 5.42077 2.49712L6.50158 2.49662V0.671157C6.31457 0.646374 5.67304 0.59082 4.92666 0.59082C3.36838 0.59082 2.30154 1.54195 2.30154 3.28874V4.79396H0.539062V6.83499H2.30149V12.0722L4.40921 12.0721Z"
                  fill="#22C55E"
                />
              </svg>
            </div>

            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#F0FDF4]">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.86308 7.97313C5.86308 6.55063 7.01597 5.39716 8.43853 5.39716C9.86108 5.39716 11.0146 6.55063 11.0146 7.97313C11.0146 9.39563 9.86108 10.5491 8.43853 10.5491C7.01597 10.5491 5.86308 9.39563 5.86308 7.97313ZM4.4705 7.97313C4.4705 10.1646 6.24698 11.941 8.43853 11.941C10.6301 11.941 12.4066 10.1646 12.4066 7.97313C12.4066 5.78167 10.6301 4.00526 8.43853 4.00526C6.24698 4.00526 4.4705 5.78167 4.4705 7.97313ZM11.6363 3.84794C11.6361 4.36006 12.0511 4.77538 12.5633 4.77558C13.0754 4.77579 13.4907 4.3608 13.491 3.84868C13.4912 3.33656 13.0762 2.92124 12.564 2.92103C12.0521 2.92127 11.6368 3.33606 11.6363 3.84794ZM5.31658 14.263C4.56317 14.2286 4.15367 14.1032 3.88154 13.9971C3.52075 13.8567 3.26333 13.6894 2.99268 13.4191C2.72203 13.1489 2.55449 12.8917 2.41465 12.5309C2.30857 12.2589 2.18307 11.8493 2.14883 11.0959C2.11136 10.2814 2.10388 10.0367 2.10388 7.97319C2.10388 5.90964 2.11198 5.66564 2.14883 4.85044C2.18314 4.09706 2.30956 3.68826 2.41465 3.41546C2.55511 3.05469 2.7224 2.79727 2.99268 2.52663C3.26296 2.25599 3.52013 2.08847 3.88154 1.94863C4.15355 1.84255 4.56317 1.71706 5.31658 1.68281C6.13113 1.64535 6.37582 1.63787 8.43853 1.63787C10.5012 1.63787 10.7462 1.64597 11.5614 1.68281C12.3148 1.71712 12.7236 1.84354 12.9964 1.94863C13.3572 2.08847 13.6147 2.25636 13.8853 2.52663C14.156 2.7969 14.3229 3.05469 14.4633 3.41546C14.5694 3.68746 14.6949 4.09706 14.7292 4.85044C14.7666 5.66564 14.7741 5.90964 14.7741 7.97319C14.7741 10.0367 14.7666 10.2807 14.7292 11.0959C14.6948 11.8493 14.5687 12.2588 14.4633 12.5309C14.3229 12.8917 14.1556 13.1491 13.8853 13.4191C13.615 13.6892 13.3572 13.8567 12.9964 13.9971C12.7244 14.1032 12.3148 14.2287 11.5614 14.263C10.7469 14.3004 10.5022 14.3079 8.43853 14.3079C6.37489 14.3079 6.13088 14.3004 5.31658 14.263ZM5.2526 0.292646C4.42995 0.330108 3.86781 0.460544 3.37689 0.651563C2.86848 0.848825 2.43808 1.11347 2.008 1.54286C1.57791 1.97225 1.31394 2.40331 1.11667 2.9117C0.925641 3.40291 0.795199 3.96471 0.757736 4.78733C0.719654 5.61124 0.710938 5.87465 0.710938 7.97313C0.710938 10.0716 0.719654 10.335 0.757736 11.1589C0.795199 11.9816 0.925641 12.5434 1.11667 13.0346C1.31394 13.5426 1.57797 13.9742 2.008 14.4034C2.43802 14.8326 2.86848 15.0969 3.37689 15.2947C3.86874 15.4857 4.42995 15.6162 5.2526 15.6536C6.07698 15.6911 6.33996 15.7004 8.43853 15.7004C10.5371 15.7004 10.8005 15.6917 11.6245 15.6536C12.4472 15.6162 13.0089 15.4857 13.5002 15.2947C14.0083 15.0969 14.439 14.8328 14.8691 14.4034C15.2991 13.974 15.5626 13.5426 15.7604 13.0346C15.9514 12.5434 16.0825 11.9816 16.1193 11.1589C16.1568 10.3344 16.1655 10.0716 16.1655 7.97313C16.1655 5.87465 16.1568 5.61124 16.1193 4.78733C16.0819 3.96465 15.9514 3.4026 15.7604 2.9117C15.5626 2.40362 15.2985 1.97293 14.8691 1.54286C14.4397 1.11279 14.0083 0.848825 13.5008 0.651563C13.0089 0.460544 12.4471 0.32949 11.6251 0.292646C10.8011 0.255184 10.5377 0.24585 8.43915 0.24585C6.34058 0.24585 6.07698 0.254566 5.2526 0.292646Z"
                  fill="#22C55E"
                />
              </svg>
            </div>

            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#F0FDF4]">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2296 2.13776C16.6301 2.4038 15.9861 2.58365 15.3091 2.66449C16.0001 2.25071 16.5294 1.59502 16.7794 0.81463C16.123 1.20449 15.4046 1.47895 14.6555 1.62609C14.0459 0.976266 13.1765 0.570557 12.2147 0.570557C10.3686 0.570557 8.87141 2.06715 8.87141 3.91434C8.87141 4.17606 8.90089 4.4314 8.95756 4.67656C6.17849 4.53689 3.71467 3.20568 2.0655 1.18292C1.77753 1.67694 1.6127 2.25132 1.6127 2.86415C1.6127 4.0241 2.2031 5.04752 3.10019 5.64702C2.56913 5.63056 2.04972 5.48722 1.58538 5.22897V5.27122C1.58538 6.89147 2.73782 8.24248 4.2676 8.54975C3.98658 8.62674 3.69166 8.66697 3.38656 8.66697C3.17085 8.66697 2.96156 8.64655 2.75711 8.6081C3.18263 9.93611 4.41754 10.9028 5.88034 10.9301C4.73594 11.8272 3.29394 12.3619 1.72777 12.3619C1.45802 12.3619 1.19141 12.3458 0.929688 12.3143C2.40971 13.2633 4.16699 13.8173 6.0554 13.8173C12.2056 13.8173 15.5692 8.72213 15.5692 4.30352C15.5692 4.15845 15.566 4.01447 15.559 3.87101C16.2144 3.397 16.7801 2.81009 17.2296 2.13776Z"
                  fill="#22C55E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
