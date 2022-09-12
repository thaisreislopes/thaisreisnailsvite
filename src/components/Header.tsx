import { Phone, WhatsappLogo, X } from "phosphor-react";
import { useState } from "react";
import Logo from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full justify-center m-auto py-4 bg-black-800">
      <nav className="md:w-[980px] mx-auto flex items-center justify-between px-4">
        <div>
          <Logo />
        </div>
        <ul className="md:flex gap-4 hidden">
          <li>
            <a
              className="text-md text-yellow-800 relative after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-rose-300 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-rose-300 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-rose-300 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Equipe
            </a>
          </li>
        </ul>
        <div className="flex flex-col">
          <span className="gap-2 hidden md:flex text-rose-300">
            <Phone size={20} />
            45999741775
          </span>
          <a
            className="bg-none md:bg-black-100 rounded-2xl py-2 text-sm text-rose-300"
            href="#"
          >
            <WhatsappLogo size={30} className="flex md:hidden" />
            <span className="hidden md:flex">Chamar no whatsapp</span>
          </a>
        </div>
      </nav>
      <nav className="bg-rose-100 w-[80%] right-0 top-0 fixed h-screen py-8 px-6 justify-between hidden">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              className="text-md text-yellow-800 relative font-bold after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-black-800 font-bold after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-black-800 font-bold after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              className="text-md absolute text-black-800 font-bold after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Equipe
            </a>
          </li>
        </ul>
        <div className="p-6 relative top-0 right-0">
          <X size={32} />
        </div>
      </nav>
    </header>
  );
}
