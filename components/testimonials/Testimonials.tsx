import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";

export default function Testimonials() {
  return (
    <section className="bg-blue-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Opiniones
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Lo que dicen nuestros visitantes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-blue-200 text-lg">
            Miles de personas ya disfrutaron Penitentes Park.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}

        </div>

      </div>
    </section>
  );
}