import GalleryItem from "./GalleryItem";
import { gallery } from "./images";

export default function Gallery() {

  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-end justify-between">

          <div>

            <span className="font-semibold uppercase tracking-[4px] text-orange-500">
              Galería
            </span>

            <h2 className="mt-4 text-5xl font-black text-blue-950">
              Viví la Experiencia
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Descubrí los paisajes, las actividades y los momentos
              inolvidables que hacen único a Penitentes Park.
            </p>

          </div>


          <button className="hidden rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 lg:block">
            Ver Galería Completa
          </button>


        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (
            <GalleryItem
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>


      </div>

    </section>
  );
}