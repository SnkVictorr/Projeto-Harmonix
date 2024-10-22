import Image from "next/image";
import iconeMenu from "@/app/assets/icons/icone-musicmenu.png";
import logoGold from "@/app/assets/images/logo-gold.png";
import iconeBag from "@/app/assets/icons/icone-bag-compra.png";

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

      <input
        className="mx-auto my-10 flex w-[500px] rounded-full border border-gray-300 px-3 py-1 placeholder-slate-500 placeholder-opacity-60 outline-gray-950"
        type="text"
        placeholder="Pesquise Aqui o que você procura"
        style={{ background: "#F2F1F1" }}
      />
    </div>
  );
};

export default Main;
