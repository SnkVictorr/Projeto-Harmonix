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
import IconBag from "@/app/components/icon-bag";

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

        <nav className={`sticky top-0 z-10 transition-all duration-300 ${bg}`}>
          <AppSidebar
            mudarVisibilidade={onHandleVisibibility}
            isVisible={isVisible}
            btnSideNav={`${bgBtnNav}`}
            fillbtn={`${bgBtnNav}`}
          />
          <div className="flex h-[6.3rem] items-center justify-between">
            <div className="ms-[6rem] flex flex-grow justify-center">
              <Link href={"#"}>
                <Image
                  src={logoGold}
                  alt="Logo Harmonix"
                  className="h-16 w-16"
                ></Image>
              </Link>
            </div>
            <IconBag colorIcon={bgBtnNav} />
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
