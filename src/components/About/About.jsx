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
    <section id="entreprise" className="section-pad bg-stone-50 py-24 lg:py-32">
      <div className="container-max grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl">
            {t('about.title')}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-indigo-950/75">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {STATS.map(({ key, icon: Icon }) => (
              <div key={key} className="card flex items-start gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wheat-50 text-wheat-700">
                  <Icon size={18} />
                </span>
                <span className="pt-2 text-sm font-semibold text-indigo-950">{t(`about.${key}`)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl2 shadow-soft">
            <img
              src={IMAGES.silos}
              alt="Silos et infrastructure industrielle de transformation des céréales"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-xl2 bg-indigo-950 p-5 text-white shadow-soft rtl:-right-6 rtl:left-auto sm:block">
            <p className="text-2xl font-bold text-wheat-300">SELMA</p>
            <p className="mt-1 text-xs leading-relaxed text-white/70">
              سلمة — Société des Moulins Sidi Tlil
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
