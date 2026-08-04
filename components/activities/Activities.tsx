import ActivityCard from "./ActivityCard";
import { activities } from "./activities";

export default function Activities() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Experiencias
            </span>

            <h2 className="mt-3 text-5xl font-black text-blue-950">
              Actividades Destacadas
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-gray-600">
              Viví la montaña durante todo el año con actividades
              para toda la familia.
            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              {...activity}
            />
          ))}

        </div>

      </div>

    </section>
  );
}