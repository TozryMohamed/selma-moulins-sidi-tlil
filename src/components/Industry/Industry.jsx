import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { INDUSTRY_IMAGES } from '../../data/siteData'

export default function Industry() {
  const { t } = useTranslation()
  const [imgA, imgB, imgC] = INDUSTRY_IMAGES

  return (
    <section className="section-pad bg-indigo-950 py-24 text-white lg:py-32">
      <div className="container-max grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow !text-wheat-300">{t('industry.eyebrow')}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{t('industry.title')}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">{t('industry.text')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
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
