
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ light = false }) {
  const { i18n } = useTranslation()
  const current = i18n.language?.startsWith('ar') ? 'ar' : 'fr'

  const setLang = (lng) => {
    if (lng !== current) i18n.changeLanguage(lng)
  }

  const base = 'px-2 py-1 text-sm font-semibold transition-colors rounded-md'
  const activeCls = light ? 'bg-white/20 text-white' : 'bg-indigo-900 text-white'
  const inactiveCls = light ? 'text-white/70 hover:text-white' : 'text-indigo-900/60 hover:text-indigo-900'

  return (
    <div
      className={`flex items-center gap-1 rounded-lg border px-1 py-1 ${
        light ? 'border-white/25' : 'border-indigo-900/15'
      }`}
      role="group"
      aria-label={current === 'ar' ? 'محدد اللغة' : 'Sélecteur de langue'}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        className={`${base} ${current === 'fr' ? activeCls : inactiveCls}`}
        aria-pressed={current === 'fr'}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        className={`${base} ${current === 'ar' ? activeCls : inactiveCls}`}
        aria-pressed={current === 'ar'}
      >
        AR
      </button>
    </div>
  )
}