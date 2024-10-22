"use client";

import Image from "next/image";
import iconeMenu from "@/app/assets/icons/icone-musicmenu.png";
import logoGold from "@/app/assets/images/logo-gold.png";
import iconeBag from "@/app/assets/icons/icone-bag-compra.png";
import banner1 from "@/app/assets/images/saxophone-yamaha-banner.png";
import banner2 from "@/app/assets/images/trompete-yamaha-banner.png";
import banner3 from "@/app/assets/images/acessorios-banner.png";
import banner4 from "@/app/assets/images/promo-banner.png";

import { Search } from "lucide-react";
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

const Main = () => {
  const name = "";
  console.log(name);
  return (
    <div className="bg-main h-screen w-screen">
      <div className="flex h-[6.3rem] justify-between">
        <div className="flex items-center ps-10">
          <Image src={iconeMenu} alt="Icone do Menu" className="w-8"></Image>
        </div>

        <div className="ms-10 flex items-center">
          <Image
            src={logoGold}
            alt="Logo Harmonix"
            className="h-14 w-14"
          ></Image>
        </div>
        <div className="me-10 flex items-center">
          <a href="#">
            <Image src={iconeBag} alt="Logo Harmonix" className=""></Image>
          </a>
        </div>
      </div>

      <div className="relative my-10 flex justify-center">
        <input
          className="mx-auto flex w-[500px] rounded-full border border-black px-3 py-1 placeholder-slate-500 placeholder-opacity-60 shadow-lg outline-gray-950"
          type="text"
          placeholder="Pesquise Aqui o que você procura"
          style={{ background: "#F2F1F1" }}
        />
        <Search className="absolute top-1 ms-[28rem] h-6" />
      </div>

      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#C7A315",
            "--swiper-pagination-color": "#C7A315",
          }}
          cssMode={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper rounded-[3rem] shadow-md"
        >
          <SwiperSlide>
            <Image src={banner1} alt="banner 1"></Image>
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
    </div>
  );
};

export default Main;
