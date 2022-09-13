import { PaperPlaneTilt } from "phosphor-react";

export function Newsletter() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-rose-450 py-9">
      <div className="md:w-[980px] mx-auto flex flex-col ">
        <h2 className="text-2xl text-center pb-4 font-bold text-yellow-800">
          Newsletter
        </h2>
        <div className="flex flex-col md:flex-row px-4 gap-4 w-full justify-around items-center">
          <div className="max-w-sm text-yellow-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            labore reprehenderit maiores. Dolore quidem vitae unde, voluptatem,
            nemo temporibus dolorem placeat labore consequuntur fugiat voluptas
            corporis perferendis consequatur quisquam laudantium?
          </div>
          <div className="flex items-center">
            <form action="" className="flex">
              <div className="bg-white md:w-[250px] py-4 px-3">
                <input
                  type="email"
                  name=""
                  id=""
                  className="p-1 outline-none text-yellow-800"
                />
              </div>
              <button className="bg-red-300 p-4">
                <PaperPlaneTilt size={32} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
