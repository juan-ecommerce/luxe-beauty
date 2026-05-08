import { useTranslation } from 'react-i18next'
import { FiPhone } from 'react-icons/fi'
import AnimatedSection from '../ui/AnimatedSection'

export default function ReserveCTA() {
  const { t } = useTranslation()

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1400 45%, #0A0A0A 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-light/12 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-light/12 to-transparent" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <AnimatedSection>
          <p className="font-body text-xs text-gold-light tracking-[0.4em] uppercase mb-5">Alicante, España</p>
          <h2 className="font-display font-light text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            {t('cta.title')}
          </h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-7" />
          <p className="font-body text-muted text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          {/* Phone contact — no form */}
          <a href="tel:+34635104032"
            className="inline-flex items-center gap-3 font-body text-gold-light text-lg hover:text-gold transition-colors duration-200">
            <FiPhone size={20} />
            +34 635 10 40 32
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
