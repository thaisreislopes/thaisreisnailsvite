import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col w-full bg-th-gradiente text-center pt-8">
      <div className="flex flex-row gap-2 justify-center mb-6">
        <Link to="/" className="flex items-center gap-2">
          <h3 className="text-lg text-black-100 transition-all duration-300 uppercase flex flex-col items-center relative z-30">
            Thais Reis
            <div className="relative before:bg-white-100 before:content-[''] before:w-[80px] before:h-[0.1rem] before:block  before:relative"></div>
          </h3>
        </Link>
      </div>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 max-w-5xl md:m-auto gap-5">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-800/50 lg:text-xl  dark:text-gray-600">
            Site
          </h3>
          <ul className="text-left text-black-800/50">
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Catalogo
              </a>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Quem somos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Equipe
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-800/50 lg:text-xl  dark:text-gray-600">
            Contato
          </h3>
          <ul className="text-left text-black-800/50">
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Localização
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Agendamento
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition-all duration-300"
              >
                Suporte
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-black-800/50 lg:text-xl  dark:text-gray-600">
            Mais informações
          </h3>
          <ul className="text-left text-black-800/50">
            <li>Rua Renato Montemezzo, 165</li>
            <li>Santa Terezinha de Itaipu</li>
            <li>85875-000</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg text-left font-bold text-black-800/50 lg:text-xl  dark:text-gray-600">
            Social
          </h3>
          <ul className="flex gap-2 text-black-800/50">
            <li>
              <a
                href="https://www.instagram.com/plantaosti"
                className="hover:text-gray-200 transition-all duration-300"
                target={"_blank"}
              >
                <InstagramLogo size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/plantaosti"
                className="hover:text-gray-200 transition-all duration-300"
                target={"_blank"}
              >
                <FacebookLogo size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/plantaosti"
                className="hover:text-gray-200 transition-all duration-300"
                target={"_blank"}
              >
                <WhatsappLogo size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-white-100">
          Copyright by Thais Reis Nails. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
