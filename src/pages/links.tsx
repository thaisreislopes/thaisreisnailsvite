import Logo from "../components/Logo";

export function Links() {
  return (
    <main className="bg-rose-300 flex flex-col justify-between w-screen h-screen p-6">
      <div>
        <div className="flex justify-center">
          <img
            className="w-[200px]"
            src="/images/logo-thais-reis-nails-rose.jpeg"
            alt=""
          />
        </div>

        <div className="flex justify-center mt-6">
          <ul className="text-center flex flex-col gap-4">
            <li>
              <a
                className="w-[280px] block border-yellow-800 border rounded-lg px-8 py-3 text-yellow-800 hover:bg-rose-450 transition-all duration-300 hover:border-rose-500"
                href="https://www.instagram.com/thaisr.espaconails/"
                target="_black"
              >
                @thaisr.espaconails
              </a>
            </li>
            <li>
              <a
                className="w-[280px] block border-yellow-800 border rounded-lg px-8 py-3 text-yellow-800 hover:bg-rose-450 transition-all duration-300 hover:border-rose-500"
                href="https://api.whatsapp.com/send?phone=5545920013475&text=Ol%C3%A1%20Thais!%20Quero%20agendar%20meu%20horario"
                target="_black"
              >
                Agendamentos
              </a>
            </li>
            <li>
              <a
                className="w-[280px] block border-yellow-800 border rounded-lg px-8 py-3 text-yellow-800 hover:bg-rose-450 transition-all duration-300 hover:border-rose-500"
                href="https://www.facebook.com/thaisr.espaconails"
                target="_black"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="w-[280px] block border-yellow-800 border rounded-lg px-8 py-3 text-yellow-800 hover:bg-rose-450 transition-all duration-300 hover:border-rose-500"
                href="https://www.google.com.br/maps/place/Thais+Reis+Espa%C3%A7o+Nails/@-25.4437629,-54.4029315,21z/data=!4m19!1m13!4m12!1m6!1m2!1s0x0:0x5bab7dd545384185!2sThais+Reis+Espa%C3%A7o+Nails!2m2!1d-54.4026065!2d-25.4439224!1m3!2m2!1d-54.4028833!2d-25.4437278!3e0!3m4!1s0x94f6a322192e8c7d:0x5bab7dd545384185!8m2!3d-25.4438232!4d-54.4026064"
                target="_black"
              >
                Localização
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-sm text-yellow-800">
        <span>Copyright by Anderson Lopes. All Rights Reserved</span>
      </div>
    </main>
  );
}
