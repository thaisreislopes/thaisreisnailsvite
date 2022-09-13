import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slide() {
  return (
    <section className="flex w-full bg-slate-200 justify-center">
      <div className="w-screen">
        <Swiper
          className="flex z-[0] md:hidden"
          effect={"coverflow"}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <SwiperSlide className="">
            <img
              className="w-screen"
              src="/images/Risque_Deusas-Inspiradoras_Banner-Site_320x527-copy.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="w-screen"
              src="/images/RISQUE_BANNER_SITE_DIAMONG-GEL_MIXDRINKS_MOBILE_320X527_.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full hidden md:flex">
        <Swiper
          className="md:flex z-[0]"
          effect={"coverflow"}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <SwiperSlide className="hidden md:flex">
            <img
              className="w-screen"
              src="/images/Risque_Deusas-Inspiradoras_Banner-Site_1349x618-copy.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="hidden md:flex">
            <img
              className="w-screen"
              src="/images/RISQUE_BANNER_SITE_DIAMONG-GEL_MIXDRINKS_DESKTOP_1349x618.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
