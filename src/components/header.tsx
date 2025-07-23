import logo from "@/assets/Logo.png";
import cpn1 from "@/assets/icons/Component 1.svg";
import cpn2 from "@/assets/icons/Component 2.svg";
import cpn3 from "@/assets/icons/Component 3.svg";
import { Input } from "@/components/input";
import search from "@/assets/icons/search.svg";

export default function Header() {
  return (
    <header className="top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-[1440px] max-h-[108px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-[102px] py-4">
        <img
          src={logo}
          alt="Logo"
          className="w-[91px] h-[45px] cursor-pointer"
        />

        <nav className="text-xl hidden lg:flex gap-10 pl-[77px] text-frost-grey">
          <a href="">Shop</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Combos</a>
          <a href="">Joggers</a>
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-4 left-[738px]">
          <div className="relative w-[180px] md:w-[240px] lg:w-[276px]">
            <img
              src={search}
              alt="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70"
            />
            <Input type="text" placeholder="Search" className="pl-9" />
          </div>

          <div className="flex cursor-pointer gap-3">
            <img src={cpn1} alt="icon1" className="w-8 h-8 md:w-10 md:h-10" />
            <img src={cpn2} alt="icon2" className="w-8 h-8 md:w-10 md:h-10" />
            <img src={cpn3} alt="icon3" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
        </div>
      </div>
    </header>
  );
}
