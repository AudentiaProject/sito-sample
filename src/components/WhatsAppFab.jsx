import { MessageCircle } from 'lucide-react'

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/390000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Anello pulsante */}
      <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-green-500 opacity-40" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-900/30 transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="h-8 w-8" />
      </span>
    </a>
  )
}
