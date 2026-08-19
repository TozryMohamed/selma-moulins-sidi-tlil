import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BadgeCheck, Sparkles, ShieldCheck, Eye, RefreshCw, ScrollText } from 'lucide-react'
import { QUALITY_ITEMS } from '../../data/siteData'

const ICONS = {
  quality: BadgeCheck,
  hygiene: Sparkles,
  safety: ShieldCheck,
  control: Eye,
  regularity: RefreshCw,
  standards: ScrollText,
}

export default function Quality() {
  const { t } = useTranslation()

  return (
    <section id="qualite" className="section-pad bg-stone-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs sm:text-sm">{t('quality.eyebrow')}</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-indigo-950">
            {t('quality.title')}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-indigo-950/70">
            {t('quality.text')}
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {QUALITY_ITEMS.map((key, i) => {
            const Icon = ICONS[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 transition-shadow hover:shadow-soft"
              >
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                  <Icon size={16} className="sm:size-20" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-indigo-950">
                    {t(`quality.items.${key}.title`)}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-indigo-950/65">
                    {t(`quality.items.${key}.text`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}