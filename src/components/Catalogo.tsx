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
        <span className="text-sm text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          laborum quasi, sapiente iure mollitia architecto qui totam.
        </span>
      </div>
      <div className="flex justify-center p-4">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {data?.catalogs.map((catalogo) => {
            return (
              <li
                className="bg-rose-400 rounded-md flex items-center justify-center p-3"
                key={catalogo.id}
              >
                <div className="text-center flex flex-col items-center">
                  <h3 className="text-sm">{catalogo.name}</h3>
                  <strong className="text-sm">R$ {catalogo.value}</strong>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
