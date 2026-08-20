// import { useTranslation } from 'react-i18next'
// import { motion } from 'framer-motion'
// import { ArrowDown, ArrowRight } from 'lucide-react'
// import { IMAGES } from '../../data/siteData'

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
//   }),
// }

// export default function Hero() {
//   const { t, i18n } = useTranslation()
//   const isRtl = i18n.language?.startsWith('ar')

//   return (
//     <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-indigo-950">
//       <div className="absolute inset-0">
//         <img
//           src={IMAGES.heroWheatField}
//           alt=""
//           className="h-full w-full object-cover"
//           fetchpriority="high"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/70 to-indigo-950/30" />
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-indigo-950/30 to-transparent" />
//       </div>

//       <div className="section-pad container-max relative z-10 pt-24">
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           variants={fadeUp}
//           className="eyebrow !text-wheat-300"
//         >
//           <span className="h-px w-8 bg-wheat-300" />
//           <span className="text-base font-semibold tracking-wider sm:text-lg md:text-xl">
//             SELMA — سالمة
//           </span>
//         </motion.p>

//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeUp}
//           className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
//         >
//           {t('hero.title')}
//         </motion.h1>

//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           variants={fadeUp}
//           className="mt-5 max-w-xl text-lg font-medium text-wheat-100 sm:text-xl"
//         >
//           {t('hero.subtitle')}
//         </motion.p>

//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={3}
//           variants={fadeUp}
//           className="mt-4 max-w-xl text-base leading-relaxed text-white/80"
//         >
//           {t('hero.text')}
//         </motion.p>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           custom={4}
//           variants={fadeUp}
//           className="mt-10 flex flex-col gap-4 sm:flex-row"
//         >
//           <a href="#entreprise" className="btn-primary">
//             {t('hero.ctaPrimary')}
//             <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
//           </a>
//           <a href="#produits" className="btn-secondary">
//             {t('hero.ctaSecondary')}
//           </a>
//         </motion.div>
//       </div>

//       <motion.a
//         href="#entreprise"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.6 }}
//         className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/70"
//       >
//         {t('hero.scroll')}
//         <motion.span
//           animate={{ y: [0, 6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
//         >
//           <ArrowDown size={16} />
//         </motion.span>
//       </motion.a>
//     </section>
//   )
// }




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
      {/* Image de fond */}
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

      {/* Contenu principal */}
      <div className="section-pad container-max relative z-10 pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
        {/* Badge SELMA */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="eyebrow !text-wheat-300 text-xs sm:text-sm flex items-center gap-2"
        >
          <span className="h-px w-4 sm:w-6 lg:w-8 bg-wheat-300" />
          <span className="text-sm sm:text-base lg:text-xl font-semibold tracking-wider">
            SELMA — سالمة
          </span>
        </motion.p>

        {/* Titre */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-3 sm:mt-4 lg:mt-6 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.08] text-white"
        >
          {t('hero.title')}
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mt-2 sm:mt-3 lg:mt-5 max-w-xl text-sm sm:text-base lg:text-xl font-medium text-wheat-100"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-2 sm:mt-3 lg:mt-4 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-white/80"
        >
          {t('hero.text')}
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mt-4 sm:mt-6 lg:mt-8 xl:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a href="#entreprise" className="btn-primary text-xs sm:text-sm lg:text-base px-4 sm:px-5 lg:px-7 py-2.5 sm:py-3 lg:py-3.5">
            {t('hero.ctaPrimary')}
            <ArrowRight size={16} className={`${isRtl ? 'rotate-180' : ''}`} />
          </a>
          <a href="#produits" className="btn-secondary text-xs sm:text-sm lg:text-base px-4 sm:px-5 lg:px-7 py-2.5 sm:py-3 lg:py-3.5">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Masqué sur mobile, visible sur tablette et desktop */}
      <motion.a
        href="#entreprise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 sm:gap-1.5 lg:gap-2 text-[8px] sm:text-[10px] lg:text-xs font-medium uppercase tracking-widest text-white/70 sm:flex"
      >
        {t('hero.scroll')}
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/60" />
        </motion.span>
      </motion.a>
    </section>
  )
}
