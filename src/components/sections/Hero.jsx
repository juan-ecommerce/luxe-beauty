import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiChevronDown } from 'react-icons/fi'
import GoldButton from '../ui/GoldButton'
import luxeLogo from '../../assets/images/logos/luxe.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])

  return (
    <section ref={ref} id="inicio" className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-obsidian">

      {/* Parallax bg layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="absolute inset-0 grid-pattern" />
        {/* Radial vignette */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.85) 100%)' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Logo badge */}
        <motion.div {...fadeUp(0)} className="mb-10 flex justify-center">
          <div className="bg-white/97 px-8 py-4 border border-gold-light/20 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
            <img src={luxeLogo} alt="Luxe Beauty Coworking" className="h-14 md:h-18 lg:h-20 w-auto" style={{ height: 'clamp(3.5rem, 5vw, 5rem)' }} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-light text-white leading-none mb-2"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Italic subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="font-display font-light italic text-gold-light leading-none mb-8"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3.2rem)' }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-20 h-px bg-gold-light mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          {...fadeUp(0.6)}
          className="font-body text-white/58 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
        >
          {t('hero.desc')}
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.75)}>
          <GoldButton href="#contacto">{t('hero.cta')}</GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2"
        style={{ animation: 'scrollBounce 2.5s ease-in-out infinite' }}
      >
        <span className="font-body text-xs text-white/28 tracking-[0.35em] uppercase">{t('hero.scroll')}</span>
        <FiChevronDown size={16} className="text-gold-light/35" />
      </motion.div>
    </section>
  )
}
