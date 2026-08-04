import PromotionCard from "./PromotionCard";
import { promotions } from "./promotions";

export default function Promotions() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-500">
            Promociones
          </span>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Aprovechá las Mejores Ofertas
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Beneficios exclusivos para que disfrutes más de la montaña.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              {...promotion}
            />
          ))}

        </div>

      </div>
    </section>
  );
}