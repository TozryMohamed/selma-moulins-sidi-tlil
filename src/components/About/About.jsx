import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Wheat, Factory, ShieldCheck } from 'lucide-react'
import { IMAGES } from '../../data/siteData'

const STATS = [
  { key: 'stat1', icon: ShieldCheck },
  { key: 'stat2', icon: Factory },
  { key: 'stat3', icon: Wheat },
  { key: 'stat4', icon: MapPin },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="entreprise" className="section-pad bg-stone-50 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container-max grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
        {/* Colonne texte */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <p className="eyebrow text-xs sm:text-sm">{t('about.eyebrow')}</p>

          {/* Titre */}
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-indigo-950">
            {t('about.title')}
          </h2>

          {/* Paragraphes */}
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-indigo-950/75">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          {/* Statistiques - Correction responsive */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-5">
            {STATS.map(({ key, icon: Icon }) => (
              <div key={key} className="card flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-wheat-50 text-wheat-700">
                  <Icon size={16} className="sm:size-18" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-indigo-950 leading-tight">
                  {t(`about.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Colonne image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-4 sm:mt-0"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl2 shadow-soft">
            <img
              src={IMAGES.silos}
              alt="Silos et infrastructure industrielle de transformation des céréales"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Carte SELMA - cachée sur mobile */}
          <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 hidden sm:block w-40 sm:w-52 rounded-xl2 bg-indigo-950 p-4 sm:p-5 text-white shadow-soft rtl:-right-6 rtl:left-auto">
            <p className="text-xl sm:text-2xl font-bold text-wheat-300">SELMA</p>
            <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-white/70">
              سالمة — Société des Moulins Sidi Tlil
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}