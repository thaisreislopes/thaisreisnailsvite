import { useGetCatalogQuery } from "../graphql/generated";

export function Catalogo() {
  const { data } = useGetCatalogQuery({
    variables: {
      limite: 6,
    },
  });
  console.log(data);
  return (
    <section className="flex flex-col items-center py-6">
      <div className="flex flex-col m-auto p-4">
        <h2 className="text-2xl text-center pb-4 font-bold text-yellow-800">
          Catálogo
        </h2>
        <p className="text-sm text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          laborum quasi, sapiente iure mollitia architecto qui totam.
        </p>
      </div>
      <div className="flex flex-col justify-center items-end p-4">
        <a
          className="w-[100px] flex justify-center py-3 my-2 text-yellow-800 font-bold underline hover:no-underline underline-offset-4 transition-all duration-300"
          href="#"
        >
          Ver todos
        </a>
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {data?.catalogs.map((catalogo) => {
            return (
              <li
                className="bg-rose-400 rounded-md flex items-center justify-center p-3"
                key={catalogo.id}
              >
                <div className="text-center flex flex-col items-center">
                  <h3 className="text-sm">{catalogo.name}</h3>
                  <strong className="text-sm">
                    {(catalogo.value / 100).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
