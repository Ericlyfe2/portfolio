import { useScrollReveal } from '../hooks/useScrollReveal'

const shots = [
  {
    src: '/gallery-community-event.png',
    alt: 'Eric Asante with a colleague in front of a Future Ready and Our Supporting Community event backdrop.',
    title: 'Community & partners',
    subtitle: 'Industry collaborators and supporting organizations at a tech community event.',
  },
  {
    src: '/gallery-devfest-accra.png',
    alt: 'Eric Asante at DevFest Accra in front of the sponsor step-and-repeat backdrop.',
    title: 'DevFest Accra',
    subtitle: 'Google Developer Groups — celebrating Accra’s developer community.',
  },
]

function GalleryCard({ item, delay }) {
  const { ref, visible } = useScrollReveal()

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative transition-all duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div
        className="relative overflow-hidden rounded-2xl glass border border-[rgba(0,212,255,0.12)] p-2 sm:p-3
          shadow-card transition-all duration-500 hover:-translate-y-2
          hover:shadow-[0_28px_56px_rgba(0,0,0,0.45)] hover:border-cyan/25"
      >
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-purple
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="relative overflow-hidden rounded-xl bg-bg-base/70 aspect-[3/4] sm:aspect-[4/5]">
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center
              transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-90"
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(5,8,16,0.85) 100%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
            <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-sm mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EventGallery() {
  const header = useScrollReveal()

  return (
    <section id="gallery" className="relative z-10 section-padding bg-bg-3 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative">
        <div
          ref={header.ref}
          className={`mb-12 lg:mb-14 max-w-2xl transition-all duration-700
            ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-mono text-xs text-cyan uppercase tracking-[3px] mb-3">// moments</p>
          <h2 className="text-4xl font-bold mb-4">
            Out in the <span className="gradient-text">community</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Conferences, meetups, and the sponsors and peers that make Ghana’s tech scene thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {shots.map((item, i) => (
            <GalleryCard key={item.src} item={item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
