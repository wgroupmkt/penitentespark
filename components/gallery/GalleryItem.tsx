import Image from "next/image";

interface GalleryItemProps {
  image: string;
  title: string;
}

export default function GalleryItem({
  image,
  title,
}: GalleryItemProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">

      <div className="relative h-72 w-full">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-blue-950">
          {title}
        </h3>

      </div>

    </div>
  );
}