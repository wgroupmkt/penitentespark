import Image from "next/image";
import Feature from "./Feature";
import { features } from "./features";

export default function Restaurant() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Imagen */}

        <div className="relative h-[600px] overflow-hidden rounded-3xl">

          <Image
            src="/herradura.jpg"
            alt="La Herradura"
            fill
            className="object-cover transition duration-700 hover:scale-110"
          />

        </div>

        {/* Texto */}

        <div>

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            Gastronomía
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Restaurante
            <br />
            La Herradura
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            Disfrutá de la mejor gastronomía de montaña con una
            vista privilegiada a la Cordillera de los Andes.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item) => (
              <Feature key={item} text={item} />
            ))}

          </div>

          <div className="mt-12 flex gap-4">

            <button className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
              Ver Menú
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-100">
              Reservar Mesa
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}