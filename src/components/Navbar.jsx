import { useState } from 'react'
import { Droplets, Phone, Menu, X } from 'lucide-react'

const links = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-blue-900">
          <Droplets className="h-7 w-7" />
          <span className="text-xl font-bold tracking-tight">
            Idro<span className="text-orange-600">Service</span>
          </span>
        </a>

        {/* Link desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+390000000000"
            className="hidden items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-700 hover:shadow-lg sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Chiama Ora
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Apri menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+390000000000"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Chiama Ora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
