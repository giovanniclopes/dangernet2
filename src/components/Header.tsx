// Importe useState e useEffect do React
import { useState, useEffect } from "react";
import logo from "../assets/svg/sono-e-conforto-logo-svg-s.svg";
import { List, X } from "phosphor-react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Limpeza", href: "#cleaning" },
  { name: "Impermeabilização", href: "#waterproofing" },
  { name: "Sobre", href: "#about" },
  { name: "FAQ", href: "#FAQ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    // Remova o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  // Adicione este manipulador para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={
        fix
          ? "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap px-16 bg-product-darkBlue text-white border-b-2 border-product-gold transition-all mbl:px-5 mbl:p-4 "
          : "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap p-6 px-16 bg-transparent text-product-gold-100 border-none transition-all mbl:px-3 mbl:p-4"
      }
    >
      <div className="flex items-center flex-shrink-0 text-product-purple-500 mr-6 lg:mr-72">
        <a href="/">
          <img
            src={logo}
            className="w-28 mr-2"
            alt="Logo"
            draggable="false"
            loading="lazy"
          />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="hamburguer-btn"
          aria-label="Open or close hamburguer menu on mobile"
          aria-labelledby="labeldiv"
          className="flex items-center px-3 py-2 rounded text-gray-500 hover:text-gray-400"
        >
          {isOpen ? (
            <X size={28} weight="bold" color="#dfb749" />
          ) : (
            <List size={28} weight="bold" color="#dfb749" />
          )}
        </button>
      </div>
      <div
        className={`p-6 w-full flex flex-grow lg:flex lg:items-center lg:w-auto mbl:bg-product-darkBlue-600 mbl:flex-col mbl:gap-5 mbl:rounded-lg mbl:border-t-2 mbl:border-product-gold ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-3 text-base font-semibold lg:flex-grow mbl:flex-col mbl:gap-0">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-product-gold-400 focus:text-product-gold-800 mbl:text-lg"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <a href="https://wa.me/5511998687964" target="_blank">
            <button
              className={
                fix
                  ? "py-3 px-7 bg-product-gold text-product-darkBlue font-bold border border-product-gold rounded hover:opacity-80"
                  : "py-3 px-7 bg-transparent text-white font-extrabold border border-white rounded hover:opacity-80"
              }
            >
              Contato
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
