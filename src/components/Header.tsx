import classNames from "classnames";
import { List, WhatsappLogo, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetMenusLinktreeQuery } from "../graphql/generated";

export function Header() {
  const [open, setOpen] = useState(false);
  const { data } = useGetMenusLinktreeQuery();

  return (
    <header className="fixed w-full justify-center m-auto py-5 bg-rose-400 drop-shadow-lg z-50 antialiased">
      <nav className="md:w-[980px] mx-auto flex items-center justify-between px-4">
        <Link to="/" className="group">
          <h3 className="text-lg text-black-100 transition-all duration-300 uppercase flex flex-col items-center relative z-30">
            Thais Reis
            <div className="relative before:bg-white-100 before:content-[''] before:w-[80px] before:h-[0.1rem] before:block  before:relative"></div>
          </h3>
        </Link>
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
              className="text-md relative text-black-100 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-black-100 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              className="text-md relative text-black-100 hover:text-yellow-800 after:block after:w-[0] after:hover:w-[100%] after:bg-yellow-800 after:absolute after:content-[''] after:h-1 after:transition-all duration-300"
              href="#"
            >
              Equipe
            </a>
          </li>
        </ul>
        <div className="flex flex-col">
          <a
            href="#"
            className="gap-2 hidden md:flex items-center text-black-100"
          >
            <WhatsappLogo size={32} />
            45999741775
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <List className="text-black-100" size={32} />
        </button>
      </nav>
      <nav
        className={classNames(
          "z-[100] bg-rose-400 fixed w-screen top-0 w-[70%] h-screen flex flex-col items-start transition-all duration-300 shadow-xl",
          {
            "right-[0]": open === true,
            "right-[-100%]": open === false,
          }
        )}
      >
        <div className="flex w-full p-3 justify-end">
          <button
            className="flex flex-col justify-end"
            onClick={() => setOpen(!open)}
          >
            <X size={32} />
          </button>
        </div>

        <div>
          <ul className="flex flex-col gap-4 mt-6 ml-6 mb-12">
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
        </div>
        <div className="p-1 ml-4">
          <ul className="flex gap-2">
            {data?.menus.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="hover:text-gray-200 transition-all duration-300"
                    target={"_blank"}
                  >
                    <i className={`${menu.icone} text-4xl`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
