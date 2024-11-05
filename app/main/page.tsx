"use client";

import Image from "next/image";
import logoGold from "@/public/assets/images/logo-gold.png";

import GreyCard from "../components/gray-card";
import { Search } from "lucide-react";
import Carousel from "../components/carousel";
import Link from "next/link";
import { AppSidebar } from "../components/app-sidebar";
import { useEffect, useState } from "react";
import DarkerBackground from "../components/background-escurecida";

// import ImgInstrumento from "@/app/assets/images/instruments-2.png";

const Main = () => {
  const name = "";
  console.log(name);
  const [isVisible, setIsVisible] = useState(true);
  const [bg, setBg] = useState("bg-transparent");
  const [bgBtnNav, setBgBtnNav] = useState("");

  function onHandleVisibibility() {
    setIsVisible(!isVisible);
  }
  function handlyScroll() {
    if (window.scrollY > 10) {
      setBg("bg-black");
      setBgBtnNav("#ffffff");
    } else {
      setBgBtnNav("");
      setBg("bg-transparent");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handlyScroll);
    return () => {
      window.removeEventListener("scroll", handlyScroll);
    };
  }, []);

  return (
    <>
      {!isVisible && (
        <DarkerBackground onClick={() => onHandleVisibibility()} />
      )}

      <div className="h-auto min-h-screen w-auto bg-[#ececec]">
        {/*  */}

        <nav className={`sticky top-0 z-50 transition-all duration-300 ${bg}`}>
          <AppSidebar
            mudarVisibilidade={onHandleVisibibility}
            isVisible={isVisible}
            btnSideNav={`${bgBtnNav}`}
            fillbtn={`${bgBtnNav}`}
          />
          <div className="flex h-[6.3rem] items-center justify-between">
            <div className="ms-[6rem] flex flex-grow justify-center">
              <Image
                src={logoGold}
                alt="Logo Harmonix"
                className="h-16 w-16"
              ></Image>
            </div>
            <div className="mt-8">
              <a href="#">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 476.000000 323.000000"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ width: "100%", height: "100%" }}
                  fill={bgBtnNav}
                  stroke="none"
                  height="7rem"
                  width="7rem"
                >
                  <g
                    transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M835 1949 c-202 -29 -435 -153 -574 -305 -107 -117 -188 -266 -233
-432 -31 -111 -31 -353 0 -464 99 -362 353 -617 711 -716 l96 -27 930 0 930 0
98 27 c565 156 873 739 677 1280 -122 337 -432 588 -785 637 -93 13 -1760 13
-1850 0z m1958 -82 c314 -98 545 -323 635 -618 156 -510 -156 -1044 -682
-1167 -64 -15 -165 -17 -981 -17 -816 0 -917 2 -981 17 -282 66 -509 248 -634
509 -188 394 -69 864 285 1127 112 83 277 152 408 172 29 4 459 7 957 6 l905
-1 88 -28z"
                    />
                    <path
                      d="M2290 1325 c-199 -85 -349 -144 -369 -144 -30 -1 -33 1 -27 22 18 59
18 102 0 125 -22 26 -164 82 -210 82 -37 0 -66 -28 -89 -87 -10 -24 -18 -43
-20 -43 -1 0 -22 7 -46 16 -26 10 -76 17 -119 17 -73 0 -82 -3 -295 -93 -121
-51 -237 -105 -258 -121 -80 -57 -119 -133 -121 -234 -1 -65 4 -81 64 -225 52
-123 74 -163 108 -198 60 -61 120 -85 212 -85 l75 -1 810 345 c889 378 868
366 895 464 16 55 8 97 -36 190 -37 78 -84 109 -173 112 -65 2 -71 0 -401
-142z m488 90 c38 -23 90 -116 98 -178 8 -55 -22 -126 -64 -155 -15 -10 -387
-171 -827 -358 -774 -328 -802 -339 -865 -339 -51 0 -77 6 -124 29 -74 36
-103 77 -174 243 -66 153 -74 211 -43 293 38 101 74 127 330 236 294 127 283
126 571 30 171 -57 212 -67 250 -63 25 3 170 59 330 128 367 157 400 168 448
159 21 -3 52 -15 70 -25z m-996 -61 c40 -15 79 -31 86 -36 20 -17 13 -82 -14
-126 -3 -5 -228 69 -237 78 -9 8 15 73 34 97 17 19 49 16 131 -13z"
                    />
                  </g>
                </svg>

                <span className="sr-only">Toggle Sidebar</span>
              </a>
            </div>
          </div>
          <div className="relative my-2 flex justify-center pb-8">
            <input
              className="font-quiche mx-auto flex w-[500px] rounded-full border border-black border-opacity-30 px-4 py-2 text-sm placeholder-[slate-500] placeholder-opacity-60 shadow-sm shadow-[#00000044] outline-gray-500"
              type="text"
              placeholder="Pesquise Aqui o que você procura"
              style={{ background: "#F2F1F1" }}
            />
            <Link href={"#"} className="absolute top-[0.4rem] ms-[28rem] h-4">
              <Search />
            </Link>
          </div>
        </nav>

        <Carousel />
        <div className="mt-16 flex h-[17.43rem] justify-center gap-20">
          <GreyCard
            imagem="/assets/images/instruments-2.png"
            titulo="Instrumentos"
            paragrafo="Encontre os melhores instrumentos musicais, 
com o melhor preço e as melhores recomendações"
          />
          <GreyCard
            imagem="/assets/images/brand-1.png"
            titulo="Marcas"
            paragrafo="Encontre as principais marcas fornecedoras 
de instrumentos musicais do mercado"
          />
          {/* <div className="w-[31.25rem] rounded-[3rem] bg-card"></div>
        <div className="w-[31.25rem] rounded-[3rem] bg-card"></div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
