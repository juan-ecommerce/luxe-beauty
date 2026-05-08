import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-xs text-gold tracking-[0.4em] uppercase mb-3">Luxe Beauty</p>
          <h2 className="font-display text-4xl md:text-5xl text-obsidian font-light mb-4">{t('services.title')}</h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-4" />
          <p className="font-body text-obsidian/55 max-w-md mx-auto text-sm">{t('services.subtitle')}</p>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-cream-dark"
        >
          {services.map(({ id, Icon, titleKey, descKey }) => (
            <ServiceCard key={id} Icon={Icon} title={t(titleKey)} description={t(descKey)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
