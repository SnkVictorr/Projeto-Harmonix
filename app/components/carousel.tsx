import Image from "next/image";
import Link from "next/link";

import banner1 from "@/public/assets/images/saxophone-yamaha-banner.png";
import banner2 from "@/public/assets/images/trompete-yamaha-banner.png";
import banner3 from "@/public/assets/images/acessorios-banner.png";
import banner4 from "@/public/assets/images/promo-banner.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Carousel = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#C7A315",
          "--swiper-pagination-color": "#C7A315",
        }}
        cssMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper rounded-[3rem] shadow-md"
      >
        <SwiperSlide>
          <Link href="#">
            <Image src={banner1} alt="banner 1"></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="banner 2"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="banner 3"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="banner 4"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
