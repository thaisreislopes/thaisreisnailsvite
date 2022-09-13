import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col w-full bg-black-100 text-center pt-8">
      <div className="flex flex-row gap-2 justify-center mb-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="fill-rose-300" />
        </Link>
      </div>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 max-w-5xl md:m-auto gap-5">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
            Site
          </h3>
          <ul className="text-left text-rose-300">
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
          <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
            Contato
          </h3>
          <ul className="text-left text-rose-300">
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
          <h3 className="text-sm font-bold text-left text-white lg:text-lg  dark:text-gray-600">
            Mais informações
          </h3>
          <ul className="text-left text-rose-300">
            <li>Rua Renato Montemezzo, 165</li>
            <li>Santa Terezinha de Itaipu</li>
            <li>85875-000</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm text-left font-bold text-white lg:text-lg  dark:text-gray-600">
            Social
          </h3>
          <ul className="flex gap-2 text-rose-300">
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
        <p className="text-sm text-gray-200">
          Copyright by Anderson Lopes. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
