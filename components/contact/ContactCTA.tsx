export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-24">

      <div className="absolute inset-0 bg-[url('/mountain-bg.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <span className="font-semibold uppercase tracking-[4px] text-orange-400">
          Penitentes Park
        </span>

        <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
          Prepará tu próxima aventura en la montaña
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Viví experiencias únicas en Mendoza con actividades,
          naturaleza y paisajes increíbles en plena Cordillera de los Andes.
        </p>


        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#"
            className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Reservar ahora
          </a>


          <a
            href="#"
            className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-950"
          >
            Contactanos
          </a>

        </div>


      </div>

    </section>
  );
}