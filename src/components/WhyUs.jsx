import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Award, Wrench, Users, Clock } from 'lucide-react'

const points = [
  'Nessun costo nascosto: preventivo chiaro prima di iniziare',
  'Tecnici certificati e costantemente aggiornati',
  'Intervento garantito entro 1 ora dalla chiamata',
  'Ricambi originali e garanzia su ogni lavoro',
]

const stats = [
  { icon: Award, value: 15, prefix: '+', suffix: '', label: 'Anni di Esperienza' },
  { icon: Wrench, value: 2000, prefix: '+', suffix: '', label: 'Interventi Risolti' },
  { icon: Users, value: 100, prefix: '', suffix: '%', label: 'Clienti Soddisfatti' },
  { icon: Clock, value: 24, prefix: '', suffix: '/7', label: 'Pronto Intervento' },
]

function Counter({ value, prefix, suffix, start }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1800
    const startTime = performance.now()
    let raf

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // easing ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  return (
    <span className="bg-gradient-to-r from-sky-400 to-orange-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
      {prefix}
      {current.toLocaleString('it-IT')}
      {suffix}
    </span>
  )
}

export default function WhyUs() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="chi-siamo" ref={sectionRef} className="bg-blue-950 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Colonna sinistra */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Perché sceglierci
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Esperienza, Trasparenza e Puntualità
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-200">
            Da anni siamo il punto di riferimento per famiglie e aziende della
            zona. Ogni intervento è gestito con la massima cura, dal primo
            sopralluogo alla consegna finale.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
                <span className="text-blue-100">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonna destra: contatori */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map(({ icon: Icon, value, prefix, suffix, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-orange-500/40 sm:p-8"
            >
              <Icon className="mx-auto mb-4 h-8 w-8 text-orange-500" />
              <Counter value={value} prefix={prefix} suffix={suffix} start={visible} />
              <p className="mt-2 text-sm font-medium text-blue-200">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
