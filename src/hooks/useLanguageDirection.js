import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Garde <html lang="…" dir="…"> synchronisé avec la langue active.
// Permet d'ajouter facilement l'anglais (en) plus tard: il suffit
// que la langue ne soit pas 'ar' pour rester en LTR.
export default function useLanguageDirection() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const isRtl = i18n.language?.startsWith('ar')
    document.documentElement.lang = i18n.language || 'fr'
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [i18n.language])

  return { isRtl: i18n.language?.startsWith('ar') }
}
