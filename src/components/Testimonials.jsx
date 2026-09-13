import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    text: 'Hanno risolto una perdita enorme alle 2 di notte. Arrivati in mezz\'ora, professionali e onesti nel prezzo. Fantastici!',
    name: 'Marco Rossi',
    role: 'Cliente residenziale',
  },
  {
    text: 'Ristrutturato il bagno in due settimane, chiavi in mano. Lavoro impeccabile e cantiere sempre pulito.',
    name: 'Giulia Bianchi',
    role: 'Ristrutturazione bagno',
  },
  {
    text: 'Caldaia sostituita in giornata con preventivo rispettato al centesimo. Finalmente un idraulico di fiducia.',
    name: 'Antonio Ferri',
    role: 'Installazione caldaia',
  },
  {
    text: 'Scarico ostruito risolto in un\'ora, la domenica mattina. Cortesi, puntuali e molto preparati. Consigliatissimi.',
    name: 'Laura Colombo',
    role: 'Disostruzione scarichi',
  },
]

export default function Testimonials() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="recensioni" ref={sectionRef} className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Recensioni
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            La fiducia dei nostri clienti è la nostra migliore referenza.
          </p>
        </div>

        {/* Griglia recensioni */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <Quote className="h-8 w-8 text-orange-500/60" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 italic leading-relaxed text-slate-700">
                "{review.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-blue-950">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
