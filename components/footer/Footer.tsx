export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        <div>
          <h3 className="text-2xl font-black">
            Penitentes Park
          </h3>

          <p className="mt-4 text-slate-400">
            Aventura, naturaleza y experiencias únicas
            en la Cordillera de los Andes.
          </p>
        </div>


        <div>
          <h4 className="font-bold">
            Navegación
          </h4>

          <ul className="mt-4 space-y-3 text-slate-400">
            <li>Inicio</li>
            <li>Experiencias</li>
            <li>Actividades</li>
            <li>Galería</li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold">
            Actividades
          </h4>

          <ul className="mt-4 space-y-3 text-slate-400">
            <li>Montaña</li>
            <li>Turismo aventura</li>
            <li>Familia</li>
            <li>Nieve</li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold">
            Contacto
          </h4>

          <ul className="mt-4 space-y-3 text-slate-400">
            <li>Mendoza, Argentina</li>
            <li>WhatsApp</li>
            <li>Email</li>
          </ul>
        </div>


      </div>


      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} Penitentes Park. Todos los derechos reservados.

      </div>

    </footer>
  );
}