"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Services_Card from "../Service_Card";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Landing_services() {
  const [numCard, setNumCard] = useState(1)
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 400 && screenWidth < 1536){
      setNumCard(3)
    }else if(screenWidth > 1536){
      setNumCard(4)
    }else{
      return
    }


  }, [])

  const servicesItem = [
    {
      icon: "flask",
      title: "CHEMISTRY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-blue-200",
      darkbg: "group-hover:bg-blue-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "injection",
      title: "HEMATOLOGY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-red-200",
      darkbg: "group-hover:bg-red-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "bacteriology",
      title: "BACTERIOLOGY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-green-200",
      darkbg: "group-hover:bg-green-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "immunity",
      title: "IMMUNO-SEROLOGY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-orange-200",
      darkbg: "group-hover:bg-orange-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "lab_micro",
      title: "CLINICAL MICROSCOPY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-violet-200",
      darkbg: "group-hover:bg-violet-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "xray",
      title: "X-RAY SERVICES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-sky-200",
      darkbg: "group-hover:bg-sky-700",
      scale: "group-hover:scale-125",
    },
    {
      icon: "ultrasound3",
      title: "ULTRASOUND",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at magnam. Qui ratione tenetur, accusamus velit et quia doloremque nam.",
      lightbg: "bg-pink-200",
      darkbg: "group-hover:bg-pink-700",
      scale: "group-hover:scale-125",
    },
  ];
  return (
    <div className="w-full h-auto lg:pl-[20%] pt-[50px] lg:pt-[100px] px-[10px]  bg-primarybg ">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div>
          <h3 className="font-semibold mb-7 text-accent">OUR SERVICES</h3>
          <h2 className="text-3xl font-bold mb-10">SERVICE AREA</h2>
        </div>
        <div className="flex gap-5 pr-20">
          <BsChevronLeft
            size={50}
            className="border border-gray-300 bg-primarybg rounded-full p-3 hover:text-white hover:bg-darkerbg duration-500 "
          />
          <BsChevronRight
            size={50}
            className="border border-gray-300 bg-primarybg rounded-full p-3 hover:text-white hover:bg-darkerbg duration-500 "
          />
        </div>
      </div>

      <div className="flex gap-10  py-5 ">
        <Swiper
          className="py-10 pr-20"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={numCard}
        >
          {servicesItem.map((item) => (
            <SwiperSlide key={item.title}>
              <Services_Card
                icon={item.icon}
                title={item.title}
                description={item.description}
                lightbg={item.lightbg}
                darkbg={item.darkbg}
                scale={item.scale}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
