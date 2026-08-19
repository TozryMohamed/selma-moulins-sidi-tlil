// src/components/AboutPage/AboutPage.jsx

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import About from '../About/About.jsx'
import Products from '../Products/Products.jsx'
import Process from '../Process/Process.jsx'
import Quality from '../Quality/Quality.jsx'
import Values from '../Values/Values.jsx'
import Industry from '../Industry/Industry.jsx'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <section id="a-propos" className="scroll-mt-20">
      {/* Hero de la page À propos */}
      <div className="section-pad bg-indigo-950 py-12 sm:py-16 md:py-20 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow !text-wheat-300 text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-6 sm:w-8 bg-wheat-300" />
              <span>{t('aboutPage.eyebrow') || 'À propos'}</span>
              <span className="h-px w-6 sm:w-8 bg-wheat-300" />
            </p>
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('aboutPage.title') || 'À propos de SELMA'}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
              {t('aboutPage.description') || 'Découvrez notre entreprise, nos produits, notre activité et notre engagement pour la qualité.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Toutes les sections existantes */}
      <About />
      <Products />
      <Process />
      <Industry />
      <Quality />
      <Values />
    </section>
  )
}