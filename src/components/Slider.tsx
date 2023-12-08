import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
    >
      {testimonials.map((item, idx) => {
        const { authorImg, authorText, authorName, authorPosition } = item;
        return (
          <SwiperSlide className="mt-20 sm:flex sm:justify-center sm:pb-10" key={idx}>
            <div className="flex flex-col sm:flex-row">
              <div className=" flex items-center justify-center">
                <img className="max-w-[300px] rounded-xl w-full" src={authorImg} alt="" />
              </div>
              <div className=" p-8 sm:pl-20">
                <h2 className="italic max-w-[600px]">{authorText}</h2>
                <h3 className="mt-10 text-accent">{authorName}</h3>
                <small className="text-paragraph">{authorPosition}</small>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
