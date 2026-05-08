import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ServiceCard({ Icon, title, description }) {
  return (
    <motion.div
      variants={item}
      className="group flex flex-col items-center text-center p-8 bg-white border border-transparent
        hover:border-gold-light/30 hover:bg-cream-dark
        hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)]
        transition-all duration-300 cursor-default"
    >
      <div className="w-16 h-16 flex items-center justify-center mb-5 rounded-full
        bg-obsidian/5 group-hover:bg-gold-light/10 transition-colors duration-300">
        <Icon size={30} className="text-gold transition-colors duration-300" />
      </div>
      <h3 className="font-display text-xl font-medium text-obsidian mb-2 tracking-wide">{title}</h3>
      <p className="font-body text-sm text-obsidian/55 leading-relaxed">{description}</p>
    </motion.div>
  )
}
