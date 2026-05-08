import { useTranslation } from 'react-i18next'
import { FiInstagram, FiPhone, FiMapPin } from 'react-icons/fi'
import luxeLogo from '../../assets/images/logos/luxe.png'

const navLinks = [
  { key: 'nav.services', href: '#servicios' },
  { key: 'nav.whyUs',    href: '#por-que' },
  { key: 'nav.gallery',  href: '#galeria' },
  { key: 'nav.location', href: '#ubicacion' },
  { key: 'nav.contact',  href: '#contacto' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-obsidian border-t border-gold-light/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="bg-white/95 inline-block px-4 py-2 mb-5">
              <img src={luxeLogo} alt="Luxe Beauty Coworking" className="h-10 w-auto" />
            </div>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs text-gold-light tracking-[0.25em] uppercase mb-5">{t('footer.links')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="font-body text-sm text-muted hover:text-gold-light transition-colors duration-200 tracking-[0.08em] uppercase">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs text-gold-light tracking-[0.25em] uppercase mb-5">{t('footer.follow')}</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <FiMapPin size={14} className="text-gold-light mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-muted">Avenida Denia 5<br />Alicante, España</span>
              </div>
              <a href="tel:+34635104032" className="flex items-center gap-3 text-muted hover:text-gold-light transition-colors duration-200">
                <FiPhone size={14} className="text-gold-light flex-shrink-0" />
                <span className="font-body text-sm">+34 635 10 40 32</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-gold-light transition-colors duration-200">
                <FiInstagram size={14} className="text-gold-light flex-shrink-0" />
                <span className="font-body text-sm">@luxebeautycoworking</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold-light/10 text-center">
          <p className="font-body text-xs text-muted/50 tracking-widest">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
