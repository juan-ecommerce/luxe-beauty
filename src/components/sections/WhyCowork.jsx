import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import BenefitCard from '../ui/BenefitCard'
import { benefits } from '../../data/benefits'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}

export default function WhyCowork() {
  const { t } = useTranslation()

  return (
    <section id="por-que" className="py-24 bg-obsidian grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-xs text-gold-light tracking-[0.4em] uppercase mb-3">Coworking</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">{t('why.title')}</h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-4" />
          <p className="font-body text-muted max-w-md mx-auto text-sm">{t('why.subtitle')}</p>
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map(({ id, Icon, titleKey, descKey }) => (
            <BenefitCard key={id} Icon={Icon} title={t(titleKey)} description={t(descKey)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
