import { useTranslation } from 'react-i18next'
import { FiMapPin, FiPhone, FiClock, FiNavigation } from 'react-icons/fi'
import AnimatedSection from '../ui/AnimatedSection'

export default function Location() {
  const { t } = useTranslation()

  return (
    <section id="ubicacion" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="font-body text-xs text-gold-light tracking-[0.4em] uppercase mb-3">Alicante</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">{t('location.title')}</h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-4" />
          <p className="font-body text-muted text-sm">{t('location.subtitle')}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Info */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <div className="glass-card p-8 space-y-7 rounded-sm">

              <InfoRow icon={FiMapPin} label={t('location.address')}>
                <p className="font-display text-xl text-white">Avenida Denia 5</p>
                <p className="font-body text-sm text-muted">Alicante, España</p>
              </InfoRow>

              <InfoRow icon={FiPhone} label={t('location.phone')}>
                <a href="tel:+34635104032"
                  className="font-display text-xl text-white hover:text-gold-light transition-colors duration-200">
                  +34 635 10 40 32
                </a>
              </InfoRow>

              <InfoRow icon={FiClock} label={t('location.hours')}>
                <div className="space-y-2 w-full">
                  <div className="flex justify-between border-b border-white/6 pb-2">
                    <span className="font-body text-sm text-white">{t('location.weekdays')}</span>
                    <span className="font-body text-sm text-muted">{t('location.weekdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-white">{t('location.sunday')}</span>
                    <span className="font-body text-sm text-muted">{t('location.sundayHours')}</span>
                  </div>
                </div>
              </InfoRow>
            </div>

            <a href="https://www.google.com/maps/search/Avenida+Denia+5,+Alicante,+Spain"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-gold-light
                border-b border-gold-light/30 hover:border-gold hover:text-gold transition-colors duration-200 pb-0.5">
              <FiNavigation size={13} />
              {t('location.getDirections')}
            </a>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div className="overflow-hidden border border-gold-light/14 rounded-sm" style={{ height: '460px' }}>
              <iframe
                title="Luxe Beauty Coworking — Avenida Denia 5, Alicante"
                src="https://maps.google.com/maps?q=Avenida+Denia+5,+Alicante,+Spain&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-gold-light/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-gold-light" />
      </div>
      <div className="flex-1">
        <p className="font-body text-xs text-gold-light/75 tracking-[0.2em] uppercase mb-1.5">{label}</p>
        {children}
      </div>
    </div>
  )
}
