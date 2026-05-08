import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import useScrollPosition from '../../hooks/useScrollPosition'
import luxeLogo from '../../assets/images/logos/luxe.png'

const links = [
  { key: 'nav.services', href: '#servicios' },
  { key: 'nav.whyUs',    href: '#por-que' },
  { key: 'nav.gallery',  href: '#galeria' },
  { key: 'nav.location', href: '#ubicacion' },
  { key: 'nav.contact',  href: '#contacto' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const scrolled = scrollY > 80

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-obsidian/92 backdrop-blur-md border-b border-gold-light/10 py-3' : 'py-5'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <div className="bg-white/95 px-4 py-2">
            <img src={luxeLogo} alt="Luxe Beauty Coworking" className="h-8 md:h-10 w-auto" />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ key, href }) => (
            <li key={key}>
              <a href={href} className="font-body text-sm text-white/65 hover:text-gold-light tracking-[0.1em] uppercase transition-colors duration-200">
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button onClick={toggleLang}
            className="hidden sm:block font-body text-xs tracking-[0.25em] text-white/45 hover:text-gold-light transition-colors duration-200 uppercase">
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#contacto"
            className="hidden sm:inline-flex btn-gold items-center px-5 py-2.5 font-body text-xs tracking-[0.15em] uppercase
              bg-gold-light text-obsidian hover:bg-gold transition-colors duration-200">
            {t('nav.reserve')}
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-1" aria-label="Toggle menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-obsidian/96 backdrop-blur-md border-t border-gold-light/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map(({ key, href }) => (
                <a key={key} href={href} onClick={() => setOpen(false)}
                  className="font-body text-sm text-white/75 hover:text-gold-light tracking-[0.1em] uppercase py-3 border-b border-white/5">
                  {t(key)}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button onClick={toggleLang}
                  className="font-body text-xs tracking-[0.2em] text-white/45 hover:text-gold-light uppercase">
                  {i18n.language === 'es' ? 'EN' : 'ES'}
                </button>
                <a href="#contacto" onClick={() => setOpen(false)}
                  className="btn-gold inline-flex items-center px-6 py-2.5 font-body text-xs tracking-[0.15em] uppercase bg-gold-light text-obsidian">
                  {t('nav.reserve')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
