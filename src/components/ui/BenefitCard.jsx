import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function BenefitCard({ Icon, title, description }) {
  return (
    <motion.div variants={item} className="h-full">
      <div className="glass-card h-full p-7 group hover:border-gold-light/35
        hover:shadow-[0_4px_28px_rgba(212,175,55,0.09)] transition-all duration-300 rounded-sm">
        <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-full
          bg-gold-light/10 group-hover:bg-gold-light/20 transition-colors duration-300">
          <Icon size={20} className="text-gold-light" />
        </div>
        <h3 className="font-display text-lg font-medium text-white mb-2 tracking-wide">{title}</h3>
        <p className="font-body text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
