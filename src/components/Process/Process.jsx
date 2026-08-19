import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Wheat, ClipboardCheck, Cog, Factory, PackageCheck } from 'lucide-react'
import { PROCESS_STEPS } from '../../data/siteData'

const ICONS = { s1: Wheat, s2: ClipboardCheck, s3: Cog, s4: Factory, s5: PackageCheck }

export default function Process() {
  const { t } = useTranslation()

  return (
    <section id="activite" className="section-pad bg-indigo-950 py-16 sm:py-20 md:py-24 lg:py-32 text-white">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="eyebrow !text-wheat-300 text-xs sm:text-sm">{t('process.eyebrow')}</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {t('process.title')}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-white/70">
            {t('process.text')}
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="absolute start-0 top-8 hidden h-px w-full bg-gradient-to-r from-wheat-500/60 via-white/20 to-transparent lg:block" />
          <ol className="grid gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((stepKey, i) => {
              const Icon = ICONS[stepKey]
              return (
                <motion.li
                  key={stepKey}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col"
                >
                  <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-wheat-500 text-indigo-950 shadow-soft">
                    <Icon size={22} className="sm:size-26" />
                  </div>
                  <span className="mt-4 sm:mt-5 font-display text-xs font-semibold tracking-widest text-wheat-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 sm:mt-2 text-base sm:text-lg font-bold">
                    {t(`process.steps.${stepKey}.title`)}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-sm leading-relaxed text-white/65">
                    {t(`process.steps.${stepKey}.text`)}
                  </p>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <p className="mt-12 sm:mt-16 border-t border-white/10 pt-4 sm:pt-6 text-xs text-white/50">
          {t('process.note')}
        </p>
      </div>
    </section>
  )
}