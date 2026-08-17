import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Gem, Handshake, Wrench, Target } from 'lucide-react'
import { VALUES_ITEMS } from '../../data/siteData'

const ICONS = { quality: Gem, reliability: Handshake, expertise: Wrench, commitment: Target }

export default function Values() {
  const { t } = useTranslation()

  return (
    <section className="section-pad bg-white py-24 lg:py-32">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="eyebrow">{t('values.eyebrow')}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl">
            {t('values.title')}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES_ITEMS.map((key, i) => {
            const Icon = ICONS[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl2 border border-indigo-950/8 p-7 transition-all duration-300 hover:border-wheat-500 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wheat-50 text-wheat-700 transition-colors group-hover:bg-wheat-500 group-hover:text-indigo-950">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-indigo-950">{t(`values.items.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-950/65">
                  {t(`values.items.${key}.text`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
