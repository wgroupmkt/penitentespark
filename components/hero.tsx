import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden">

      {/* Imagen / Video */}
      <div className="absolute inset-0">
        {/* VIDEO
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        */}

        
        <Image
          src="/penitentes.webp"
          alt="Penitentes Park"
          fill
          className="object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/30" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 pb-12">

        {/* Texto */}
        <div className="max-w-xl">

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
            Mendoza • Argentina
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none p-12 text-white">
            Penitentes
            <br />
            Park
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-blue-100">
            Viví la montaña durante todo el año con actividades para toda la
            familia, gastronomía y vistas únicas de la Cordillera de los Andes.
          </p>
        
        <div className="mt-10 flex w-full gap-3 pb-30">
         
          <Link
           
           href="/pases"
          
            className="flex-1 rounded-xl bg-orange-500 py-4 text-center text-sm md:text-base font-bold text-white transition hover:bg-orange-600"
          
          >
           
            Comprar Pase
         
          </Link>

          
          <Link
           
           href="/actividades"
           
            className="flex-1 rounded-xl border border-white py-4 text-center text-sm md:text-base font-bold text-white transition hover:bg-white hover:text-blue-900"
          
          >
           
            Ver Actividades
          
          </Link>
        
        </div>

        </div>

        {/* Tarjeta clima */}
        <div className="hidden w-[360px] rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg lg:block">

          <h3 className="text-lg font-bold uppercase text-white">
            ❄ Probabilidad de nieve
          </h3>

          <div className="mt-4 text-6xl font-black text-white">
            60%
          </div>

          <div className="mt-8 space-y-4 text-white">

            <div className="flex justify-between">
              <span>Temperatura</span>
              <span>-1°C</span>
            </div>

            <div className="flex justify-between">
              <span>Viento</span>
              <span>20 km/h</span>
            </div>

            <div className="flex justify-between">
              <span>Estado rutas</span>
              <span>Habilitadas</span>
            </div>

            <div className="flex justify-between">
              <span>Altura nieve</span>
              <span>40 cm</span>
            </div>

            <div className="flex justify-between">
              <span>Horario</span>
              <span>09:00 - 17:00</span>
            </div>

          </div>

          <button className="mt-8 w-full rounded-xl border border-white py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900">
            Ver Pronóstico
          </button>

        </div>

      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-950/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8 px-6 py-6 text-white">

          <div>
            <p className="text-3xl font-bold">2500+</p>
            <span className="text-sm text-blue-200">
              Metros sobre el nivel del mar
            </span>
          </div>

          <div>
            <p className="text-3xl font-bold">365</p>
            <span className="text-sm text-blue-200">
              Días abierto
            </span>
          </div>

          <div>
            <p className="text-3xl font-bold">15+</p>
            <span className="text-sm text-blue-200">
              Actividades
            </span>
          </div>

          <div>
            <p className="text-3xl font-bold">★★★★★</p>
            <span className="text-sm text-blue-200">
              Miles de visitantes
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}