interface Props {
  title: string;
  price: string;
  description: string;
  featured: boolean;
}

export default function PassCard({
  title,
  price,
  description,
  featured,
}: Props) {
  return (
    <div
      className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-2 ${
        featured
          ? "bg-orange-500 text-white shadow-2xl"
          : "bg-white text-slate-900 shadow-lg"
      }`}
    >
      {featured && (
        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase text-orange-500">
          Más vendido
        </span>
      )}

      <h3 className="mt-6 text-3xl font-black">
        {title}
      </h3>

      <p className="mt-3 opacity-80">
        {description}
      </p>

      <p className="mt-8 text-5xl font-black">
        {price}
      </p>

      <button
        className={`mt-8 w-full rounded-xl py-4 font-bold transition ${
          featured
            ? "bg-white text-orange-500 hover:bg-slate-100"
            : "bg-blue-900 text-white hover:bg-blue-800"
        }`}
      >
        Comprar Ahora
      </button>
    </div>
  );
}