import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Logo.jsx'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx'

const NAV_ITEMS = [
  { key: 'home', href: '#accueil' },
  { key: 'about', href: '#entreprise' },
  { key: 'products', href: '#produits' },
  { key: 'process', href: '#activite' },
  { key: 'quality', href: '#qualite' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="section-pad container-max flex h-20 items-center justify-between">
        <a href="#accueil" className="shrink-0" aria-label="SELMA — Accueil">
          <Logo light={!scrolled} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-indigo-950/80 hover:text-indigo-950' : 'text-white/90 hover:text-white'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher light={!scrolled} />
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            {t('nav.cta')}
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden ${scrolled ? 'text-indigo-950' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-indigo-950/98 lg:hidden"
          >
            <div className="section-pad flex h-20 items-center justify-between">
              <Logo light />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="text-white"
              >
                <X size={28} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-8 pt-6"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.key}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 text-lg font-medium text-white"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-6 flex flex-col gap-4 px-8">
              <LanguageSwitcher light />
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                {t('nav.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
