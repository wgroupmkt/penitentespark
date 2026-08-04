import Image from "next/image";

interface Props {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  avatar,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-4">

        <Image
          src={avatar}
          alt={name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>

      </div>

      <div className="mt-5 text-yellow-500 text-xl">
        {"★".repeat(rating)}
      </div>

      <p className="mt-5 text-slate-600 leading-7">
        "{text}"
      </p>

    </div>
  );
}