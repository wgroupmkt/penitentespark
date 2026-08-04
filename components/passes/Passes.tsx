import PassCard from "./PassCard";
import { passes } from "./passes";

export default function Passes() {
  return (
    <section className="bg-blue-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            Tickets
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Elegí tu Pase
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200">
            Comprá online y asegurá tu lugar para disfrutar
            la montaña sin esperas.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {passes.map((pass) => (
            <PassCard key={pass.id} {...pass} />
          ))}

        </div>

      </div>

    </section>
  );
}