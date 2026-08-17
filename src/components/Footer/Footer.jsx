
import { useTranslation } from 'react-i18next'
import { Phone, MapPin, Mail } from 'lucide-react'
import Logo from '../Logo.jsx'
import { CONTACT_INFO } from '../../data/siteData'

const LINKS = [
  { key: 'home', href: '#accueil' },
  { key: 'about', href: '#entreprise' },
  { key: 'products', href: '#produits' },
  { key: 'quality', href: '#qualite' },
  { key: 'contact', href: '#contact' },
]

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')

  return (
    <footer className="section-pad bg-indigo-950 pt-16 pb-8 text-white">
      <div className={`container-max grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 ${isArabic ? 'rtl' : ''}`}>
        
        {/* Section Logo et tagline */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{t('footer.tagline')}</p>
          <p className="mt-4 text-sm font-medium text-white/70">
            {isArabic ? CONTACT_INFO.companyNameAr : CONTACT_INFO.companyName}
          </p>
          <p className="text-sm text-white/50">
            {isArabic ? CONTACT_INFO.addressAr : CONTACT_INFO.address}
          </p>
        </div>

        {/* Section Navigation - التصنيف */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-wheat-300">
            {t('footer.linksTitle')}
          </p>
          <ul className="mt-4 space-y-3">
            {LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Contact - الاتصال */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-wheat-300">
            {t('footer.contactTitle')}
          </p>
          <div className="mt-4 space-y-3">
            {/* Téléphone 1 */}
            <a 
              href={CONTACT_INFO.phoneHref} 
              className={`flex items-center gap-2.5 text-sm text-white/65 hover:text-white ${isArabic ? 'flex-row-reverse' : ''}`}
              dir="ltr"
            >
              <Phone size={15} className="shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            
            {/* Téléphone 2 */}
            <a 
              href={CONTACT_INFO.phoneHref2} 
              className={`flex items-center gap-2.5 text-sm text-white/65 hover:text-white ${isArabic ? 'flex-row-reverse' : ''}`}
              dir="ltr"
            >
              <Phone size={15} className="shrink-0" />
              <span>{CONTACT_INFO.phone2}</span>
            </a>
            
            {/* Fax */}
            <p className={`flex items-center gap-2.5 text-sm text-white/65 ${isArabic ? 'flex-row-reverse' : ''}`} dir="ltr">
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect x="2" y="8" width="20" height="14" rx="2" ry="2" />
                <path d="M8 8V4a2 2 0 012-2h4a2 2 0 012 2v4" />
                <line x1="6" y1="14" x2="18" y2="14" />
                <line x1="6" y1="18" x2="18" y2="18" />
                <line x1="6" y1="10" x2="18" y2="10" />
              </svg>
              <span>{CONTACT_INFO.fax}</span>
            </p>
            
            {/* Email */}
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className={`flex items-center gap-2.5 text-sm text-white/65 hover:text-white ${isArabic ? 'flex-row-reverse' : ''}`}
              dir="ltr"
            >
              <Mail size={15} className="shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className={`container-max pt-6 text-center text-xs text-white/40 ${isArabic ? 'rtl' : ''}`}>
        {t('footer.rights')}
      </p>
    </footer>
  )
}