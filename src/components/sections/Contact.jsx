import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck } from 'react-icons/fi'
import AnimatedSection from '../ui/AnimatedSection'
import GoldButton from '../ui/GoldButton'

// Create your free form at https://formspree.io and replace YOUR_FORM_ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const inputBase = `w-full bg-obsidian/60 border border-white/10 text-white font-body text-sm
  px-4 py-3 focus:outline-none focus:border-gold-light/45 transition-colors duration-200
  placeholder-white/20`
const labelBase = `font-body text-xs text-gold-light/75 tracking-[0.2em] uppercase mb-1.5 block`

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    setServerError(false)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
      else setServerError(true)
    } catch {
      setServerError(true)
    }
  }

  const specialties = ['hair', 'nails', 'brows', 'pedicure', 'manicure', 'multiple']

  return (
    <section id="contacto" className="py-24 bg-charcoal">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="font-body text-xs text-gold-light tracking-[0.4em] uppercase mb-3">Contacto</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">{t('contact.title')}</h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-4" />
          <p className="font-body text-muted text-sm max-w-md mx-auto">{t('contact.subtitle')}</p>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-14 text-center rounded-sm">
              <div className="w-16 h-16 bg-gold-light/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck size={26} className="text-gold-light" />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{t('contact.successTitle')}</h3>
              <p className="font-body text-muted text-sm">{t('contact.successDesc')}</p>
            </motion.div>
          ) : (
            <motion.form key="form" exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 md:p-10 rounded-sm space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label={t('contact.name')} error={errors.name?.message}>
                  <input {...register('name', { required: t('contact.required') })}
                    placeholder="Sofia García" className={inputBase} />
                </Field>
                <Field label={t('contact.email')} error={errors.email?.message}>
                  <input {...register('email', {
                    required: t('contact.required'),
                    pattern: { value: /^\S+@\S+\.\S+$/, message: t('contact.invalidEmail') }
                  })} type="email" placeholder="sofia@email.com" className={inputBase} />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label={t('contact.phone')}>
                  <input {...register('phone')} type="tel" placeholder="+34 600 000 000" className={inputBase} />
                </Field>
                <Field label={t('contact.specialty')} error={errors.specialty?.message}>
                  <select {...register('specialty', { required: t('contact.required') })}
                    defaultValue=""
                    className={`${inputBase} bg-charcoal cursor-pointer`}>
                    <option value="" disabled>{t('contact.specialtyOptions.placeholder')}</option>
                    {specialties.map(s => (
                      <option key={s} value={s}>{t(`contact.specialtyOptions.${s}`)}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label={t('contact.message')}>
                <textarea {...register('message')} rows={4}
                  placeholder={t('contact.messagePlaceholder')} className={inputBase} />
              </Field>

              {serverError && (
                <p className="font-body text-xs text-red-400">{t('contact.errorMsg')}</p>
              )}

              <div className="pt-2 text-center">
                <GoldButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto min-w-48">
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </GoldButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className={labelBase}>{label}</label>
      {children}
      {error && <p className="mt-1 font-body text-xs text-red-400">{error}</p>}
    </div>
  )
}
