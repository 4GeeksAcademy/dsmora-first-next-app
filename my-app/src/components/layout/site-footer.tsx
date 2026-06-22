import Link from "next/link";

const footerLinks = [
  { href: "/profile", label: "Privacidad" },
  { href: "/profile", label: "Terminos" },
  { href: "/profile", label: "Contacto" },
  { href: "/profile", label: "Newsletter" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-4xl font-black tracking-tight text-slate-200">AdventureHub</p>
          <p className="mt-2 text-sm text-slate-400">
            Curando experiencias extraordinarias para viajeros modernos.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500 md:px-8">
        © 2026 AdventureHub. Todos los derechos reservados.
      </div>
    </footer>
  );
}
