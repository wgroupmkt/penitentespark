import ServiceCard from "./ServiceCard";
import { services } from "./services";

export default function Services() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            Servicios
          </span>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Todo lo que Necesitás
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Pensamos cada detalle para que disfrutes una experiencia cómoda,
            segura y completa durante tu visita.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}