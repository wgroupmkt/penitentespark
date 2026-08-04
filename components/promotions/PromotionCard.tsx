interface Props {
  title: string;
  description: string;
  badge: string;
}

export default function PromotionCard({
  title,
  description,
  badge,
}: Props) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase text-white">
        {badge}
      </span>

      <h3 className="mt-6 text-3xl font-black text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <button className="mt-8 font-semibold text-orange-500">
        Ver promoción →
      </button>

    </div>
  );
}