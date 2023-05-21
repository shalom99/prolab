"use client";
// import Swiper core and required modules
import { useEffect, useRef, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimonial_Card() {
  const [numCard, setNumCard] = useState(1)
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 400){
      setNumCard(3)
    }else{
      return
    }


  }, [])
  return (
    <div className="lg:w-[80%] xl:w-[60%] mx-auto px-2">
      <Swiper
      
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={numCard}
       
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="lg:pl-5 pt-10 pb-10 ">
          <div className=" bg-primarybg flex flex-col items-center justify-center pb-10 px-10 shadow-lg">
          <img src="/gallery/review1.jpg" className="-translate-y-10 rounded-full w-[75px] h-[75px] object-cover  border" alt="" />
          <p className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, cum repellat fuga aperiam corrupti doloremque praesentium nulla, suscipit delectus porro consequatur facilis impedit illo repellendus soluta nam! Asperiores, id soluta?</p>
          <h3 className="font-bold text-lg mt-10">First_Name Last_Name</h3>
          <h3 className="font-bold text-accent">Position</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:pl-5 pt-10 pb-10 ">
          <div className="bg-primarybg flex flex-col items-center justify-center pb-10 px-10 shadow-lg">
          <img src="/gallery/review4.jpg" className="-translate-y-10 rounded-full  w-[75px] h-[75px] object-cover  border" alt="" />
          <p className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, cum repellat fuga aperiam corrupti doloremque praesentium nulla, suscipit delectus porro consequatur facilis impedit illo repellendus soluta nam! Asperiores, id soluta?</p>
          <h3 className="font-bold text-lg mt-10">First_Name Last_Name</h3>
          <h3 className="font-bold text-accent">Position</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:pl-5 pt-10 pb-10 ">
          <div className=" bg-primarybg flex flex-col items-center justify-center pb-10 px-10 shadow-lg">
          <img src="/gallery/review3.jpg" className="-translate-y-10 rounded-full  w-[75px] h-[75px] object-cover  border" alt="" />
          <p className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, cum repellat fuga aperiam corrupti doloremque praesentium nulla, suscipit delectus porro consequatur facilis impedit illo repellendus soluta nam! Asperiores, id soluta?</p>
          <h3 className="font-bold text-lg mt-10">First_Name Last_Name</h3>
          <h3 className="font-bold text-accent">Position</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:pl-5 pt-10 pb-10 ">
          <div className=" bg-primarybg flex flex-col items-center justify-center pb-10 px-10 shadow-lg">
          <img src="/gallery/review2.jpg" className="-translate-y-10 rounded-full  w-[75px] h-[75px] object-cover  border" alt="" />
          <p className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, cum repellat fuga aperiam corrupti doloremque praesentium nulla, suscipit delectus porro consequatur facilis impedit illo repellendus soluta nam! Asperiores, id soluta?</p>
          <h3 className="font-bold text-lg mt-10">First_Name Last_Name</h3>
          <h3 className="font-bold text-accent">Position</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:pl-5 pt-10 pb-10 ">
          <div className=" bg-primarybg flex flex-col items-center justify-center pb-10 px-10 shadow-lg">
          <img src="/gallery/review5.jpg" className="-translate-y-10 rounded-full w-[75px] h-[75px] object-cover  border" alt="" />
          <p className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, cum repellat fuga aperiam corrupti doloremque praesentium nulla, suscipit delectus porro consequatur facilis impedit illo repellendus soluta nam! Asperiores, id soluta?</p>
          <h3 className="font-bold text-lg mt-10">First_Name Last_Name</h3>
          <h3 className="font-bold text-accent">Position</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
