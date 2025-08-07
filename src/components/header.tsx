import logo from "@/assets/Logo.png";
import cpn1 from "@/assets/icons/heart-icon.svg";
import cpn2 from "@/assets/icons/user-icon.svg";
import cpn3 from "@/assets/icons/cart-icon.svg";
import { Input } from "@/components/input";
import search from "@/assets/icons/search.svg";

const navLinks = [
  { name: "Shop", href: "" },
  { name: "Men", href: "" },
  { name: "Women", href: "" },
  { name: "Combos", href: "" },
  { name: "Joggers", href: "" },
];

const icons = [
  { src: cpn1, alt: "heart" },
  { src: cpn2, alt: "user" },
  { src: cpn3, alt: "cart" },
];

export default function Header() {
  return (
    <header className="top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-[1440px] max-h-[108px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-[102px] py-4">
        <a href="">
          <img src={logo} alt="Logo" className="w-[91px] h-[45px]" />
        </a>

        <nav className="text-xl hidden lg:flex gap-10 pl-[77px] text-frost-grey">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-4 left-[738px]">
          <div className="relative w-[180px] md:w-[240px] lg:w-[276px]">
            <img
              src={search}
              alt="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-70"
            />
            <Input type="text" placeholder="Search" className="pl-9" />
          </div>

          {icons.map((icon, index) => (
            <a href="">
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
