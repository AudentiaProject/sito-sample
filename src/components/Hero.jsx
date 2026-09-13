import { Phone, FileText, Clock, ShieldCheck, Wrench } from 'lucide-react'

const badges = [
  { icon: Clock, text: 'Disponibili 24/7' },
  { icon: ShieldCheck, text: 'Lavoro garantito' },
  { icon: Wrench, text: 'Tecnici certificati' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-900/40" />

      {/* Contenuto */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6">
        <p
          className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <Clock className="h-4 w-4 text-orange-400" />
          Pronto intervento attivo ora
        </p>

        <h1
          className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: '0.25s' }}
        >
          Interventi Idraulici{' '}
          <span className="text-orange-500">Rapidi</span> e Risolutivi
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl"
          style={{ animationDelay: '0.4s' }}
        >
          Riparazioni, installazioni e pronto intervento 24/7 nella tua zona.
          Tecnici qualificati, preventivi trasparenti, risultati garantiti.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="tel:+390000000000"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(249,115,22,0.55)] transition-all hover:shadow-[0_0_45px_rgba(249,115,22,0.75)] hover:scale-105 hover:bg-orange-700 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Pronto Intervento 24/7
          </a>
          <a
            href="#contatti"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
          >
            <FileText className="h-5 w-5" />
            Richiedi un Preventivo
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          style={{ animationDelay: '0.7s' }}
        >
          {badges.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-sm font-medium text-blue-200">
              <Icon className="h-4 w-4 text-orange-400" />
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* Shape divider verso la sezione successiva (bg-slate-50) */}
      <svg
        className="absolute bottom-0 left-0 z-10 h-16 w-full text-slate-50 sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,60 C240,100 480,20 720,45 C960,70 1200,30 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}
