import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ActivityCard({
  title,
  description,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <span className="mt-5 inline-flex font-semibold text-orange-500">
          Ver actividad →
        </span>
      </div>
    </Link>
  );
}