'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-8'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold'>Astra Comms</span>
        </Link>

        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </nav>

        <motion.button className='md:hidden' whileTap={{ scale: 0.95 }}>
          <div className='h-6 w-6'>
            <span className='sr-only'>Toggle menu</span>
            <div className='space-y-1.5'>
              <div className='h-0.5 w-6 bg-foreground'></div>
              <div className='h-0.5 w-6 bg-foreground'></div>
              <div className='h-0.5 w-6 bg-foreground'></div>
            </div>
          </div>
        </motion.button>
      </div>
    </header>
  )
}
