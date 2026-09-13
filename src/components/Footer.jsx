import { Droplets, Globe, Camera, AtSign } from 'lucide-react'

const socials = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: AtSign, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-blue-950 py-10 text-blue-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white">
          <Droplets className="h-6 w-6" />
          <span className="text-lg font-bold">
            Idro<span className="text-orange-500">Service</span>
          </span>
        </a>

        {/* Social */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-full border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-orange-500/50 hover:text-orange-500"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Link legali */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Cookie Policy
          </a>
          <span className="text-blue-400">P.IVA 01234567890</span>
        </nav>

        <p className="text-sm text-blue-400">
          © {new Date().getFullYear()} IdroService. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
