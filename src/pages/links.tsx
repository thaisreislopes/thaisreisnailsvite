import { SpinnerGap } from "phosphor-react";
import { useGetMenusLinktreeQuery } from "../graphql/generated";

export function Links() {
  const { data } = useGetMenusLinktreeQuery();

  if (!data) {
    return (
      <div className="flex flex-1 justify-center items-center w-screen h-screen bg-rose-300">
        <button
          type="button"
          className="flex items-center animate-pulse"
          disabled
        >
          <SpinnerGap
            size={48}
            className="animate-spin h-8 w-8 mr-3 text-yellow-800"
          />
          <span className=" text-yellow-800">Carregando ...</span>
        </button>
      </div>
    );
  }
  return (
    <main className="bg-rose-300 flex flex-col justify-between w-screen h-screen p-6">
      <div>
        <div className="flex justify-center">
          <img
            className="w-[200px]"
            src="/images/logo-thais-reis-nails-rose.jpeg"
            alt="Logo Thais Reis Nails Rose"
          />
        </div>

        <div className="flex justify-center mt-6">
          <ul className="text-center flex flex-col gap-4">
            {data.menus.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    className="w-[280px] block border-yellow-800 border rounded-lg px-8 py-3 text-yellow-800 hover:bg-rose-450 transition-all duration-300 hover:border-rose-500"
                    href={menu.link}
                    target="_black"
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-sm text-yellow-800">
        <span>Copyright by Anderson Lopes. All Rights Reserved</span>
      </div>
    </main>
  );
}
