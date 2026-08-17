import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../../data/siteData'

export default function Products() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar')

  return (
    <section id="produits" className="section-pad bg-white py-24 lg:py-32">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="eyebrow">{t('products.eyebrow')}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-indigo-950/70">{t('products.text')}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card group flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={t(`products.items.${product.key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-indigo-950">
                  {t(`products.items.${product.key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-indigo-950/70">
                  {t(`products.items.${product.key}.text`)}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-wheat-700 transition-colors hover:text-wheat-600"
                >
                  {t('products.learnMore')}
                  <ArrowRight size={15} className={isRtl ? 'rotate-180' : ''} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
