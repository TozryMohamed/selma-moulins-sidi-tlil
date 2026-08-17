import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { IMAGES } from '../../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar')

  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-indigo-950">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroWheatField}
          alt=""
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/70 to-indigo-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-indigo-950/30 to-transparent" />
      </div>

      <div className="section-pad container-max relative z-10 pt-24">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="eyebrow !text-wheat-300"
        >
          <span className="h-px w-8 bg-wheat-300" />
          <span className="text-base font-semibold tracking-wider sm:text-lg md:text-xl">
            SELMA — سالمة
          </span>
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mt-5 max-w-xl text-lg font-medium text-wheat-100 sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-4 max-w-xl text-base leading-relaxed text-white/80"
        >
          {t('hero.text')}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#entreprise" className="btn-primary">
            {t('hero.ctaPrimary')}
            <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
          </a>
          <a href="#produits" className="btn-secondary">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#entreprise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/70"
      >
        {t('hero.scroll')}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}