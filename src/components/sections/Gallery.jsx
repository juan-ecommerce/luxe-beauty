import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiX, FiZoomIn } from 'react-icons/fi'
import AnimatedSection from '../ui/AnimatedSection'
import luisaWorking from '../../assets/images/gallery/luisa-working.jpg'
import luisaPortrait from '../../assets/images/gallery/luisa-no-back.png'

const gradientItems = [
  {
    gradient: 'linear-gradient(135deg, #120d02 0%, #2a1e06 60%, #0c0901 100%)',
    accent: 'rgba(212,175,55,0.18)',
    labelKey: 'gallery.items.manicure',
  },
  {
    gradient: 'linear-gradient(135deg, #0e0b14 0%, #1c1728 60%, #080610 100%)',
    accent: 'rgba(160,120,220,0.12)',
    labelKey: 'gallery.items.brows',
  },
  {
    gradient: 'linear-gradient(135deg, #0a1208 0%, #162010 60%, #050a03 100%)',
    accent: 'rgba(80,180,80,0.08)',
    labelKey: 'gallery.items.lounge',
  },
  {
    gradient: 'linear-gradient(135deg, #100e18 0%, #1e1a2c 60%, #080810 100%)',
    accent: 'rgba(212,175,55,0.07)',
    labelKey: 'gallery.items.hair',
  },
]

export default function Gallery() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="galeria" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="font-body text-xs text-gold-light tracking-[0.4em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">{t('gallery.title')}</h2>
          <div className="w-16 h-px bg-gold-light mx-auto mb-4" />
          <p className="font-body text-muted text-sm">{t('gallery.subtitle')}</p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridAutoRows: '220px' }}>

          {/* Large real photo — spans 2 cols + 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden cursor-pointer group col-span-2 row-span-2 md:row-span-2"
            onClick={() => setLightbox({ src: luisaWorking, alt: t('gallery.items.studio') })}
          >
            <img src={luisaWorking} alt={t('gallery.items.studio')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107" />
            <Overlay label={t('gallery.items.studio')} showZoom />
          </motion.div>

          {/* Gradient items */}
          {gradientItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: (i + 1) * 0.07 }}
              className="relative overflow-hidden group"
            >
              <div className="w-full h-full" style={{ background: item.gradient }}>
                <div className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 30% 70%, ${item.accent}, transparent 60%)` }} />
                <div className="absolute top-5 right-5 w-10 h-10 border border-gold-light/18 rounded-full" />
                <div className="absolute bottom-8 left-5 w-5 h-5 border border-gold-light/12" style={{ transform: 'rotate(45deg)' }} />
              </div>
              <Overlay label={t(item.labelKey)} />
            </motion.div>
          ))}

          {/* Portrait photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => setLightbox({ src: luisaPortrait, alt: t('gallery.items.pedicure') })}
          >
            <img src={luisaPortrait} alt={t('gallery.items.pedicure')}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-107" />
            <Overlay label={t('gallery.items.pedicure')} showZoom />
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gold-light transition-colors p-2">
              <FiX size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Overlay({ label, showZoom = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full flex items-center justify-between">
          <span className="font-display text-sm text-cream tracking-wide">{label}</span>
          {showZoom && <FiZoomIn size={15} className="text-gold-light" />}
        </div>
      </div>
      {/* Always visible bottom gradient + label */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian/65 to-transparent pointer-events-none" />
      <p className="absolute bottom-3 left-4 font-display text-xs text-cream/60 tracking-wider pointer-events-none">{label}</p>
    </>
  )
}
