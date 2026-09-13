import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contacts = [
  { icon: Phone, title: 'Telefono', lines: ['+39 000 000 0000', 'Pronto intervento 24/7'] },
  { icon: Mail, title: 'Email', lines: ['info@idroservice.it', 'Risposta entro 24 ore'] },
  { icon: MapPin, title: 'Indirizzo', lines: ['Via Roma 123', '20100 Milano (MI)'] },
  { icon: Clock, title: 'Orari di apertura', lines: ['Lun - Ven: 8:00 - 19:00', 'Sab: 9:00 - 13:00'] },
]

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20'

export default function Contact() {
  return (
    <section id="contatti" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Contattaci
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Richiedi un Intervento o un Preventivo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Compila il modulo o chiamaci direttamente: ti risponderemo in tempi rapidissimi.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonna sinistra: info + mappa */}
          <div className="flex flex-col gap-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {contacts.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Icon className="h-7 w-7 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950">{title}</h3>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mappa */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title="Mappa IdroService"
                src="https://www.google.com/maps?q=Via+Roma+Milano&output=embed"
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
              />
            </div>
          </div>

          {/* Colonna destra: modulo */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Nome e Cognome
                </label>
                <input id="nome" type="text" placeholder="Mario Rossi" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Telefono
                </label>
                <input id="telefono" type="tel" placeholder="+39 333 000 0000" className={inputClass} required />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input id="email" type="email" placeholder="mario.rossi@email.it" className={inputClass} required />
            </div>

            <div className="mt-5">
              <label htmlFor="servizio" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Servizio Richiesto
              </label>
              <select id="servizio" className={inputClass} required defaultValue="">
                <option value="" disabled>
                  Seleziona un servizio
                </option>
                <option>Pronto Intervento</option>
                <option>Caldaie e Riscaldamento</option>
                <option>Ristrutturazione Bagni</option>
                <option>Disostruzione e Spurghi</option>
                <option>Impianti a Gas</option>
                <option>Climatizzazione</option>
                <option>Altro</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="messaggio" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                rows={4}
                placeholder="Descrivi brevemente il problema o la richiesta..."
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl"
            >
              <Send className="h-5 w-5" />
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
