import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { CONTACT_INFO } from '../../data/siteData'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language?.startsWith('ar')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.form.errorRequired')
    if (!form.email.trim()) next.email = t('contact.form.errorRequired')
    else if (!emailRegex.test(form.email)) next.email = t('contact.form.errorEmail')
    if (!form.subject.trim()) next.subject = t('contact.form.errorRequired')
    if (!form.message.trim()) next.message = t('contact.form.errorRequired')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 900)
  }

  const fields = [
    { name: 'name', type: 'text', span: 'sm:col-span-1' },
    { name: 'email', type: 'email', span: 'sm:col-span-1' },
    { name: 'phone', type: 'tel', span: 'sm:col-span-1' },
    { name: 'subject', type: 'text', span: 'sm:col-span-1' },
  ]

  const FaxIcon = ({ size = 18 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="8" width="20" height="14" rx="2" ry="2" />
      <path d="M8 8V4a2 2 0 012-2h4a2 2 0 012 2v4" />
      <line x1="6" y1="14" x2="18" y2="14" />
      <line x1="6" y1="18" x2="18" y2="18" />
      <line x1="6" y1="10" x2="18" y2="10" />
    </svg>
  )

  return (
    <section id="contact" className="section-pad bg-stone-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container-max grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="eyebrow text-xs sm:text-sm">{t('contact.eyebrow')}</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-indigo-950">
            {t('contact.title')}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-indigo-950/70">
            {t('contact.text')}
          </p>

          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            {/* Adresse */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                <MapPin size={16} className="sm:size-18" />
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-indigo-950/50">
                  {t('contact.addressLabel')}
                </p>
                <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-indigo-950">
                  {isArabic ? CONTACT_INFO.addressAr : CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Téléphone 1 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                <Phone size={16} className="sm:size-18" />
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-indigo-950/50">
                  {t('contact.phoneLabel')} 1
                </p>
                <a 
                  href={CONTACT_INFO.phoneHref} 
                  className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-indigo-950 hover:text-wheat-700"
                  dir="ltr"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Téléphone 2 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                <Phone size={16} className="sm:size-18" />
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-indigo-950/50">
                  {t('contact.phoneLabel')} 2
                </p>
                <a 
                  href={CONTACT_INFO.phoneHref2} 
                  className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-indigo-950 hover:text-wheat-700"
                  dir="ltr"
                >
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Fax */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                <FaxIcon size={16} className="sm:size-18" />
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-indigo-950/50">
                  {t('contact.faxLabel') || 'Fax'}
                </p>
                <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-indigo-950" dir="ltr">
                  {CONTACT_INFO.fax}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-indigo-900 text-wheat-300">
                <Mail size={16} className="sm:size-18" />
              </span>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-indigo-950/50">
                  {t('contact.emailLabel') || 'Email'}
                </p>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-indigo-950 hover:text-wheat-700 break-all"
                  dir="ltr"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="card lg:col-span-3 p-5 sm:p-7 md:p-8 lg:p-9"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 sm:py-14 text-center">
              <CheckCircle2 size={32} className="sm:size-40 text-wheat-600" />
              <p className="max-w-xs text-sm font-medium text-indigo-950">{t('contact.form.success')}</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-4 !py-2 !px-5 text-xs">
                {t('contact.form.name')}
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.span}>
                  <label htmlFor={field.name} className="mb-1 sm:mb-1.5 block text-xs sm:text-sm font-semibold text-indigo-950">
                    {t(`contact.form.${field.name}`)}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={t(`contact.form.${field.name}Placeholder`)}
                    className={`w-full rounded-lg border bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-wheat-500 ${
                      errors[field.name] ? 'border-grain-600' : 'border-indigo-950/15'
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="mt-1 sm:mt-1.5 text-xs font-medium text-grain-600">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 sm:mb-1.5 block text-xs sm:text-sm font-semibold text-indigo-950">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} sm:rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className={`w-full resize-none rounded-lg border bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-wheat-500 ${
                    errors.message ? 'border-grain-600' : 'border-indigo-950/15'
                  }`}
                />
                {errors.message && <p className="mt-1 sm:mt-1.5 text-xs font-medium text-grain-600">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-70 text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}