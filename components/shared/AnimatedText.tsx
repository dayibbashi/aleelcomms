import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: AnimatedTextProps) {
  const letters = Array.from(text)

  return (
    <motion.h1
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: index * stagger }}
          className='inline-block'
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
