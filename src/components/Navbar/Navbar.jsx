// src/components/Navbar/Navbar.jsx

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Logo.jsx'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx'

// Sous-menu À PROPOS
const ABOUT_SUB_ITEMS = [
  { key: 'entreprise', href: '#entreprise' },
  { key: 'products', href: '#produits' },
  { key: 'process', href: '#activite' },
  { key: 'quality', href: '#qualite' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [aboutOpenDesktop, setAboutOpenDesktop] = useState(false)

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

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setAboutOpen(false)
    setAboutOpenDesktop(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleAbout = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAboutOpen(!aboutOpen)
  }

  const toggleAboutDesktop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAboutOpenDesktop(!aboutOpenDesktop)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="section-pad container-max flex h-16 sm:h-20 items-center justify-between">
        <a href="#accueil" className="shrink-0" aria-label="SELMA — Accueil">
          <Logo light={!scrolled} size="sm" />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden items-center gap-4 lg:gap-6 xl:gap-8 xl:flex">
          <li>
            <a
              href="#accueil"
              onClick={(e) => handleNavClick(e, '#accueil')}
              className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled ? 'text-indigo-950/80 hover:text-indigo-950' : 'text-white/90 hover:text-white'
              }`}
            >
              {t('nav.home')}
            </a>
          </li>

          <li className="relative">
            <button
              onClick={toggleAboutDesktop}
              onMouseEnter={() => setAboutOpenDesktop(true)}
              onMouseLeave={() => setAboutOpenDesktop(false)}
              className={`flex items-center gap-1 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled ? 'text-indigo-950/80 hover:text-indigo-950' : 'text-white/90 hover:text-white'
              }`}
            >
              {t('nav.about')}
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${aboutOpenDesktop ? 'rotate-180' : ''}`} 
              />
            </button>

            <div
              className={`absolute top-full left-0 mt-2 min-w-[220px] rounded-xl overflow-hidden transition-all duration-300 origin-top shadow-xl border ${
                scrolled 
                  ? 'border-indigo-100 bg-white' 
                  : 'border-white/10 bg-indigo-950/95 backdrop-blur-sm'
              } ${
                aboutOpenDesktop ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}
              style={{
                boxShadow: scrolled 
                  ? '0 20px 60px rgba(30, 27, 75, 0.15)' 
                  : '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={() => setAboutOpenDesktop(true)}
              onMouseLeave={() => setAboutOpenDesktop(false)}
            >
              {ABOUT_SUB_ITEMS.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-5 py-3.5 text-sm font-medium transition-all duration-200 ${
                    scrolled 
                      ? 'text-indigo-950/80 hover:bg-indigo-50 hover:text-indigo-950 hover:pl-6' 
                      : 'text-white/80 hover:bg-white/10 hover:text-white hover:pl-6'
                  } ${index < ABOUT_SUB_ITEMS.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  {t(`nav.sub.${item.key}`)}
                </a>
              ))}
            </div>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled ? 'text-indigo-950/80 hover:text-indigo-950' : 'text-white/90 hover:text-white'
              }`}
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher light={!scrolled} />
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary !py-1.5 !px-3 lg:!py-2.5 lg:!px-5 text-[10px] lg:text-xs">
            {t('nav.cta')}
          </a>
        </div>

        <button
          type="button"
          className={`xl:hidden ${scrolled ? 'text-indigo-950' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} className="sm:size-28" />
        </button>
      </nav>

      {/* Sidebar Mobile - Bleu Profond + Jaune Doré */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200] bg-black/60 xl:hidden"
              onClick={() => {
                setOpen(false)
                setAboutOpen(false)
              }}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 z-[300] h-[100dvh] w-[78%] max-w-[330px] xl:hidden overflow-y-auto"
              style={{
                background: 'linear-gradient(180deg, #0A1628 0%, #0D1F3C 25%, #0F2847 50%, #1A3A6B 75%, #1E4B8A 100%)',
                boxShadow: '4px 0 40px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* En-tête avec logo et bouton fermeture */}
              <div className="flex h-16 sm:h-20 items-center justify-between px-5 sm:px-6 border-b border-white/10 shrink-0">
                <a href="#accueil" onClick={() => { setOpen(false); setAboutOpen(false) }}>
                  <Logo light size="sm" />
                </a>
                <button
                  type="button"
                  onClick={() => { setOpen(false); setAboutOpen(false) }}
                  className="text-white hover:text-wheat-300 transition-colors p-2 rounded-lg hover:bg-white/5"
                  aria-label="Fermer le menu"
                >
                  <X size={24} className="sm:size-28" />
                </button>
              </div>

              {/* Contenu principal */}
              <div className="flex flex-col h-[calc(100dvh-80px)] px-4 sm:px-5 py-4 sm:py-6">
                <div className="flex-1 overflow-y-auto">
                  {/* ACCUEIL */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                  >
                    <a
                      href="#accueil"
                      onClick={(e) => handleNavClick(e, '#accueil')}
                      className="flex items-center h-14 sm:h-16 text-white/90 text-[15px] font-medium tracking-wide hover:bg-white/5 hover:pl-4 transition-all duration-200 rounded-lg px-3 group"
                    >
                      <span className="w-1 h-6 bg-wheat-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity mr-3" />
                      {t('nav.home').toUpperCase()}
                    </a>
                    <div className="h-px bg-white/5 mx-3" />
                  </motion.div>

                  {/* À PROPOS avec sous-menu */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <button
                      onClick={toggleAbout}
                      className="flex items-center justify-between w-full h-14 sm:h-16 text-white/90 text-[15px] font-medium tracking-wide hover:bg-white/5 hover:pl-4 transition-all duration-200 rounded-lg px-3 group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1 h-6 bg-wheat-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {t('nav.about').toUpperCase()}
                      </span>
                      <span className={`text-xl font-light text-wheat-400 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}>
                        {aboutOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div className="h-px bg-white/5 mx-3" />

                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden rounded-lg mt-1 mx-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            backdropFilter: 'blur(4px)',
                          }}
                        >
                          {ABOUT_SUB_ITEMS.map((item, index) => (
                            <motion.div
                              key={item.key}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="flex items-center h-12 sm:h-14 text-white/70 text-[14px] font-medium tracking-wide hover:bg-white/10 hover:text-white hover:pl-3 transition-all duration-200 rounded-lg px-4 pl-8"
                              >
                                <span className="w-1 h-4 bg-wheat-400/50 rounded-full mr-3" />
                                {t(`nav.sub.${item.key}`)}
                              </a>
                              {index < ABOUT_SUB_ITEMS.length - 1 && (
                                <div className="h-px bg-white/5 mx-4" />
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* CONTACT */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="flex items-center h-14 sm:h-16 text-white/90 text-[15px] font-medium tracking-wide hover:bg-white/5 hover:pl-4 transition-all duration-200 rounded-lg px-3 group"
                    >
                      <span className="w-1 h-6 bg-wheat-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity mr-3" />
                      {t('nav.contact').toUpperCase()}
                    </a>
                    <div className="h-px bg-white/5 mx-3" />
                  </motion.div>
                </div>

                {/* Footer du sidebar */}
                <div className="shrink-0 pt-4 mt-auto border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    <LanguageSwitcher light />
                    <a 
                      href="#contact" 
                      onClick={(e) => handleNavClick(e, '#contact')} 
                      className="w-full text-center py-3.5 px-4 bg-wheat-500 text-blue-950 font-semibold rounded-xl shadow-lg hover:bg-wheat-400 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-sm tracking-wide"
                    >
                      {t('nav.cta')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}