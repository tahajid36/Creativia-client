import React from "react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
const Slide = () => {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://imgs.search.brave.com/Nhgz69XgsHJ09p9T0oJr_eyqzDSDa-DOt_FA7R1RAqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHAu/cHJvZ3JhbW1pbmct/aGVyby5jb20vX25l/eHQvaW1hZ2U_dXJs/PS9ob21lL2FsbC1j/b3Vyc2VzL3NvbGlk/aXR5LnBuZyZ3PTM4/NDAmcT03NQ" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://imgs.search.brave.com/x4gQJDGdBmzUWyz5mUdR43F6e5BncIQ0q4RA0wq6Fac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHAu/cHJvZ3JhbW1pbmct/aGVyby5jb20vX25l/eHQvaW1hZ2U_dXJs/PS9ob21lL2FsbC1j/b3Vyc2VzL3B5dGhv/bi1wcm9qZWN0cy5w/bmcmdz0zODQwJnE9/NzU" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://imgs.search.brave.com/ZUkevHnPaepsgTt28eQrj7o1Aw0cWa-FUdy3C1BIM4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhcGhpYy1kZXNp/Z25lci1mYWNlYm9v/ay10ZW1wbGF0ZV8y/My0yMTUwODc3NzIx/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
