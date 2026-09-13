import {
  AlarmClock,
  Flame,
  Bath,
  Waves,
  ShieldCheck,
  Snowflake,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: AlarmClock,
    title: 'Pronto Intervento',
    description: 'Ricerca e riparazione perdite, 24 ore su 24. Arriviamo in tempi rapidi per ogni emergenza.',
  },
  {
    icon: Flame,
    title: 'Caldaie e Riscaldamento',
    description: 'Assistenza, installazione e manutenzione di caldaie e impianti di riscaldamento.',
  },
  {
    icon: Bath,
    title: 'Ristrutturazione Bagni',
    description: 'Rifacimento completo del bagno chiavi in mano, dal progetto alla consegna.',
  },
  {
    icon: Waves,
    title: 'Disostruzione e Spurghi',
    description: 'Sturatura tubature, spurgo fognature e pulizia scarichi con attrezzature professionali.',
  },
  {
    icon: ShieldCheck,
    title: 'Impianti a Gas',
    description: 'Installazione e certificazione impianti a gas a norma di legge, in piena sicurezza.',
  },
  {
    icon: Snowflake,
    title: 'Climatizzazione',
    description: 'Installazione e manutenzione di climatizzatori e sistemi di condizionamento.',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Cosa facciamo
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            I Nostri Servizi
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Soluzioni complete per la casa e l'azienda: dalla piccola riparazione
            alla grande ristrutturazione.
          </p>
        </div>

        {/* Griglia card */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-4 transition-colors duration-300 group-hover:bg-orange-50">
                <Icon className="h-10 w-10 text-blue-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              <a
                href="#contatti"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 transition-colors group-hover:text-orange-600"
              >
                Scopri di più
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
