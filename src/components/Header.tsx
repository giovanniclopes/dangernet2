import { useState, useEffect } from "react";
import logo from "../assets/svg/logo-dangernet-text.svg";
import { List, X } from "phosphor-react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
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
          ? "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap px-16 bg-product-blue text-white transition-all mbl:px-5 mbl:p-4 "
          : "z-50 top-0 fixed w-full flex items-center justify-between flex-wrap px-16 bg-product-blue/95 text-white transition-all mbl:px-3 mbl:p-4"
      }
    >
      <div className="flex items-center flex-shrink-0 text-product-green mr-6 lg:mr-72">
        <a href="/">
          <img
            src={logo}
            className="w-48 mr-2 mbl:w-32"
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
            <X size={28} weight="bold" color="#8EE930" />
          ) : (
            <List size={28} weight="bold" color="#8EE930" />
          )}
        </button>
      </div>
      <div
        className={`p-6 w-full flex flex-grow lg:flex lg:items-center lg:w-auto mbl:flex-col mbl:gap-5 mbl:rounded-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-3 text-base font-semibold lg:flex-grow mbl:flex-col mbl:gap-0">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-product-green-500 focus:text-product-green-700 mbl:text-lg"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <a href="https://wa.me/" target="_blank">
            <button
              className={
                fix
                  ? "py-3 px-7 bg-transparent text-white font-bold border border-product-gold rounded hover:border-product-green focus:bg-product-green"
                  : "py-3 px-7 bg-transparent text-white font-bold border border-product-green rounded hover:opacity-80 focus:bg-product-green"
              }
            >
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
