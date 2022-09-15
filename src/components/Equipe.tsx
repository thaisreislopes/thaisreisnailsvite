export function Equipe() {
  return (
    <section className="w-full bg-slate-200">
      <div className="relative transition-all m-auto p-6 w-full max-w-[1180px]">
        <div className="relative flex flex-col items-center">
          <div>
            <h3 className="mb-6 text-center text-2xl text-yellow-800 font-bold">
              Equipe
            </h3>
            <p className="text-center mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              tempora necessitatibus voluptatum aperiam saepe aliquam.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 group">
            <img
              className="w-[150px] rounded-[50%] mb-1 group-hover:animate-pulse transition-all"
              src="/images/equipe/Thais-Reis-Lopes-q.jpg"
              alt=""
            />
            <h3 className="text-lg font-bold">Thais F. Reis Lopes</h3>
            <span className="text-sm">CEO | Nails Design</span>
          </div>
          <div className="flex flex-col md:flex-row">
            <ul className="grid grid-cols-3 gap-2 md:gap-6">
              <li className="flex flex-col items-center group">
                <img
                  className="rounded-[50%] w-20 h-20 md:w-32 md:h-32 mb-1 group-hover:animate-pulse transition-all"
                  src="/images/equipe/01.jpg"
                  alt=""
                />
                <h3 className="text-md md:text-lg font-bold">Naiara</h3>
                <span className="text-sm">Nail Design</span>
              </li>
              <li className="flex flex-col items-center  group">
                <img
                  className="rounded-[50%] w-20 h-20 md:w-32 md:h-32 mb-1 group-hover:animate-pulse transition-all"
                  src="/images/equipe/02.jpg"
                  alt=""
                />
                <h3 className="text-md md:text-lg font-bold">Ivete</h3>
                <span className="text-sm">Manicure</span>
              </li>
              <li className="flex flex-col items-center  group">
                <img
                  className="rounded-[50%] w-20 h-20 md:w-32 md:h-32 mb-1 group-hover:animate-pulse transition-all"
                  src="/images/equipe/03.jpg"
                  alt=""
                />
                <h3 className="text-md md:text-lg font-bold">Rose</h3>
                <span className="text-sm">Manicure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
