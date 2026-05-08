export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card rounded-sm ${className}`}>
      {children}
    </div>
  )
}
