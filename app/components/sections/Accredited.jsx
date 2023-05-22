import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// import Swiper core and required modules

export default function Accredited() {
  return (
    <div className="w-full pt-[50px] pb-10 lg:pb-[50px] lg:pt-[100px]   bg-primarybg ">
      <h1 className="text-4xl text-primary font-semibold text-center">Accredited HMOs</h1>
      <p className="text-center">Click on your insurance provider below to see the list of accredited branches.</p>
      <div className="md:w-[80%] xl:w-[70%] 2xl:w-[60%] md:pt-5 2xl:pt-10 mx-auto grid md:grid-cols-4 justify-center">
        <div className="w-[250px] h-[250px] bg-carehealth bg-contain bg-no-repeat bg-center">
          
        </div>
        <div className="w-[250px] h-[250px] bg-getwell bg-contain bg-no-repeat bg-center"></div>
        <div className="w-[250px] h-[250px] bg-inlife bg-contain bg-no-repeat bg-center"></div>
        <div className="w-[250px] h-[250px] bg-wellcare bg-contain bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}
