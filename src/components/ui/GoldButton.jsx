export default function GoldButton({ children, href, onClick, className = '', type = 'button', outline = false, disabled = false }) {
  const base = 'btn-gold inline-flex items-center justify-center px-8 py-4 font-body font-medium tracking-[0.15em] uppercase text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-light/40'
  const solid = disabled
    ? 'bg-gold-light/40 text-obsidian/50 cursor-not-allowed'
    : 'bg-gold-light text-obsidian hover:bg-gold hover:shadow-[0_0_32px_rgba(212,175,55,0.38)] active:scale-95 cursor-pointer'
  const outlineStyle = 'border border-gold-light text-gold-light hover:bg-gold-light hover:text-obsidian cursor-pointer'
  const cls = `${base} ${outline ? outlineStyle : solid} ${className}`

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} className={cls} disabled={disabled}>{children}</button>
}
