"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Actividades", href: "/actividades" },
  { name: "Pases", href: "/pases" },
  { name: "Restaurante", href: "/restaurante" },
  { name: "Eventos", href: "/eventos" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-blue-950/95 shadow-xl backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Mountain className="h-9 w-9 text-orange-500" />

          <div>

            <h2 className="text-xl font-black uppercase tracking-wide text-white">
              Penitentes
            </h2>

            <span className="text-xs uppercase tracking-[4px] text-blue-200">
              Park
            </span>

          </div>

        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-white transition hover:text-orange-400"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <Link
            href="/pases"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Comprar Pase
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="bg-blue-950 lg:hidden">

          <nav className="flex flex-col p-6">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-blue-900 py-4 text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/pases"
              className="mt-6 rounded-xl bg-orange-500 py-4 text-center font-semibold text-white"
            >
              Comprar Pase
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}