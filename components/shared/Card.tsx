import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  animateOnHover?: boolean
}

export function Card({
  children,
  className,
  animateOnHover = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow-sm p-6',
        className
      )}
      whileHover={
        animateOnHover
          ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
