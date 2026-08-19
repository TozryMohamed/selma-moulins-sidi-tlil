import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { INDUSTRY_IMAGES } from '../../data/siteData'

export default function Industry() {
  const { t } = useTranslation()
  const [imgA, imgB, imgC] = INDUSTRY_IMAGES

  return (
    <section className="section-pad bg-indigo-950 py-16 sm:py-20 md:py-24 lg:py-32 text-white">
      <div className="container-max grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow !text-wheat-300 text-xs sm:text-sm">{t('industry.eyebrow')}</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {t('industry.title')}
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/70">
            {t('industry.text')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-2 sm:gap-4"
        >
          <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-xl2 shadow-soft">
            <img src={imgA} alt="Silos industriels de stockage des céréales" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl2 shadow-soft">
            <img src={imgB} alt="Infrastructure industrielle de production" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl2 shadow-soft">
            <img src={imgC} alt="Grains de céréales, matière première de la transformation" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}