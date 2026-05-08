import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import gehwolLogo from '../../assets/images/brands/gehwol.png'
import swisscolorLogo from '../../assets/images/brands/swisscolor.png'
import inleiLogo from '../../assets/images/brands/logoinlei.png'
import longtimeLogo from '../../assets/images/brands/longtimeliners.png'
import zoLogo from '../../assets/images/brands/zo-skinhealth.png'
import fillmedLogo from '../../assets/images/brands/fillmed.png'

const brands = [
  { name: 'Gehwol',         src: gehwolLogo },
  { name: 'Swiss Color',    src: swisscolorLogo },
  { name: 'InLei',          src: inleiLogo },
  { name: 'Long Time Liner',src: longtimeLogo },
  { name: 'ZO Skin Health', src: zoLogo },
  { name: 'FillMed',        src: fillmedLogo },
]

function BrandItem({ name, src }) {
  return (
    <div className="flex items-center justify-center px-10 md:px-14 flex-shrink-0 h-16">
      <img src={src} alt={name}
        className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-45
          hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
    </div>
  )
}

export default function Brands() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-cream border-y border-gold-light/12 overflow-hidden">
      <AnimatedSection className="text-center mb-10">
        <p className="font-body text-xs text-gold tracking-[0.4em] uppercase">{t('brands.title')}</p>
      </AnimatedSection>
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
            <BrandItem key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
